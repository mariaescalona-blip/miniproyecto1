from django.db import models


class Activity(models.Model):

    title = models.CharField(max_length=200)

    subject = models.CharField(max_length=200)

    date = models.DateField()

    status = models.CharField(
        max_length=20,
        default="pending"
    )

    def __str__(self):
        return self.title
