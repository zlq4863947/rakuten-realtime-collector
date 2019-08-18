import { Observable, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { skipNullOrUndefined } from '../../utils';
import { RssData } from '../types';
import { getDataSeries } from './get-data-series';

export function publishRssData(dataSeries: RssData[]): Observable<RssData[]> {
  const dataList = getDataSeries(dataSeries);

  return interval(1000).pipe(
    map(() => dataList.shift()),
    skipNullOrUndefined(),
    filter((data) => data.length !== 0),
  );
}

export function publishSingleRssData(rssDataList: RssData[]): Observable<RssData> {
  return interval(50).pipe(
    map(() => rssDataList.shift()),
    skipNullOrUndefined(),
  );
}
