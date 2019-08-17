import { InputParams, MarketSpeed } from 'rakuten-auto-login';
import { DdeClient, DdeClientData, DdeClientPoyloadServices, DdeClientReqeustData } from 'ts-dde';

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
  }

  /**
   * receive message method
   * @param data
   */
  onMessage: (data: DdeClientData) => any = (data: DdeClientData) => undefined;

  prepare() {
    this.marketSpeed.login();
    this.marketSpeed.startRSS();
  }

  connect(): void {
    if (this.options.startApp) {
      this.prepare();
    }
    this.ddeClient.on('advise', (data: DdeClientData) => {
      this.onMessage(data);
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
