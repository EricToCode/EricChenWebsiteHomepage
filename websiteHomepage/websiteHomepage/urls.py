"""
URL configuration for websiteHomepage project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
# import todo.views

# router = routers.DefaultRouter()
# router.register(r'todos', todo.views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homepage, name='homepage'),
    path('daily15puzzle/', include(('daily15Puzzle.urls', 'daily15Puzzle'), namespace='daily15Puzzle')),
    path('stockPredictAI/', include(('stockPredictAI.urls', 'stockPredictAI'), namespace='stockPredictAI')),
    path('dailyRankedWordle/', include(('dailyRankedWordle.urls', 'dailyRankedWordle'), namespace='dailyRankedWordle')),
    path('todo/api/', include(('todo.urls', 'todo'), namespace='todo')),  # Include the 'todo' app's URLs under the 'todo/api/' path
    # path('api/', include(router.urls)),
]

