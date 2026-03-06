from django.db import models

# Modelo principal que representa una actividad dentro del sistema
# Este modelo se convertirá en una colección en MongoDB cuando
# Django se conecte correctamente a la base de datos.

class Activity(models.Model):

    # Título de la actividad
    # Campo obligatorio con máximo 200 caracteres
    titulo = models.CharField(max_length=200)

    # Descripción de la actividad
    # Puede quedar vacío (blank=True)
    descripcion = models.TextField(blank=True)

    # Fecha programada de la actividad
    fecha = models.DateField()

    # Estado de la actividad
    # Solo permite dos valores:
    # pendiente o completada
    estado = models.CharField(
        max_length=20,
        choices=[
            ('pendiente', 'Pendiente'),
            ('completada', 'Completada')
        ],
        default='pendiente'
    )

    # Fecha en la que fue creada la actividad
    # Django la genera automáticamente
    creado = models.DateTimeField(auto_now_add=True)

    # Representación del objeto cuando se imprime
    # en el panel de administración de Django
    def __str__(self):
        return self.titulo
