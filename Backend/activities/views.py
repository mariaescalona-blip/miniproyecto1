from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from activities.models import Activity
from subtasks.models import Subtask

from .models import Activity
from .serializers import ActivitySerializer
from core.auth import get_user_from_token


class ActivityListCreateView(APIView):

    def get(self, request):

        user = get_user_from_token(request)

        if not user:
            return Response({"error": "Unauthorized"}, status=401)

        activities = Activity.objects.filter(user=user)

        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)

    def post(self, request):

        user = get_user_from_token(request)

        if not user:
            return Response({"error": "Unauthorized"}, status=401)

        data = request.data.copy()
        data["user"] = user.id

        serializer = ActivitySerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DashboardView(APIView):

    def get(self, request):

        user = get_user_from_token(request)

        if not user:
            return Response({"error": "Unauthorized"}, status=401)

        today = date.today()

        activities = Activity.objects.filter(user=user)
        subtasks = Subtask.objects.filter(activity__user=user)

        total_activities = activities.count()
        total_subtasks = subtasks.count()

        pending_hours = sum(
            s.estimated_hours for s in subtasks if s.status == "pending"
        )

        today_hours = sum(
            s.estimated_hours
            for s in subtasks
            if s.status == "pending" and s.target_date == today
        )

        overload_today = today_hours > user.daily_hours_limit

        return Response({
            "total_activities": total_activities,
            "total_subtasks": total_subtasks,
            "pending_hours": pending_hours,
            "today_hours": today_hours,
            "overload_today": overload_today
        })