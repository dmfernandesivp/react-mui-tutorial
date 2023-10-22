type Stock = {
  symbol: string;
  name: string;
  price: number;
};

type Bond = {
  symbol: string;
  name: string;
  faceValue: number;
};

type PortfolioItem = Stock | Bond;
type Portfolio = PortfolioItem[];

const addPortfolioItem = (
  portfolio: Portfolio,
  item: PortfolioItem
): Portfolio => {
  return [...portfolio, item];
};

const calculatePortfolioValue = (portfolio: Portfolio): number => {
  let totalValue = 0;
  for (const item of portfolio) {
    if ("price" in item) {
      totalValue += item.price;
    } else if ("faceValue" in item) {
      totalValue += item.faceValue;
    }
  }
  return totalValue;
};

const displayPortfolio = (portfolio: Portfolio): void => {
  console.log("Portfolio Items:");
  for (const item of portfolio) {
    if ("price" in item) {
      console.log(
        `Symbol: ${item.symbol} - Name: ${item.name} - Price: $${item.price}`
      );
    } else if ("faceValue" in item) {
      console.log(
        `Symbol: ${item.symbol} - Name: ${item.name} - Face Value: $${item.faceValue}`
      );
    }
  }
  console.log(`Total Portfolio Value: $${calculatePortfolioValue(portfolio)}`);
};

const apple: Stock = { symbol: "AAPL", name: "Apple Inc.", price: 150.25 };
const google: Stock = { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.1 };
const microsoft: Stock = { symbol: "MSFT", name: "Microsoft", price: 3500.75 };

const usTreasuryBond: Bond = {
  symbol: "USTB",
  name: "U.S. Treasury Bond",
  faceValue: 1000,
};
const corporateBond: Bond = {
  symbol: "CORP",
  name: "Corporate Bond",
  faceValue: 500,
};

let portfolio: Portfolio = [];

portfolio = addPortfolioItem(portfolio, apple);
portfolio = addPortfolioItem(portfolio, google);
portfolio = addPortfolioItem(portfolio, microsoft);
portfolio = addPortfolioItem(portfolio, usTreasuryBond);
portfolio = addPortfolioItem(portfolio, corporateBond);

displayPortfolio(portfolio);
