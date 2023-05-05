from django.http import HttpResponse
from django.conf import settings
import os

def index(request):
    with open(os.path.join(settings.REACT_APP_DIR, 'index.html')) as f:
        return HttpResponse(f.read())
