import { charCount, threshold } from './uitls.js';
import OpenAI from 'openai';
import { ChatCompletionCreateParamsNonStreaming } from 'openai/src/resources/chat/completions.js';
import { density1d } from 'fast-kde';
import * as _ from 'lodash-es';
import log from '../log.json';
import { compile, compileSync, serializeGrammar } from '@intrinsicai/gbnfgen';
import { Character } from './grammar.js';
const openai = new OpenAI();
const limit = 14000;

export async function doTag(message: string, subject: string) {
  return [...(await 性别(message, subject))];
}

async function 性别(message: string, subject: string): Promise<string[]> {
  // if (subject === '《憋尿少女》1-44章合集帖！') return ['女憋'];
  // if (/男女都有|男女憋/i.test(subject)) return ['男憋', '女憋'];
  // if (/男憋|GB|BL|耽美|原耽|女攻|女控|男奴|（男|\(男|/i.test(subject)) return ['男憋'];
  // if (/女憋|BG|GL|百合|少女|女孩|女生|美女|女主播|公主/i.test(subject)) return ['女憋'];
  //
  // const noQuote = message.replaceAll(/["“「][^\n]{1,300}?["”」]/g, '');
  // const 我 = charCount(noQuote, '我') / message.length;
  // if (我 < 0.01) {
  //   // 第三人称，其实大概要 < 0.05 才是第三人称，< 0.1 的依然有很多是有主视角，但是这种一般我只是个旁观者，憋是别人憋的，所以这里依然用 0.1 作为阈值。
  //   const 她 = charCount(noQuote, '她');
  //   const 他 = charCount(noQuote, '他');
  //   const 性别 = threshold(她 / (她 + 他), 0.33, 0.67, '男憋', '女憋');
  //   if (性别) return [性别];
  // }

  return await 性别AI(truncate(message));
}

const grammar = serializeGrammar(
  compileSync(
    `enum Gender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}
interface Character {
  name: string;
  gender: Gender;
  'holding pee': boolean;
  'peeing self': boolean;
}
interface Root extends Array<Character> {}`,
    'Root',
  ),
);

console.log(grammar);
async function AI(message: string, prompt: string, seed: number = 0) {
  // const s = log[message];
  // if (s) return s;
  const t = Date.now();
  const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(<ChatCompletionCreateParamsNonStreaming>{
    model: '',
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: message,
      },
    ],
    stream: false,

    top_p: 1,
    top_k: 1,
    min_p: 0,
    temperature: 0,
    repeat_penalty: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    seed: 0,

    grammar: `boolean ::= ("true" | "false") space
item ::= "{" space item-name-kv "," space item-gender-kv "," space item-holding-pee-kv "," space item-peeing-self-kv "}" space
item-gender ::= "\\"male\\"" | "\\"female\\"" | "\\"unknown\\""
item-gender-kv ::= "\\"gender\\"" space ":" space item-gender
item-holding-pee-kv ::= "\\"holding pee\\"" space ":" space boolean
item-name-kv ::= "\\"name\\"" space ":" space string
item-peeing-self-kv ::= "\\"peeing self\\"" space ":" space boolean
root ::= "[" space ( item ( "," space item )* )? "]" space
space ::= " "?
string ::=  "\\"" (
        [^"\\\\] |
        "\\\\" (["\\\\/bfnrt] | "u" [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F])
      )* "\\"" space`,
  });
  // console.log(
  //   `字数: ${message.length}, 时间: ${(Date.now() - t) / 1000}s, 结论: ${chatCompletion.choices.map((c) => c.message.content).join('\n')}`,
  // );
  return chatCompletion.choices[0].message.content;
}

export let lastResponse;
async function 性别AI(message: string, seed: number = 0) {
  const response = (await AI(
    message,
    `Which characters in following novel.
Respond with JSON array. Must start with "[" and end with "]". Example response:
[{"name":"小千秋","gender":"female","holding pee":true,"peeing self":false},{"name":"unknown","gender":"unknown","holding pee":false,"peeing self":false}]`,
  ))!;
  console.log(response);
  const data: Character[] = JSON.parse(response);
  lastResponse = data;

  if (data.some((p) => p.name === '小千秋')) {
    if (seed < 3) return 性别AI(message, seed + 1);
    return [];
  }

  // 然后如果认到了有 holding_pee 的，就只看 holding_pee 的，其次看 peeing_self 的。
  const holding = data.filter((p) => p['holding pee']);
  const peeing = data.filter((p) => p['peeing self']);
  const p1 = holding.length ? holding : peeing;
  if (p1.length) {
    if (p1.some((p) => p.gender == 'male') && p1.some((p) => p.gender == 'female')) return ['男憋', '女憋'];
    if (p1.every((p) => p.gender === 'male')) return ['男憋'];
    if (p1.every((p) => p.gender === 'female')) return ['女憋'];
  }

  // 登场角色只有女性也算女憋，但是只有男性不算男憋
  if (data.length) {
    if (data.every((p) => p.gender === 'female')) return ['女憋'];
  }

  return [];
}

export function truncate(message: string) {
  if (message.length > limit) {
    let data: number[] = [];
    for (let i = 0; i < message.length; i++) {
      if (['憋', '尿', '禁', '漏', '急', '夹', '腿', '厕', '颤'].includes(message.charAt(i))) data.push(i);
    }

    const d1: { x: number; y: number }[] = [...density1d(data, { extent: [0, message.length] })];
    const center = _.maxBy(d1, (d) => d.y).x;
    const start = _.clamp(center - limit / 2, 0, message.length - limit);
    return message.slice(start, start + limit);
  }
  return message;
}
