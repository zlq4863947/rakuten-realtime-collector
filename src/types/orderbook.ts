export interface Orderbook {
  /**
   * price and amount of ask (asc order)
   * eg: [[price, amount], ...]
   */
  asks: [number, number][];
  /**
   * price and amount of bid (desc order)
   * eg: [[price, amount], ...]
   */
  bids: [number, number][];
  /**
   * exceeded amount of ask
   */
  over: number;
  /**
   * exceeded amount of bid
   */
  under: number;
  specialBidFlag: string;
  specialAskFlag: string;
}
