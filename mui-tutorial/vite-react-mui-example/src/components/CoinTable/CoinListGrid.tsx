import React, { useEffect, useState } from "react";
import PageContent from "../PageContent";
import {
  Box,
  LinearProgress,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CoinTableHeader from "./CoinTableHeader";
import CoinTableSearchField from "./CoinTableSearchField";
import useAppState from "../../context/useContext";
import coinApi from "./services/coinApi";
import jsonResponse from "./rawJson";

const tableHeaders = [
  "Rank",
  "Coin",
  "Price",
  "1h",
  "24h",
  "7d",
  "Market Cap",
  "24h volume",
];

type CoinRowData = {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  rank: number;
  image: string;
  market_cap: number;
  symbol: string;
};

function formatLargeNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  const formatted = num.toFixed(0);

  const parts = formatted.toString().split(".");
  const integerPart = parts[0];

  return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const hoverStyles: SxProps = {
  bgcolor: "white",
  transition: "background-color 0.3s",
  "&:hover": {
    bgcolor: "#f5f5f5",
  },
  cursor: "pointer",
};

const CoinListGrid: React.FC = () => {
  const { currency } = useAppState();

  const [searchText, setSearchText] = useState("");

  const [coinData, setCoinData] = useState<CoinRowData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(coinApi.list(currency));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const apiCoinData: CoinRowData[] = transformData(data);
        setCoinData(apiCoinData);
      } catch (err) {
        console.log(err);
        console.log(jsonResponse);

        const apiCoinData: CoinRowData[] = transformData(jsonResponse);
        setCoinData(apiCoinData);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currency]);

  const filteredCoinData = () => {
    for (let i = 0; i < coinData?.length; i++) {
      coinData[i].rank = i + 1;
    }
    if (searchText !== "" || searchText !== null) {
      return coinData?.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchText) ||
          coin.symbol?.toLowerCase().includes(searchText)
      );
    } else {
      return coinData;
    }
  };

  return (
    <PageContent>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CoinTableHeader />
        <CoinTableSearchField
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Paper sx={{ width: "60rem", overflow: "hidden", my: 1 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((head, i) => (
                      <TableCell
                        sx={{ fontWeight: "700" }}
                        key={head}
                        align={i === 0 ? "left" : "center"}
                      >
                        <Typography variant="subtitle1">{head}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCoinData()?.map((row: CoinRowData) => (
                    <TableRow key={row.id} sx={hoverStyles}>
                      <TableCell component="th" scope="row">
                        <Typography variant="subtitle1" sx={{ ml: 3 }}>
                          {row?.rank}
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img src={row?.image} alt={row?.name} height="50" />

                          <Typography
                            variant="subtitle1"
                            style={{ paddingLeft: 20 }}
                          >
                            {row?.name}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="subtitle1">
                          {formatLargeNumber(row?.current_price)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: Number(
                              row?.price_change_percentage_1h_in_currency < 0
                            )
                              ? "red"
                              : "green",
                          }}
                        >
                          {row?.price_change_percentage_1h_in_currency?.toFixed(
                            2
                          )}
                          %
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: Number(
                              row?.price_change_percentage_24h_in_currency < 0
                            )
                              ? "red"
                              : "green",
                          }}
                        >
                          {row?.price_change_percentage_24h_in_currency?.toFixed(
                            2
                          )}
                          %
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: Number(
                              row?.price_change_percentage_7d_in_currency < 0
                            )
                              ? "red"
                              : "green",
                          }}
                        >
                          {row?.price_change_percentage_7d_in_currency?.toFixed(
                            2
                          )}
                          %
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="subtitle1">
                          {formatLargeNumber(row?.market_cap)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          {formatLargeNumber(row?.total_volume)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Box>
    </PageContent>
  );
};

export default CoinListGrid;

function transformData(data: any): CoinRowData[] {
  return data?.map((x: any, i: number) => ({
    id: x.id,
    name: x.name,
    current_price: x.current_price,
    price_change_percentage_1h_in_currency:
      x.price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency:
      x.price_change_percentage_24h_in_currency,
    total_volume: x.total_volume,
    rank: i + 1,
    image: x.image,
    price_change_percentage_7d_in_currency:
      x.price_change_percentage_7d_in_currency,
    market_cap: x.market_cap,
    symbol: x.symbol,
  }));
}
