import { PreForumThread } from '../import/entities/PreForumThread';
import { OpenAI } from 'openai';
import { log } from './uitls';
// @ts-ignore
import grammar from './series.gbnf';

const openai = new OpenAI();

export async function series(threads: PreForumThread[]): Promise<Record<string, PreForumThread[]>> {
  const system = `请将以下作品列表按照系列进行分类，并以加粗的标题显示每个系列的名称。每个系列下列出该系列的所有相关作品。
有一些系列作品中途改过标题，通过连续的章节序号还是可以识别出是同一个系列的作品。
如果某个作品不属于任何系列，请将其归类到“独立作品”类别中。
输出格式应如下所示：
**系列名称**
作品1
作品2
...

**独立作品**
作品A
作品B
...
`;

  const user = threads.map((t) => t.subject).join('\n');

  log(system);
  log(user);

  const g = `${grammar}thread ::= "${threads.map((t) => t.subject.replaceAll('\\', '\\\\').replaceAll('"', '\\"')).join('" | "')}"`;
  const stream = await openai.chat.completions.create(<OpenAI.Chat.ChatCompletionCreateParamsStreaming>{
    model: '',
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
    temperature: 0,
    seed: 0,
    max_completion_tokens: 1000,
    grammar: g,
    stream: true,
  });

  let data = '';
  for await (const chunk of stream) {
    // process.stdout.write(chunk.choices[0]?.delta?.content || '');
    data += chunk.choices[0]?.delta?.content;

    if (data.includes('**独立作品') || data.includes('**獨立作品')) stream.controller.abort();
  }

  // const data = chatCompletion.choices[0].message.content!;
  log(data);
  log();

  return Object.fromEntries(
    data
      .matchAll(/\*\*(.+)系列\*\*\n((?:.+\n)+)\n/g)
      .map((m) => [m[1], threads.filter((t) => m[2].includes(t.subject))] as const)
      .filter(([, t]) => t.length >= 2)
      .filter(
        ([s]) =>
          ![
            '憋尿',
            '尿裤',
            '尿裤子',
            '尿',
            '失禁',
            '真实',
            '真实经历',
            'BL',
            'bl',
            '古风bl',
            '男憋',
            '小',
            '同人',
            '隨筆',
            '随笔',
            '男女都有'
          ].includes(s),
      )
      .map(
        ([s, t]) => [t.filter((t) => t.subject.includes('系列')).length >= t.length / 2 ? `${s}系列` : s, t] as [string, PreForumThread[]],
      ),
  );
}
