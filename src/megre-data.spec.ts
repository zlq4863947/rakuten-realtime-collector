import { join } from 'path';

import { mergeData } from './megre-data';
import { loadDataFile, publishSingleRssData } from './mos/function';
import { sleep } from './utils';

describe('megre data', () => {
  it('megre data test', async () => {
    const path = join(__dirname, '../logs/info.log.2019-08-15.2');
    const data = await loadDataFile(path);
    console.log('publishData$');
    mergeData(publishSingleRssData(data)).subscribe(console.log);

    await sleep(1000 * 60 * 5);
  });
});
