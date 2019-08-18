import { Observable } from 'rxjs';

import { loadDataFile, publishRssData } from './function';
import { RssData } from './types';

export async function makeMosData(filepath: string): Promise<undefined | Observable<RssData[]>> {
  const data = await loadDataFile(filepath);
  if (data.length === 0) {
    return;
  }

  return publishRssData(data);
}
