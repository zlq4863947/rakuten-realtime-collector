import { join } from 'path';

import { mergeData } from './megre-data';
import { loadDataFile, publishSingleRssData } from './mos/function';
import { sleep } from './utils';

describe('megre data', () => {
  it('megre data test', async () => {
    // .2019-08-15.2
    const path = join(__dirname, '../logs/info.logdata');
    const data = await loadDataFile(path);
    console.log('publishData$');
    mergeData(publishSingleRssData(data)).subscribe(console.log);

    await sleep(1000 * 60 * 5);
  });
});
