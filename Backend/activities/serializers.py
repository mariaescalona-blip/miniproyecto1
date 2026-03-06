from rest_framework import serializers
from .models import Activity

class ActivitySerializer(serializers.ModelSerializer):

    def validate_titulo(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                "El título debe tener al menos 3 caracteres"
            )
        return value

    class Meta:
        model = Activity
        fields = '__all__'
