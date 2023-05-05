from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.contrib import admin

router = DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
