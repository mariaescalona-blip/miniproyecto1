from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ActivityViewSet, SubTaskViewSet, progreso


router = DefaultRouter()

router.register(r'activities', ActivityViewSet)
router.register(r'subtasks', SubTaskViewSet)


urlpatterns = [

    path('', include(router.urls)),

    path('progreso/', progreso),
]
