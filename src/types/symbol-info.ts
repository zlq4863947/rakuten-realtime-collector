export interface SymbolInfo {
  /** 銘柄コード */
  code: string;
  /** 銘柄名称 */
  name: string;
  /** 市場コード */
  marketCode: string;
  /** 市場名称 */
  marketName: string;
  /** 市場部名称 */
  marketDepartmentName: string;
  /** 市場部略称 */
  marketDepartmentShortName: string;
  /** 信用貸借区分 */
  marginLendingCategory: string;
  /** 逆日歩 */
  negativeInterestPerDiem: number;
  /** 逆日歩更新日付 */
  negativeInterestPerDiemUpdateDate: string;
  /** 信用売残 */
  marginAskRemaining: number;
  /** 信用売残前週比 */
  marginAskRemainingPrevWeekChange: number;
  /** 信用買残 */
  marginBidRemaining: number;
  /** 信用買残前週比 */
  marginBidRemainingPrevWeekChange: number;
  /** 信用倍率 */
  marginRatio: number;
  /** 証金コード */
  financeCode: string;
  /** 証金残更新日付 */
  financeRemainingUpdateDate: string;
  /** 新規貸株 */
  newMarginTrading: number;
  /** 新規融資 */
  newShortSelling: number;
  /** 返済貸株 */
  repayMarginTrading: number;
  /** 返済融資 */
  repayShortSelling: number;
  /** 残高貸株 */
  balanceMarginTrading: number;
  /** 残高融資 */
  balanceShortSelling: number;
  /** 残高差引 */
  balanceDeduction: number;
  /** 前日比貸株 */
  prevChangeMarginTrading: number;
  /** 前日比融資 */
  prevChangeShortSelling: number;
  /** 前日比差引 */
  prevChangeDeduction: number;
  /** 回転日数 */
  rotationDays: number;
  /** 貸借倍率 */
  lendingRatio: number;
  /** 単位株数 */
  unit: number;
  /** 信用買残前週比 */
  dividend: number;
  /** 配当落日 */
  dividendDate: string;
  /** ＰＥＲ */
  per: number;
  /** ＰＢＲ */
  pbr: number;
  /** 当日基準値 */
  standardValue: number;
  /** 翌日基準値 */
  nextDayStandardValue: number;
  /** 年初来高値 */
  yearHigh: number;
  /** 年初来安値 */
  yearLow: number;
  /** 年初来高値日付 */
  yearHighDate: string;
  /** 年初来安値日付 */
  yearLowDate: string;
  /** 上場来高値 */
  allTimeHigh: number;
  /** 上場来安値 */
  allTimeLow: number;
  /** 上場来高値日付 */
  allTimeHighDate: string;
  /** 上場来安値日付 */
  allTimeLowDate: string;
}
