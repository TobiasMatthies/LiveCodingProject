from typing import override

from django.db import models

# Create your models here.

CATEGORY_CHOICES = (
    ("mainDishes", "Hauptgericht"),
    ("desserts", "Nachspeise"),
    ("drinks", "Getränk"),
)


class Meal(models.Model):
    title = models.CharField(max_length=30)
    price = models.IntegerField()
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)

    @override
    def __str__(self) -> str:
        return self.title
