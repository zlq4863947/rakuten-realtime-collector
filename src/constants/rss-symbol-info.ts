import { RssStock } from './rss-stock';

export const RssSymbolInfo = [
  /** 銘柄コード */
  RssStock.StockCode,
  /** 銘柄名称 */
  RssStock.StockName,
  /** 市場コード */
  RssStock.MarketCode,
  /** 市場名称 */
  RssStock.MarketName,
  /** 市場部名称 */
  RssStock.MarketDepartmentName,
  /** 市場部略称 */
  RssStock.MarketDepartmentShortName,
  /** 信用貸借区分 */
  RssStock.MarginLendingCategory,
  /** 逆日歩 */
  RssStock.NegativeInterestPerDiem,
  /** 逆日歩更新日付 */
  RssStock.NegativeInterestPerDiemUpdateDate,
  /** 信用売残 */
  RssStock.MarginAskRemaining,
  /** 信用売残前週比 */
  RssStock.MarginAskRemainingPrevWeekChange,
  /** 信用買残 */
  RssStock.MarginBidRemaining,
  /** 信用買残前週比 */
  RssStock.MarginBidRemainingPrevWeekChange,
  /** 信用倍率 */
  RssStock.MarginRatio,
  /** 証金コード */
  RssStock.FinanceCode,
  /** 証金残更新日付 */
  RssStock.FinanceRemainingUpdateDate,
  /** 新規貸株 */
  RssStock.NewMarginTrading,
  /** 新規融資 */
  RssStock.NewShortSelling,
  /** 返済貸株 */
  RssStock.RepayMarginTrading,
  /** 返済融資 */
  RssStock.RepayShortSelling,
  /** 残高貸株 */
  RssStock.BalanceMarginTrading,
  /** 残高融資 */
  RssStock.BalanceShortSelling,
  /** 残高差引 */
  RssStock.BalanceDeduction,
  /** 前日比貸株 */
  RssStock.PrevChangeMarginTrading,
  /** 前日比融資 */
  RssStock.PrevChangeShortSelling,
  /** 前日比差引 */
  RssStock.PrevChangeDeduction,
  /** 回転日数 */
  RssStock.RotationDays,
  /** 貸借倍率 */
  RssStock.LendingRatio,
  /** 単位株数 */
  RssStock.Unit,
  /** 配当 */
  RssStock.Dividend,
  /** 配当落日 */
  RssStock.DividendDate,
  /** ＰＥＲ */
  RssStock.PER,
  /** ＰＢＲ */
  RssStock.PBR,
  /** 当日基準値 */
  RssStock.StandardValue,
  /** 翌日基準値 */
  RssStock.NextDayStandardValue,
  /** 年初来高値 */
  RssStock.YearHigh,
  /** 年初来安値 */
  RssStock.YearLow,
  /** 年初来高値日付 */
  RssStock.YearHighDate,
  /** 年初来安値日付 */
  RssStock.YearLowDate,
  /** 上場来高値 */
  RssStock.AllTimeHigh,
  /** 上場来安値 */
  RssStock.AllTimeLow,
  /** 上場来高値日付 */
  RssStock.AllTimeHighDate,
  /** 上場来安値日付 */
  RssStock.AllTimeLowDate,
];
