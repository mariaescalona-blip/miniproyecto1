from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ActivityViewSet, progreso

router = DefaultRouter()
router.register(r'activities', ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('progreso/', progreso)
]
