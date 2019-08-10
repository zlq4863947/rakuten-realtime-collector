import { sleep } from 'ts-dde';
import { Rrc } from './rrc';

describe('rakuten realtime collector', () => {
  let rrc: Rrc;
  beforeAll(() => {
    rrc = new Rrc({
      symbols: ['9501'],
      items: ['銘柄名称', '現在値'],
    });
  });
  it('get stock data', async () => {
    rrc.connect();
    await sleep(800000);
    rrc.disconnect();
  });
});
