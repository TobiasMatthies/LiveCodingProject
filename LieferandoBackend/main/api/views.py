from main.api.serializers import MealSerializer
from main.models import Meal
from rest_framework import generics


class MealListAPIView(generics.ListAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
