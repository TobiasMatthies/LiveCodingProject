from typing import override

from django.db import models


# Create your models here.
class Meal(models.Model):
    title = models.CharField(max_length=30)
    price = models.IntegerField()

    @override
    def __str__(self) -> str:
        return self.title
