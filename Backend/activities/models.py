from django.db import models

# Modelo que representa una actividad o tarea dentro del sistema
class Activity(models.Model):

    # Título o nombre de la actividad
    titulo = models.CharField(max_length=200)

    # Descripción opcional de la actividad
    descripcion = models.TextField(blank=True)

    # Fecha en que se debe realizar la actividad
    fecha = models.DateField()

    # Estado de la actividad (pendiente o completada)
    estado = models.CharField(
        max_length=20,
        choices=[
            ('pendiente', 'Pendiente'),
            ('completada', 'Completada')
        ],
        default='pendiente'
    )

    # Fecha de creación automática
    creado = models.DateTimeField(auto_now_add=True)

    # Método que devuelve el nombre de la actividad
    # Django usa esto para mostrar el objeto en el admin
    def __str__(self):
        return self.titulo
