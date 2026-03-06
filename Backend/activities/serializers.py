from rest_framework import serializers
from .models import Activity, SubTask


class SubTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubTask
        fields = '__all__'


class ActivitySerializer(serializers.ModelSerializer):

    subtasks = SubTaskSerializer(many=True, read_only=True)

    def validate_titulo(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                "El título debe tener al menos 3 caracteres"
            )
        return value

    class Meta:
        model = Activity
        fields = '__all__'
