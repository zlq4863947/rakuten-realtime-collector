export interface Ticker {
  /** 最良売気配値 */
  sell: number;
  /** 最良買気配値 */
  buy: number;
  /** 最良売気配数量 */
  sellQuantity: number;
  /** 最良買気配数量 */
  buyQuantity: number;
  /** 売成行数量 */
  sellVolume: number;
  /** 買成行数量 */
  buyVolume: number;
  /** 高値 */
  high: number;
  /** 安値 */
  low: number;
  /** 始値 */
  open: number;
  /** 現在値 */
  last: number;
  /** 売買代金 */
  turnover: number;
  /** 出来高 */
  volume: number;
  /** 出来高加重平均 */
  vwap: number;
  /** 現在値詳細時刻 */
  time: number;
  /** 前日比 */
  change: number;
  /** 前日比率 */
  changePercentage: number;
}
