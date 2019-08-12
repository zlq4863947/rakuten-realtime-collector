import { DdeClient, DdeClientData, DdeClientPoyloadServices, DdeClientReqeustData } from 'ts-dde';

export interface RrcOptions {
  symbols: string[];
  items: string[];
}

export class Rrc {
  private readonly ddeClient: DdeClient;
  private readonly ddePoyloadServices: DdeClientPoyloadServices;

  constructor(options: RrcOptions) {
    this.ddePoyloadServices = {
      RSS: {},
    };
    for (const symbol of options.symbols) {
      this.ddePoyloadServices.RSS[`${symbol}.T`] = options.items;
    }
    this.ddeClient = new DdeClient({
      services: this.ddePoyloadServices,
    });
  }

  /**
   * 信息接收方法
   * @param data
   */
  onMessage: (data: DdeClientData) => any = (data: DdeClientData) => undefined;

  connect(): void {
    this.ddeClient.on('advise', (data: DdeClientData) => {
      this.onMessage(data);
    });

    this.ddeClient.connect();
    // 订阅DDE数据
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
