from django.db import models
from activities.models import Activity

class Subtask(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("done", "Done"),
        ("postponed", "Postponed"),
    ]

    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    target_date = models.DateField()
    estimated_hours = models.IntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title