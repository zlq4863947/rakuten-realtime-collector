import { LogData, RssData } from '../types';

export function loadDataFile(filePath: string): Promise<RssData[]> {
  const dataList: RssData[] = [];
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(filePath),
  });

  return new Promise((resolve, reject) => {
    lineReader.on('line', (line: any) => {
      const log: LogData = JSON.parse(line);
      if (log.Event === '接收数据') {
        const rssData: RssData = {
          date: log.Date,
          topic: log.Data.topic,
          item: log.Data.item,
          text: log.Data.text,
        };
        dataList.push(rssData);
      }
    });
    lineReader.on('close', () => resolve(dataList));
  });
}
