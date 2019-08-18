import { join } from 'path';

import { sleep } from '../utils';
import { makeMosData } from './make-mos-data';

describe('make-mos-data', () => {
  it('should make mos data', async () => {
    const path = join(__dirname, './data/info.logdata');
    const res = await makeMosData(path);
    expect(res).toBeTruthy();
    if (res) {
      res.subscribe(console.log);
    }
    await sleep(1000 * 3);
  });
});
