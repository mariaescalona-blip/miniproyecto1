from django.db import models


class Activity(models.Model):

    titulo = models.CharField(max_length=200)

    descripcion = models.TextField(blank=True)

    fecha = models.DateField()

    estado = models.CharField(
        max_length=20,
        choices=[
            ('pendiente', 'Pendiente'),
            ('completada', 'Completada')
        ],
        default='pendiente'
    )

    creado = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo


class SubTask(models.Model):

    actividad = models.ForeignKey(
        Activity,
        related_name="subtasks",
        on_delete=models.CASCADE
    )

    titulo = models.CharField(max_length=200)

    completada = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo
