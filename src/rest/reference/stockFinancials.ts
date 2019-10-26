// CF: https://polygon.io/docs/#!/Reference/get_v2_reference_financials_symbol
import { get, IPolygonQuery } from "../transport/request";

export interface IStockFinancialQuery extends IPolygonQuery {
  sort?: string;
  type?: string;
  limit?: string;
}

export interface IStockFinancial {
  ticker: string;
  period?: string;
  calendarDate?: string;
  reportPeriod?: string;
  updated?: string;
  accumulatedOtherComprehensiveIncome?: number;
  assets?: number;
  assetsAverage?: number;
  assetsCurrent?: number;
  assetTurnover?: number;
  assetsNonCurrent?: number;
  bookValuePerShare?: number;
  capitalExpenditure?: number;
  cashAndEquivalents?: number;
  cashAndEquivalentsUSD?: number;
  costOfRevenue?: number;
  consolidatedIncome?: number;
  currentRatio?: number;
  debtToEquityRatio?: number;
  debt?: number;
  debtCurrent?: number;
  debtNonCurrent?: number;
  debtUSD?: number;
  deferredRevenue?: number;
  depreciationAmortizationAndAccretion?: number;
  deposits?: number;
  dividendYield?: number;
  dividendsPerBasicCommonShare?: number;
  earningBeforeInterestTaxes?: number;
  earningsBeforeInterestTaxesDepreciationAmortization?: number;
  EBITDAMargin?: number;
  earningsBeforeInterestTaxesDepreciationAmortizationUSD?: number;
  earningBeforeInterestTaxesUSD?: number;
  earningsBeforeTax?: number;
  earningsPerBasicShare?: number;
  earningsPerDilutedShare?: number;
  earningsPerBasicShareUSD?: number;
  shareholdersEquity?: number;
  averageEquity?: number;
  shareholdersEquityUSD?: number;
  enterpriseValue?: number;
  enterpriseValueOverEBIT?: number;
  enterpriseValueOverEBITDA?: number;
  freeCashFlow?: number;
  freeCashFlowPerShare?: number;
  foreignCurrencyUSDExchangeRate?: number;
  grossProfit?: number;
  grossMargin?: number;
  goodwillAndIntangibleAssets?: number;
  interestExpense?: number;
  investedCapital?: number;
  investedCapitalAverage?: number;
  inventory?: number;
  investments?: number;
  investmentsCurrent?: number;
  investmentsNonCurrent?: number;
  totalLiabilities?: number;
  currentLiabilities?: number;
  liabilitiesNonCurrent?: number;
  marketCapitalization?: number;
  netCashFlow?: number;
  netCashFlowBusinessAcquisitionsDisposals?: number;
  issuanceEquityShares?: number;
  issuanceDebtSecurities?: number;
  paymentDividendsOtherCashDistributions?: number;
  netCashFlowFromFinancing?: number;
  netCashFlowFromInvesting?: number;
  netCashFlowInvestmentAcquisitionsDisposals?: number;
  netCashFlowFromOperations?: number;
  effectOfExchangeRateChangesOnCash?: number;
  netIncome?: number;
  netIncomeCommonStock?: number;
  netIncomeCommonStockUSD?: number;
  netLossIncomeFromDiscontinuedOperations?: number;
  netIncomeToNonControllingInterests?: number;
  profitMargin?: number;
  operatingExpenses?: number;
  operatingIncome?: number;
  tradeAndNonTradePayables?: number;
  payoutRatio?: number;
  priceToBookValue?: number;
  priceEarnings?: number;
  priceToEarningsRatio?: number;
  propertyPlantEquipmentNet?: number;
  preferredDividendsIncomeStatementImpact?: number;
  sharePriceAdjustedClose?: number;
  priceSales?: number;
  priceToSalesRatio?: number;
  tradeAndNonTradeReceivables?: number;
  accumulatedRetainedEarningsDeficit?: number;
  revenues?: number;
  revenuesUSD?: number;
  researchAndDevelopmentExpense?: number;
  returnOnAverageAssets?: number;
  returnOnAverageEquity?: number;
  returnOnInvestedCapital?: number;
  returnOnSales?: number;
  shareBasedCompensation?: number;
  sellingGeneralAndAdministrativeExpense?: number;
  shareFactor?: number;
  shares?: number;
  weightedAverageShares?: number;
  weightedAverageSharesDiluted?: number;
  salesPerShare?: number;
  tangibleAssetValue?: number;
  taxAssets?: number;
  incomeTaxExpense?: number;
  taxLiabilities?: number;
  tangibleAssetsBookValuePerShare?: number;
  workingCapital?: number;
}

export interface IStockFinancialResults {
  status?: string;
  count?: number;
  results?: IStockFinancial[];
}

export const stockFinancials = async (
  apiKey: string,
  symbol: string,
  query?: IStockFinancialQuery
): Promise<IStockFinancialResults[]> =>
  get(`/v2/reference/financials/${symbol}`, apiKey, query);
