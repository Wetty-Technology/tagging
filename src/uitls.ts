// https://stackoverflow.com/a/46312614
import { createWriteStream } from 'node:fs';
import type { PreForumPost } from '../import/entities/PreForumPost';
import { strip } from './bbcode';

export function charCount(s: string, c: string) {
  if (c.length == 1) {
    let count = 0;
    c = c.charAt(0); // we save some time here
    for (let i = 0; i < s.length; ++i) {
      if (c === s.charAt(i)) {
        ++count;
      }
    }
    return count;
  } else {
    return s.split(c).length - 1;
  }
}

export function threshold(value: number, reject: number, trust: number, falsy: any = false, truthy: any = true) {
  if (value < reject) return falsy;
  if (value >= trust) return truthy;
}

export function normalize(subject: string): string {
  const match = subject.match(/《(.+)》/);
  if (match) {
    return match[1];
  }
  const result = subject.replaceAll(/\(.+?\)|（.+?）|\[.+?]|［.+?］|【.+?】/g, '').trim();
  return result.length ? result : subject;
}

export const logger = createWriteStream('log.txt');

export function log(line: any = '') {
  logger.write(line);
  logger.write('\n');
}

export function clean(posts: PreForumPost[]): string[] {
  return posts
    .filter((p) => !/\[quote]\[color=#999999]\S+ 发表于 [\d\- :]+\[\/color]\n\[color=#999999]/.test(p.message))
    .map((p) => strip([p.subject, p.message.replace(/\[i=s] 本帖最后由 \S+ 于 [\d\- :]+ 编辑 \[\/i]/, '')].join('\n')))
    .filter((m) => m.length >= 300);
}
