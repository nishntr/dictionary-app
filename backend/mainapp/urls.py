from django.urls import path,include
from . import views
urlpatterns = [
    path('api',views.DictionaryView.as_view(),name='api')
]