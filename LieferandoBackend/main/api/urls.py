from django.urls import path

from .views import MealListAPIView

urlpatterns = [
    path('meals/', MealListAPIView.as_view(), name='meals-list'),
]
