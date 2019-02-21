import axios from 'axios';

const doc = (path: string) => `https://raw.githubusercontent.com/uiwjs/uiw/master/${path}/README.md`;

export function getReadme(path: string) {
  return new Promise((resolve, reject) => {
    axios.get(doc(path)).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
}