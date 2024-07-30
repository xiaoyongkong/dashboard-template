from django.db import migrations


def add_user_profiles(apps, schema_editor):
    UserProfile = apps.get_model("app", "UserProfile")
    UserProfile.objects.create(profile_name="Admin")
    UserProfile.objects.create(profile_name="Manager")
    UserProfile.objects.create(profile_name="Client")


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(add_user_profiles),
    ]
