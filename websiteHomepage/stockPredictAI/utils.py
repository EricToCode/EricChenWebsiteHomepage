import yfinance as yf

def fetch_sp500_price():
    sp500 = yf.Ticker("^GSPC")
    sp500_quote = sp500.history(period='1d')
    current_price = sp500_quote['Close'].iloc[-1]
    opening_price = sp500_quote['Open'].iloc[-1]
    price_change = current_price - opening_price
    percentage_change = (price_change / opening_price) * 100
    return round(current_price,2), round(price_change,2), round(percentage_change,2)
