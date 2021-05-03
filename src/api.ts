import axios from 'axios';

export function getReadme(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    axios.get(path).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
}