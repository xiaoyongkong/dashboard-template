from django.db import migrations
from django.contrib.auth.hashers import make_password


def add_user_profiles(apps, schema_editor):
    UserProfile = apps.get_model("app", "UserProfile")
    UserProfile.objects.create(profile_name="Admin")
    UserProfile.objects.create(profile_name="Manager")
    UserProfile.objects.create(profile_name="Client")


def add_users(apps, schema_editor):
    UserProfile = apps.get_model("app", "UserProfile")
    User = apps.get_model("app", "User")

    admin_profile = UserProfile.objects.get(profile_name="Admin")
    manager_profile = UserProfile.objects.get(profile_name="Manager")
    client_profile = UserProfile.objects.get(profile_name="Client")

    User.objects.create(
        username="admin",
        password=make_password("123"),
        email="admin@example.com",
        profile=admin_profile,
    )

    User.objects.create(
        username="manager",
        password=make_password("123"),
        email="manager@example.com",
        profile=manager_profile,
    )

    User.objects.create(
        username="client",
        password=make_password("123"),
        email="client@example.com",
        profile=client_profile,
    )


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_add_user_profiles"),
    ]

    operations = [
        migrations.RunPython(add_user_profiles),
        migrations.RunPython(add_users),
    ]
