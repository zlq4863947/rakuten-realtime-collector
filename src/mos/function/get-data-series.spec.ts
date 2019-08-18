import { join } from 'path';

import { getDataSeries } from './get-data-series';
import { loadDataFile } from './load-data-file';

describe('get-data-series', () => {
  it('should get data series', async () => {
    const path = join(__dirname, '../data/info.logdata');
    const data = await loadDataFile(path);
    const res = getDataSeries(data);
    console.log(res);
  });
});
