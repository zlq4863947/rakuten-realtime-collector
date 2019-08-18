import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

import { RssData, RssTopicData } from './types';

function getTopicTime(topic: string, time: number): string {
  return `${topic}_${time}`;
}

export function mergeData(rssData: Observable<RssData>): Observable<RssTopicData> {
  const rssTopicData$ = new Subject<RssTopicData>();
  rssData
    .pipe(
      scan(
        (data, curr) => {
          const time = Math.floor(Date.now() / 1000);
          const topicTime = getTopicTime(curr.topic, time);
          if (!data[topicTime]) {
            const keys = Object.keys(data);
            if (keys.length > 0) {
              rssTopicData$.next(data[keys[0]]);
              delete data[keys[0]];
            }
            data[topicTime] = {
              [curr.topic]: {},
            };
          }
          data[topicTime][curr.topic][curr.item] = curr.text;
          return data;
        },
        {} as { [topicTime: string]: RssTopicData },
      ),
    )
    .subscribe();

  return rssTopicData$;
}
