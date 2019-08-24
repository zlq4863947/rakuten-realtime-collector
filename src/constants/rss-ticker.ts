import { RssStock } from './rss-stock';

export const RssTicker = [
  /** 最良売気配値 */
  RssStock.BestAskPrice,
  /** 最良買気配値 */
  RssStock.BestBidPrice,
  /** 最良売気配数量 */
  RssStock.BestAskQuantity,
  /** 最良買気配数量 */
  RssStock.BestBidQuantity,
  /** 売成行数量 */
  RssStock.SellVolume,
  /** 買成行数量 */
  RssStock.BuyVolume,
  /** 高値 */
  RssStock.High,
  /** 安値 */
  RssStock.Low,
  /** 始値 */
  RssStock.Open,
  /** 現在値 */
  RssStock.Close,
  /** 売買代金 */
  RssStock.Turnover,
  /** 出来高 */
  RssStock.Volume,
  /** 出来高加重平均 */
  RssStock.VWAP,
  /** 現在値詳細時刻 */
  RssStock.CloseDetailTime,
  /** 前日比 */
  RssStock.PrevChange,
  /** 前日比率 */
  RssStock.PrevChangeRate,
];
