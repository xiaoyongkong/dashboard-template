from django.db import models


class UserProfile(models.Model):
    profile_id = models.AutoField(primary_key=True)
    profile_name = models.CharField(max_length=100)

    def __str__(self):
        return self.profile_name


class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.username
