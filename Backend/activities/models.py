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
