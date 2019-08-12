/**
 * 楽天証券RSS对象
 */
export enum RssStock {
  /**
   * 例: 9501
   */
  StockCode = '銘柄コード',
  /**
   * 例: T (東証・マザーズともにT)
   */
  MarketCode = '市場コード',
  /**
   * 例: 東京電力
   */
  StockName = '銘柄名称',
  /**
   * 例: 東証
   */
  MarketName = '市場名称',
  /**
   * 例: 東証１部 (東証1部　東証マザーズ)
   */
  MarketDepartmentName = '市場部名称',
  /**
   * 例: 東１ (東1　東ﾏ)
   */
  MarketDepartmentShortName = '市場部略称',
  /**
   * 例: 2009/12/14 (8：00～　表示開始　表示形式-ﾕｰｻﾞｰ定義-YY-MM-DD)
   */
  Date = '現在日付',
  /**
   * 例: 9:58 (8：00～　表示開始　表示形式-時刻-13:30)
   */
  UpdateTime = '更新時刻',
  /**
   * 例: 2206 (～9：00　ブランク)
   */
  Close = '現在値',
  /**
   * 例: 9:07 (寄前表示　通常「--」　表示形式変更後「##########)
   */
  CloseTime = '現在値時刻',
  /**
   * 例: 9:07:31 (寄前表示　通常「--」　表示形式変更後「##########)
   */
  CloseDetailTime = '現在値詳細時刻',
  /**
   * 例: C
   */
  CloseFlag = '現在値フラグ',
  /**
   * 例: -19
   */
  PrevChange = '前日比',
  /**
   * 例: -0.85
   */
  PrevChangeRate = '前日比率',
  /**
   * 例: 2225
   */
  PrevClose = '前日終値',
  /**
   * 例: 2009/12/5 (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  PrevDate = '前日日付',
  /**
   * 例: C
   */
  PrevCloseFlag = '前日終値フラグ',
  /**
   * 例: 2216
   */
  Transaction1 = '歩み１',
  Transaction2 = '歩み２',
  Transaction3 = '歩み３',
  Transaction4 = '歩み４',
  /**
   * 例: 9:07 (寄前表示　通常「--」　表示形式変更後「##########)
   */
  Transaction1Time = '歩み１時刻',
  Transaction2Time = '歩み２時刻',
  Transaction3Time = '歩み３時刻',
  Transaction4Time = '歩み４時刻',
  /**
   * 例: 9:07:31 (寄前表示　通常「--」　表示形式変更後「##########)
   */
  Transaction1DetailTime = '歩み１詳細時刻',
  Transaction2DetailTime = '歩み２詳細時刻',
  Transaction3DetailTime = '歩み３詳細時刻',
  Transaction4DetailTime = '歩み４詳細時刻',
  /**
   * 例: 1068900
   */
  Volume = '出来高',
  /**
   * 例: 2366827
   */
  Turnover = '売買代金',
  /**
   * 例: 2214.2643
   */
  VWAP = '出来高加重平均',
  /**
   * 例: 2214
   */
  Open = '始値',
  /**
   * 例: 2224 (随時更新)
   */
  High = '高値',
  /**
   * 例: 2206 (随時更新)
   */
  Low = '安値',
  /**
   * 例: 9:07
   */
  OpenTime = '始値時刻',
  HighTime = '高値時刻',
  LowTime = '安値時刻',
  /**
   * 例: 9:07:31
   */
  OpenDetailTime = '始値詳細時刻',
  HighDetailTime = '高値詳細時刻',
  LowDetailTime = '安値詳細時刻',
  /**
   * 2214
   */
  MorningOpen = '前場始値',
  MorningHigh = '前場高値',
  MorningLow = '前場安値',
  MorningClose = '前場終値',
  /**
   * 例: 1068900
   */
  MorningVolume = '出来高',
  /**
   * 2214
   */
  AfternoonOpen = '後場始値',
  AfternoonHigh = '後場高値',
  AfternoonLow = '後場安値',
  /**
   * 例: 9:07
   */
  MorningOpenTime = '前場始値時刻',
  MorningHighTime = '前場高値時刻',
  MorningLowTime = '前場安値時刻',
  MorningCloseTime = '前場終値時刻',
  MorningVolumeTime = '前場出来高時刻',
  AfternoonOpenTime = '後場始値時刻',
  AfternoonHighTime = '後場高値時刻',
  AfternoonLowTime = '後場安値時刻',
  /**
   * 2216 (=最良売気配1)
   */
  BestBidPrice = '最良売気配値',
  /**
   * 2206 (=最良買気配1)
   */
  BestAskPrice = '最良買気配値',
  /**
   * 1300
   */
  BestBidQuantity = '最良売気配数量',
  BestAskQuantity = '最良買気配数量',
  /**
   * 9:07:00
   */
  BestBidTime = '最良売気配時刻',
  BestAskTime = '最良買気配時刻',
  /**
   * 9:58:21 (秒単位まで表示)
   */
  BestBidDetailTime = '最良売気配詳細時刻',
  BestAskDetailTime = '最良買気配詳細時刻',
  /**
   * S
   */
  SpecialBidFlag = '特別売気配フラグ',
  SpecialAskFlag = '特別売気配フラグ',
  /**
   * 貸借
   */
  MarginLendingCategory = '信用貸借区分',
  /**
   * 0
   */
  NegativeInterestPerDiem = '逆日歩',
  /**
   * - - (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  NegativeInterestPerDiemUpdateDate = '逆日歩更新日付',
  /**
   * 0
   */
  MarginBidRemaining = '信用売残',
  MarginBidRemainingPrevWeekChange = '信用売残前週比',
  MarginAskRemaining = '信用買残',
  MarginAskRemainingPrevWeekChange = '信用買残前週比',
  MarginRatio = '信用倍率',
  /**
   * 日証金
   */
  StockFinanceCode = '証金コード',
  /**
   * 40158 (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  StockFinanceRemainingUpdateDate = '証金残更新日付',
  /**
   * 121600
   */
  NewMarginTrading = '新規貸株',
  NewShortSelling = '新規融資',
  RepayMarginTrading = '返済貸株',
  RepayShortSelling = '返済融資',
  BalanceMarginTrading = '残高貸株',
  BalanceShortSelling = '残高融資',
  /**
   * -56600
   */
  BalanceDeduction = '残高差引',
  /**
   * 70400
   */
  PrevChangeMarginTrading = '前日比貸株',
  /**
   * -72700
   */
  PrevChangeShortSelling = '前日比融資',
  /**
   * -143100
   */
  PrevChangeDeduction = '前日比差引',
  /**
   * 4.9
   */
  RotationDays = '回転日数',
  /**
   * 0.89
   */
  LendingRatio = '貸借倍率',

