type Stock = {
  symbol: string;
  name: string;
  price: number;
};

type Portfolio = Stock[];

const addStock = (portfolio: Portfolio, stock: Stock) => {
  portfolio.push(stock);
};

const calculatePortfolioValue = (portfolio: Portfolio) => {
  let totalValue = 0;
  for (const stock of portfolio) {
    totalValue += stock.price;
  }
  return totalValue;
};

const displayPortfolio = (portfolio: Portfolio) => {
  console.log("Stock Portfolio:");
  for (const stock of portfolio) {
    console.log(
      `Symbol: ${stock.symbol} - Name: ${stock.name} - Price: $${stock.price}`
    );
  }
  console.log(`Total Portfolio Value: $${calculatePortfolioValue(portfolio)}`);
};

const apple = { symbol: "AAPL", name: "Apple Inc.", price: 150.25 };
const google = { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.1 };
const amazon = { symbol: "AMZN", name: "Amazon.com Inc.", price: 3500.75 };
const microsoft = { symbol: "MSFT", name: "Microsfot", price: 3500.75 };

const portfolio: Portfolio = [];

addStock(portfolio, apple);
addStock(portfolio, google);
addStock(portfolio, amazon);
addStock(portfolio, microsoft);

displayPortfolio(portfolio);
