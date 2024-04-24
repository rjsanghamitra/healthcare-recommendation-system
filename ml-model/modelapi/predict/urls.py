from django.urls import path
from .views import result, get_symptom_list, find_doctors
urlpatterns = [
    path('symptoms/', get_symptom_list, name='get_checklist'),
    path('find/', find_doctors, name='finding docs'),
    path('result/', result, name='display result'),
]