  BestBidPrice1 = '最良売気配値１',
  BestBidPrice2 = '最良売気配値２',
  BestBidPrice3 = '最良売気配値３',
  BestBidPrice4 = '最良売気配値４',
  BestBidPrice5 = '最良売気配値５',
  BestBidPrice6 = '最良売気配値６',
  BestBidPrice7 = '最良売気配値７',
  BestBidPrice8 = '最良売気配値８',
  BestBidPrice9 = '最良売気配値９',
  BestBidPrice10 = '最良売気配値１０',
  BestAskPrice1 = '最良買気配値１',
  BestAskPrice2 = '最良買気配値２',
  BestAskPrice3 = '最良買気配値３',
  BestAskPrice4 = '最良買気配値４',
  BestAskPrice5 = '最良買気配値５',
  BestAskPrice6 = '最良買気配値６',
  BestAskPrice7 = '最良買気配値７',
  BestAskPrice8 = '最良買気配値８',
  BestAskPrice9 = '最良買気配値９',
  BestAskPrice10 = '最良買気配値１０',

  BestBidQuantity1 = '最良売気配数量１',
  BestBidQuantity2 = '最良売気配数量２',
  BestBidQuantity3 = '最良売気配数量３',
  BestBidQuantity4 = '最良売気配数量４',
  BestBidQuantity5 = '最良売気配数量５',
  BestBidQuantity6 = '最良売気配数量６',
  BestBidQuantity7 = '最良売気配数量７',
  BestBidQuantity8 = '最良売気配数量８',
  BestBidQuantity9 = '最良売気配数量９',
  BestBidQuantity10 = '最良売気配数量１０',
  BestAskQuantity1 = '最良買気配数量１',
  BestAskQuantity2 = '最良買気配数量２',
  BestAskQuantity3 = '最良買気配数量３',
  BestAskQuantity4 = '最良買気配数量４',
  BestAskQuantity5 = '最良買気配数量５',
  BestAskQuantity6 = '最良買気配数量６',
  BestAskQuantity7 = '最良買気配数量７',
  BestAskQuantity8 = '最良買気配数量８',
  BestAskQuantity9 = '最良買気配数量９',
  BestAskQuantity10 = '最良買気配数量１０',

  SellVolume = '売成行数量',
  BuyVolume = '売成行数量',
  OverVolume = 'OVER気配数量',
  UnderVolume = 'UNDER気配数量',
  Unit = '単位株数',
  Dividend = '配当',
  /**
   * 40263 (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  DividendDate = '配当落日',
  PFR = 'ＰＥＲ',
  PBR = 'ＰＢＲ',
  StarndardValue = '当日基準値',
  NextDayStarndardValue = '翌日基準値',
  /**
   * 2710 (～前日分まで)
   */
  YearHigh = '年初来高値',
  /**
   * 2197 (～前日分まで)
   */
  YearLow = '年初来安値',
  /**
   * 2009/12/2 (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  YearHighDate = '年初来高値日付',
  YearLowDate = '年初来安値日付',
  /**
   * 2710 (～前日分まで)
   */
  AllTimeHigh = '上場来高値',
  AllTimeLow = '上場来安値',
  /**
   * 2009/12/2 (表示形式-ﾕｰｻﾞｰ定義-yy-mm-dd)
   */
  AllTimeHighDate = '上場来高値日付',
  AllTimeLowDate = '上場来安値日付',
}

/**
 * 基本订阅对象
 */
export const BasePlan = [
  RssStock.Close,
  RssStock.Open,
  RssStock.High,
  RssStock.Low,
  RssStock.Volume,
  RssStock.OverVolume,
  RssStock.UnderVolume,
  RssStock.BestBidPrice,
  RssStock.BestBidQuantity,
  RssStock.BestAskPrice,
  RssStock.BestAskQuantity,
];
