from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Activity, SubTask
from .serializers import ActivitySerializer, SubTaskSerializer


class ActivityViewSet(viewsets.ModelViewSet):

    queryset = Activity.objects.all()

    serializer_class = ActivitySerializer


class SubTaskViewSet(viewsets.ModelViewSet):

    queryset = SubTask.objects.all()

    serializer_class = SubTaskSerializer


@api_view(["GET"])
def progreso(request):

    total = SubTask.objects.count()

    completadas = SubTask.objects.filter(completada=True).count()

    porcentaje = 0

    if total > 0:
        porcentaje = (completadas / total) * 100

    return Response({
        "total": total,
        "completadas": completadas,
        "porcentaje": porcentaje
    })
