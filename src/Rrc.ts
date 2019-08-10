import { DdeClient, DdeClientPoyloadServices } from 'ts-dde';

export interface RrcOptions {
  symbols: string[];
  items: string[];
}

export class Rrc {
  private readonly ddeClient: DdeClient;
  private readonly ddePoyload: DdeClientPoyloadServices;

  constructor(options: RrcOptions) {
    this.ddePoyload = {
      RSS: {},
    };
    for (const symbol of options.symbols) {
      this.ddePoyload.RSS[`${symbol}.T`] = options.items;
    }
    this.ddeClient = new DdeClient({
      services: this.ddePoyload,
    });
  }

  connect(): void {
    this.ddeClient.on('advise', async (service: string, topic: string, item: string, text: string) => {
      console.log({ service, topic, item, text });
    });

    // 订阅DDE数据
    this.ddeClient.startAdvise();
  }

  disconnect(): void {
    this.ddeClient.stopAdvise();
    this.ddeClient.disconnect();
    this.ddeClient.dispose();
  }
}
