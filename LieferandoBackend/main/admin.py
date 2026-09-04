from django.contrib import admin
from main.models import Meal


class MealAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'id', 'category')
    ordering = ('id',)

admin.site.register(Meal, MealAdmin)
