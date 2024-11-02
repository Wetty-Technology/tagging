// @ts-ignore
import { density1d } from 'fast-kde';
import * as _ from 'lodash-es';
import { createWriteStream } from 'node:fs';
import OpenAI from 'openai';
// @ts-ignore
import grammar from './characters.gbnf';
import { log } from './uitls';

const openai = new OpenAI();
const limit = 16000;

export async function doTag(message: string, subject: string): Promise<[string[], any]> {
  return [...(await 性别(message, subject))];
}

async function 性别(message: string, subject: string): Promise<[string[], any]> {
  if (/男女都有|男女憋/i.test(subject)) return [['男憋', '女憋'], '标题1'];
  if (/男憋|GB|BL|耽美|原耽|女攻|女控|男奴|（男|\(男/i.test(subject)) return [['男憋'], '标题2'];
  if (/女憋|BG|GL|百合|少女|女孩|女生|美女|女主播/i.test(subject)) return [['女憋'], '标题3'];

  // const noQuote = message.replaceAll(/["“「][^\n]{1,300}?["”」]/g, '');
  // const 我 = charCount(noQuote, '我') / message.length;
  // if (我 < 0.01) {
  //   // 第三人称，其实大概要 < 0.05 才是第三人称，< 0.1 的依然有很多是有主视角，但是这种一般我只是个旁观者，憋是别人憋的，所以这里依然用 0.1 作为阈值。
  //   const 她 = charCount(noQuote, '她');
  //   const 他 = charCount(noQuote, '他');
  //   const 性别 = threshold(她 / (她 + 他), 0.33, 0.67, '男憋', '女憋');
  //   if (性别) return [[性别], { 我, 她, 他 }];
  // }

  return await 性别AI(truncate(message));
}

export const enum Gender {
  女 = '女',
  男 = '男',
}

export const enum Has {
  无 = '无',
  有 = '有',
}

export interface Character {
  姓名: string;
  性别: Gender;
  '憋尿、尿裤子的行为或隐喻': Has;
}

async function AI(message: string, prompt: string): Promise<Character[]> {
  log(message);
  log('\n');
  log(prompt);
  log('\n');

  let t = Date.now();
  const chatCompletion = await openai.chat.completions.create(<OpenAI.Chat.ChatCompletionCreateParamsNonStreaming>{
    model: '',
    messages: [
      {
        role: 'system',
        content: message,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    logprobs: true,
    temperature: 0,
    seed: 0,
    max_completion_tokens: 1000,
    grammar,
  });

  // let s = ''
  // for await (const chunk of stream) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  //   s += chunk.choices[0]?.delta?.content;
  // }

  console.log(Date.now() - t);
  const result = chatCompletion.choices[0].message.content!;

  log(result);
  log('\n');
  log('\n');

  return result
    .matchAll(/\d. \*\*([^\n]+)\*\*\n   - \*\*性别\*\*：(男|女)\n   - \*\*憋尿、尿裤子的行为或隐喻\*\*：(有|无)/g)
    .map((m) => ({ 姓名: m[1], 性别: m[2] as Gender, '憋尿、尿裤子的行为或隐喻': m[3] as Has }))
    .toArray();
}

async function 性别AI(message: string): Promise<[string[], Character[]]> {
  const data = (await AI(message, `仔细阅读文章，提取里面的角色，回答每个角色的姓名、性别，角色本人是否有憋尿、尿裤子的行为或隐喻？`))!;
  const result = [];

  const holding = data.filter((p) => p['憋尿、尿裤子的行为或隐喻'] === Has.有);
  if (holding.length) {
    if (holding.some((p) => p.性别 === Gender.男)) result.push('男憋');
    if (holding.some((p) => p.性别 === Gender.女)) result.push('女憋');
  } else if (data.length) {
    if (data.every((p) => p.性别 === Gender.女)) result.push('女憋');
  }

  return [result, data];
}

export function truncate(message: string) {
  if (message.length > limit) {
    let data: number[] = [];
    for (let i = 0; i < message.length; i++) {
      if (['憋', '尿', '禁', '漏', '急', '夹', '腿', '厕', '颤'].includes(message.charAt(i))) data.push(i);
    }

    const d1: { x: number; y: number }[] = [...density1d(data, { extent: [0, message.length] })];
    const center = _.maxBy(d1, (d) => d.y)!.x;
    const start = _.clamp(center - limit / 2, 0, message.length - limit);
    return message.slice(start, start + limit);
  }
  return message;
}
