from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Activity
from .serializers import ActivitySerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all().order_by('-creado')
    serializer_class = ActivitySerializer


@api_view(['GET'])
def progreso(request):

    total = Activity.objects.count()
    completadas = Activity.objects.filter(
        estado='completada'
    ).count()

    porcentaje = 0

    if total > 0:
        porcentaje = (completadas / total) * 100

    return Response({
        "total": total,
        "completadas": completadas,
        "porcentaje": porcentaje
    })
