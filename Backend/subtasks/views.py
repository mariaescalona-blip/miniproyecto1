from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.auth import get_user_from_token

from .models import Subtask
from .serializers import SubtaskSerializer


class SubtaskListCreateView(APIView):

    def get(self, request):

        user = get_user_from_token(request)

        if not user:
            return Response({"error": "Unauthorized"}, status=401)

        subtasks = Subtask.objects.filter(activity__user=user)

        serializer = SubtaskSerializer(subtasks, many=True)
        return Response(serializer.data)

    def post(self, request):

        serializer = SubtaskSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)