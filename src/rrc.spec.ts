import { DdeClientData, sleep } from 'ts-dde';

import { Rrc } from './rrc';

describe('rakuten realtime collector', () => {
  let rrc: Rrc;
  beforeAll(() => {
    rrc = new Rrc({
      autoLoginInput: {
        user: 'test',
        password: 'test',
      },
      symbols: ['9501'],
      items: ['銘柄名称', '現在値'],
    });
    rrc.connect();
  });

  afterAll(() => {
    rrc.disconnect();
  });

  it('get stock data', async () => {
    const receveMessages: DdeClientData[] = [];
    rrc.onMessage = (data: DdeClientData) => receveMessages.push(data);
    await sleep(2000);
    expect(receveMessages.length).toEqual(2);
    /*expect(receveMessages).toEqual([
      {
        service: 'RSS',
        topic: '9501.T',
        item: '銘柄名称',
        text: '東京電力ＨＤ',
      },
      {
        service: 'RSS',
        topic: '9501.T',
        item: '現在値',
        text: '515.00',
      },
    ]);*/
  });

  it('requet once data', async () => {
    const res = rrc.request(['市場部名称', '現在日付', '歩み１']);
    expect(res.length).toEqual(3);
    /*expect(res).toEqual([
      {
        service: 'RSS',
        topic: '9501.T',
        item: '市場部名称',
        result: '東証１部',
      },
      {
        service: 'RSS',
        topic: '9501.T',
        item: '現在日付',
        result: '19-08-09',
      },
      {
        service: 'RSS',
        topic: '9501.T',
        item: '歩み１',
        result: '514.00',
      },
    ]);*/
  });
});
