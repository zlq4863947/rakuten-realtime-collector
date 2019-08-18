import { Observable } from 'rxjs';
import { bufferTime, map, scan } from 'rxjs/operators';

import { RssData, RssTopicData } from './types';
import { skipNullOrUndefined } from './utils';

export function mergeData(rssData: Observable<RssData>): Observable<RssTopicData> {
  return rssData.pipe(
    scan(
      (data, curr) => {
        if (!data[curr.topic]) {
          data[curr.topic] = {};
        }
        if (curr.text && curr.text !== ':') {
          data[curr.topic][curr.item] = curr.text;
        }
        return data;
      },
      {} as RssTopicData,
    ),
    bufferTime(1000),
    map((topicDataList) => {
      if (topicDataList.length === 0) {
        return;
      }
      const lastTopicData = topicDataList[topicDataList.length - 1];
      const publishData = { ...lastTopicData };
      const topics = Object.keys(lastTopicData);
      for (const topic of topics) {
        delete lastTopicData[topic];
      }

      return publishData;
    }),
    skipNullOrUndefined(),
  );
}
