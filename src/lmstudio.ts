import * as fs from 'fs';

const log = fs.readFileSync('lmstudio-server-log.txt', { encoding: 'utf-8' });
const data: Record<string, object> = {};
let key: string;

for (const line of log.split(/^\[\d+-\d+-\d+ \d+:\d+:\d+\.\d+](?: \[[^\[\]]+])+ /m)) {
  if (line.startsWith('Received POST request to /v1/chat/completions with body: ')) {
    key = JSON.parse(line.slice('Received POST request to /v1/chat/completions with body: '.length)).messages[1].content;
  } else if (line.startsWith('Generated prediction: ')) {
    data[key] = JSON.parse(line.slice('Generated prediction: '.length)).choices[0].message.content;
  }
}

fs.writeFileSync('log.json', JSON.stringify(data));
