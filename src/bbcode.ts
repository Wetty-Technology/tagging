import { createPreset, DefaultTags } from '@bbob/preset';
import { TagNode } from '@bbob/parser';
import toHTML, { HTMLOptions } from '@bbob/html';

const removeTags = ['attachimg', 'attach', 'img', 'flash', 'hr', 'index', 'table'];
const keepTags = [
  'b',
  'i',
  'u',
  's',
  'quote',
  'code',
  'color',
  'backcolor',
  'hide',
  'free',
  'p',
  'align',
  'list',
  'float',
  'url',
  'font',
  'size',
];
const tags: DefaultTags = Object.fromEntries(removeTags.map((tag) => [tag, (_) => <TagNode>(<unknown>null)]));
const preset = createPreset(tags);

export function strip(text: string) {
  // @ts-ignore
  return toHTML(text, preset(), <HTMLOptions>{
    onlyAllowTags: removeTags.concat(keepTags),
    contextFreeTags: ['code'],
    stripTags: true,
  })
    .trim()
    .replaceAll(/\s*\n\s*/g, '\n');
}
