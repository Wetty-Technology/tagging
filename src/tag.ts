// @ts-ignore
import { density1d } from 'fast-kde';
import * as _ from 'lodash-es';
import OpenAI from 'openai';
// @ts-ignore
import grammarCharacters from './characters.gbnf';
// @ts-ignore
import grammarTags from './tags.gbnf';

import { log } from './uitls';
import jsonLoose from 'json-loose';

const openai = new OpenAI({});
export const limit = 16000;

export async function doTag(message: string, subject: string): Promise<[string[], any]> {
  // return [...(await 性别(message, subject))];
  return await 综合AI(truncate(message));
}

async function 性别(message: string, subject: string): Promise<[string[], any]> {
  if (/男女都有|男女憋/i.test(subject)) return [['男憋', '女憋'], '标题1'];
  if (/男憋|GB|BL|耽美|原耽|女攻|女控|男奴|（男|\(男/i.test(subject)) return [['男憋'], '标题2'];
  if (/女憋|BG|GL|百合|少女|女孩|女生|美女|女主播/i.test(subject)) return [['女憋'], '标题3'];

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

async function AI(system: string, user: string, grammar: any): Promise<string> {
  log(system);
  log('\n');
  log(user);
  log('\n');

  let t = Date.now();
  const chatCompletion = await openai.chat.completions.create(<OpenAI.Chat.ChatCompletionCreateParamsNonStreaming>{
    model: 'Qwen/QwQ-32B:free',
    messages: [
      {
        role: 'system',
        content: system,
      },
      {
        role: 'user',
        content: user,
      },
    ],
    // provider: {
    //   order: ["Nineteen"],
    //   allow_fallbacks: false,
    // },
    // stream: true,
    // include_reasoning: true,
    // logprobs:true,
    temperature: 0.2,
    // seed: 0,
    max_completion_tokens: 2000,
    grammar,
    cache_prompt: true,
  });

  // let result = '';
  // for await (const chunk of chatCompletion) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  //   result += chunk.choices[0]?.delta?.content;
  // }

  let result = chatCompletion.choices[0].message.content!;

  console.log(Date.now() - t);

  log(result);
  log('\n');
  log('\n');

  result = result.replace(/<think>(.|\n)*<\/think>/, '').trim();

  return result;
}

async function 性别AI(message: string): Promise<[string[], string]> {
  const response = (await AI(message, `仔细阅读文章，提取里面的角色，回答每个角色的姓名、性别，角色本人是否有憋尿、尿裤子的行为或隐喻？`, grammarCharacters))!;
  const characters = response
    .matchAll(/\d. \*\*([^\n]+)\*\*\n   - \*\*性别\*\*：(男|女)\n   - \*\*憋尿、尿裤子的行为或隐喻\*\*：(有|无)/g)
    .map((m) => ({ 姓名: m[1], 性别: m[2] as Gender, '憋尿、尿裤子的行为或隐喻': m[3] as Has }))
    .toArray();
  const result = [];
  const holding = characters.filter((p) => p['憋尿、尿裤子的行为或隐喻'] === Has.有);
  if (holding.length) {
    if (holding.some((p) => p.性别 === Gender.男)) result.push('男憋');
    if (holding.some((p) => p.性别 === Gender.女)) result.push('女憋');
  } else if (characters.length) {
    if (characters.every((p) => p.性别 === Gender.女)) result.push('女憋');
  }
  return [result, response];
}

async function 综合AI(message: string): Promise<[string[], string]> {
  const response = (await AI(
    `仔细阅读文章，为文章打标签。可选的标签及定义如下：
贞操带：故事中含有贞操带。
拘束：故事中含有捆绑。
尿道锁：故事中含有佩戴在身上堵住尿道的道具。

输出为 json object 格式，key 为标签名，value 为 boolean 表示这篇文章是否包含这个标签。
如果包含多个故事，合并处理。`,
    message,
    grammarTags,
  ))!;
  const matched = response.match(/\{(.|\n)*}/);

  const obj = JSON.parse(jsonLoose(matched![0]));
  const tags = Object.keys(obj).filter((key) => obj[key]);
  if (tags.includes('娱乐')) {
    _.pull(tags, '娱乐');
    tags.push('都市');
  }
  if (tags.includes('男同')) {
    _.pull(tags, '男同');
    tags.push('BL');
  }
  if (tags.includes('职场女性')) {
    _.pull(tags, '职场女性');
    tags.push('OL');
  }
  if (tags.includes('古代')) {
    _.pull(tags, '古代');
    tags.push('古风');
  }

  if (message.includes('女仆')) tags.push('女仆');
  // const tags = res.result;

  return [tags, ''];
}

export function truncate(message: string) {
  if (message.length > limit) {
    // let data: number[] = [];
    // for (let i = 0; i < message.length; i++) {
    //   if (['憋', '尿', '禁', '漏', '急', '夹', '腿', '厕', '颤'].includes(message.charAt(i))) data.push(i);
    // }
    // let center;
    // if (data.length === 0) {
    //   center = message.length / 2;
    // } else {
    //   const d1: { x: number; y: number }[] = [...density1d(data, { extent: [0, message.length] })];
    //   center = _.maxBy(d1, (d) => d.y)!.x;
    // }
    // const start = _.clamp(center - limit / 2, 0, message.length - limit);
    // return message.slice(start, start + limit);
    return message.slice(0, limit);
  }
  return message;
}
