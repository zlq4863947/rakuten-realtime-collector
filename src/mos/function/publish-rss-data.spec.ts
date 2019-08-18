import { join } from 'path';

import { sleep } from '../../utils';
import { loadDataFile } from './load-data-file';
import { publishRssData, publishSingleRssData } from './publish-rss-data';

describe('publish-rss-data', () => {
  it('should publish rss data', async () => {
    const path = join(__dirname, '../data/info.logdata');
    const data = await loadDataFile(path);
    console.log('publishData$');
    publishRssData(data).subscribe((rssDataList) => {
      console.log(rssDataList);
    });
    await sleep(1000 * 3);
  });

  it('should publish single rss data', async () => {
    const path = join(__dirname, '../data/info.logdata');
    const data = await loadDataFile(path);
    console.log('publishData$');
    publishSingleRssData(data).subscribe((rssDataList) => {
      console.log(rssDataList);
    });
    await sleep(1000 * 3);
  });
});
