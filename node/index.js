import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

import { readFile } from 'node:fs';

readFile('/node/message', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 