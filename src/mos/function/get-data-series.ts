import { RssData } from '../types';

/**
 * 获取rss数据的时间序列数字
 * @param dataList
 */
export function getDataSeries(dataList: RssData[]): RssData[][] {
  const series: RssData[][] = [];
  let subSeries: RssData[] = [];
  dataList.reduce(
    (prev, curr, index) => {
      if (prev.date === curr.date || index === 0) {
        subSeries.push(curr);
        // last index
        if (dataList.length === index + 1) {
          series.push(subSeries);
        }
      } else {
        series.push(subSeries);
        subSeries = [];
        // last index
        if (dataList.length === index + 1) {
          subSeries.push(curr);
          series.push(subSeries);
        }
      }

      return curr;
    },
    { date: undefined } as any,
  );

  return series;
}
