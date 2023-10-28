"use strict";
const addPortfolioItem = (portfolio, item) => {
    return [...portfolio, item];
};
const calculatePortfolioValue = (portfolio) => {
    let totalValue = 0;
    for (const item of portfolio) {
        if ("price" in item) {
            totalValue += item.price;
        }
        else if ("faceValue" in item) {
            totalValue += item.faceValue;
        }
    }
    return totalValue;
};
const displayPortfolio = (portfolio) => {
    console.log("Portfolio Items:");
    for (const item of portfolio) {
        if ("price" in item) {
            console.log(`Symbol: ${item.symbol} - Name: ${item.name} - Price: $${item.price}`);
        }
        else if ("faceValue" in item) {
            console.log(`Symbol: ${item.symbol} - Name: ${item.name} - Face Value: $${item.faceValue}`);
        }
    }
    console.log(`Total Portfolio Value: $${calculatePortfolioValue(portfolio)}`);
};
const apple = { symbol: "AAPL", name: "Apple Inc.", price: 150.25 };
const google = {
    symbol: "GOOGL A",
    name: "Alphabet Inc. Class A",
    price: 2750.1,
};
const microsoft = { symbol: "MSFT", name: "Microsoft", price: 3500.75 };
const usTreasuryBond = {
    symbol: "USTB",
    name: "U.S. Treasury Bond",
    faceValue: 1000,
};
const corporateBond = {
    symbol: "CORP",
    name: "Corporate Bond",
    faceValue: 500,
};
let portfolio = [];
portfolio = addPortfolioItem(portfolio, apple);
portfolio = addPortfolioItem(portfolio, google);
portfolio = addPortfolioItem(portfolio, microsoft);
portfolio = addPortfolioItem(portfolio, usTreasuryBond);
portfolio = addPortfolioItem(portfolio, corporateBond);
displayPortfolio(portfolio);
