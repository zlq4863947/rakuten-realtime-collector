import { join } from 'path';

import { scan } from 'rxjs/operators';

import { loadDataFile, publishSingleRssData } from './mos/function';
import { sleep } from './utils';

describe('rakuten realtime collector', () => {
  it('rxjs test', async () => {
    const path = join(__dirname, '../logs/info.log.2019-08-15.2');
    const data = await loadDataFile(path);
    console.log('publishData$');
    publishSingleRssData(data)
      .pipe(
        scan(
          (acc, curr) => {
            const time = Math.floor(Date.now() / 1000);
            if (!acc[time]) {
              const [keys, values] = Object.entries(acc);
              if (values.length > 0) {
                // const data = values[0];
                delete acc[keys[0]];
              }
              acc[time] = {};
            }
            acc[time][curr.item] = curr.text;
            return acc;
          },
          {} as { [attr: string]: any },
        ),
      )
      .subscribe((o) => console.log('sub:', o));
    await sleep(1000 * 60 * 5);
  });
});
