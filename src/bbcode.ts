import { createPreset } from '@bbob/preset';
import type { TagNodeObject } from '@bbob/types';
import { html } from '@bbob/html';

const removeTags = ['attachimg', 'attach', 'img', 'flash', 'hr', 'index', 'table', 'quote'];
const keepTags = ['b', 'i', 'u', 's', 'code', 'color', 'backcolor', 'hide', 'free', 'p', 'align', 'list', 'float', 'url', 'font', 'size'];

const preset = createPreset(Object.fromEntries(removeTags.map((tag) => [tag, (_) => <TagNodeObject>(<unknown>null)])));

export function strip(text: string) {
  return html(text, preset(), {
    onlyAllowTags: removeTags.concat(keepTags),
    contextFreeTags: ['code'],
    stripTags: true,
  })
    .trim()
    .replaceAll(/\s*\n\s*/g, '\n');
}
