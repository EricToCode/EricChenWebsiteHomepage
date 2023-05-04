from django.shortcuts import render
from .utils import fetch_sp500_price

def index(request):
    sp500_price, price_change, percentage_change = fetch_sp500_price()
    context = {
        'sp500_price': sp500_price,
        'price_change': price_change,
        'percentage_change': percentage_change
    }
    return render(request, 'stockPredictAI/index.html', context)
