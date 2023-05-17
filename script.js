// API key for Alpha Vantage
const apiKey = "R7ZJHMGHCNL0STMX";

// Function to fetch stock data from Alpha Vantage API
async function fetchStockData(symbol) {
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${R7ZJHMGHCNL0STMX}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data['Time Series (Daily)'];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
}

// Function to transform stock data for chart
function transformStockData(stockData) {
  const dates = [];
  const prices = [];

  for (const date in stockData) {
    const price = parseFloat(stockData[date]['4. close']);
    const formattedDate = new Date(date).toLocaleDateString('en-US');
    dates.unshift(formattedDate);
    prices.unshift(price);
  }

  return { dates, prices };
}

// Function to create stock chart
function createStockChart(symbol, dates, prices) {
  const ctx = document.getElementById('stockChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: `Stock Price (${symbol})`,
        data: prices,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Price'
          }
        }
      }
    }
  });
}

// Entry point
async function main() {
  const stockSymbols = [BCRX', 'SDGR', 'BHP', 'SMR', 'UEC', 'DNN', 'NET', 'AKAM', 'SHOP', 'CYBR', 'MEG', 'HYLN', 'LCID', 'PSNY', 'RIVN', 'PLUG', 'BLDP', 'TTD', 'TCEHY', 'FSR', 'APPS', 'FUBO'];
// Update with your desired stock symbols

  // Fetch stock data and create charts for each symbol
  for (const symbol of stockSymbols) {
    const stockData = await fetchStockData(symbol);

    if (stockData) {
      const { dates, prices } = transformStockData(stockData);

      // Create stock chart
      createStockChart(symbol, dates, prices);
    }
  }
}

main();
