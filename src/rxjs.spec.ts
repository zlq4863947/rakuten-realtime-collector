import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

describe('rakuten realtime collector', () => {
  it('rxjs test', async () => {
    const source = of(
      {
        Date: '2019-08-15T09:45:19+09:00',
        service: 'RSS',
        topic: '7974.T',
        item: '最良売気配数量１',
        text: '1200',
      },
      {
        Date: '2019-08-15T09:45:19+09:00',
        service: 'RSS',
        topic: '7974.T',
        item: '最良売気配数量２',
        text: '1700',
      },
      {
        Date: '2019-08-15T09:45:20+09:00',
        service: 'RSS',
        topic: '4528.T',
        item: '最良売気配数量５',
        text: '2600',
      },
    );

    const example = source.pipe(
      scan(
        (acc, curr) => {
          if (!acc[curr.Date]) {
            acc[curr.Date] = {};
          }
          acc[curr.Date][curr.item] = curr.text;
          return acc;
        },
        {} as { [attr: string]: any },
      ),
    );
    example.subscribe((o) => console.log('sub:', o));
  });
});
