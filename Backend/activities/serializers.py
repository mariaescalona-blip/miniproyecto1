from rest_framework import serializers
from .models import Activity, SubTask


class SubTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubTask
        fields = "__all__"


class ActivitySerializer(serializers.ModelSerializer):

    subtasks = SubTaskSerializer(many=True, read_only=True)

    class Meta:
        model = Activity
        fields = "__all__"
