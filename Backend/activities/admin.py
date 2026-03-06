from django.contrib import admin
from .models import Activity

# Registramos el modelo Activity para poder administrarlo desde el panel admin
admin.site.register(Activity)
