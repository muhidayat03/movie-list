// module.exports = 'test-file-stub';

import { basename } from 'path';

export function process(src, filename) {
  return 'module.exports = ' + JSON.stringify(basename(filename)) + ';';
}