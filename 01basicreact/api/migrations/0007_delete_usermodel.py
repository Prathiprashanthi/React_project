# Generated by Django 5.1.1 on 2024-09-10 11:54

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0006_remove_usermodel_date_time_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="UserModel",
        ),
    ]
