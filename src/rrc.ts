import { InputParams, MarketSpeed } from 'rakuten-auto-login';
import { Subject } from 'rxjs';
import { DdeClient, DdeClientData, DdeClientPoyloadServices, DdeClientReqeustData } from 'ts-dde';

import { mergeData } from './megre-data';
import { RssData, RssTopicData } from './types';

export interface RrcOptions {
  autoLoginInput: InputParams;
  startApp: boolean;
  symbols: string[];
  items: string[];
}

export class Rrc {
  private readonly ddeClient: DdeClient;
  private readonly ddePoyloadServices: DdeClientPoyloadServices;
  private readonly marketSpeed: MarketSpeed;
  private readonly rssData$ = new Subject<RssData>();

  constructor(private readonly options: RrcOptions) {
    this.ddePoyloadServices = {
      RSS: {},
    };
    for (const symbol of options.symbols) {
      this.ddePoyloadServices.RSS[`${symbol}.T`] = options.items;
    }
    this.ddeClient = new DdeClient({
      services: this.ddePoyloadServices,
    });
    this.marketSpeed = new MarketSpeed(options.autoLoginInput);
    mergeData(this.rssData$).subscribe(this.onMessage);
  }

  /**
   * receive message method
   * @param data
   */
  onMessage: (data: RssTopicData) => any = (data: RssTopicData) => undefined;

  prepare() {
    this.marketSpeed.login();
    this.marketSpeed.startRSS();
  }

  connect(): void {
    if (this.options.startApp) {
      this.prepare();
    }
    this.ddeClient.on('advise', (data: DdeClientData) => {
      this.rssData$.next({
        topic: data.topic,
        item: data.item,
        text: data.text,
      });
    });

    this.ddeClient.connect();
    // Subscribe to DDE data
    this.ddeClient.startAdvise();
  }

  disconnect(): void {
    this.ddeClient.stopAdvise();
    this.ddeClient.disconnect();
    this.ddeClient.dispose();
  }

  request(items: string[]): DdeClientReqeustData[] {
    return this.ddeClient.request(items);
  }
}
