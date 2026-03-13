from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from activities.views import ActivityListCreateView
from subtasks.views import SubtaskListCreateView
from today.views import TodayView
from activities.views import DashboardView

def health(request):
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('health/', health),
    path('activities/', ActivityListCreateView.as_view()),
    path('subtasks/', SubtaskListCreateView.as_view()),
    path('today/', TodayView.as_view()),
    path("dashboard/", DashboardView.as_view()),
    path("conflicts/", include("conflicts.urls")),
]