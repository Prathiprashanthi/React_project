# Generated by Django 5.1.1 on 2024-09-10 11:55

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("api", "0007_delete_usermodel"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserModel",
            fields=[
                ("password", models.CharField(max_length=128, verbose_name="password")),
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("user_name", models.CharField(help_text="user_name", max_length=50)),
                ("user_age", models.IntegerField(null=True)),
                (
                    "user_email",
                    models.EmailField(
                        help_text="user_email", max_length=254, unique=True
                    ),
                ),
                (
                    "user_password",
                    models.TextField(help_text="user_password", max_length=50),
                ),
                (
                    "user_address",
                    models.TextField(help_text="user_address", max_length=100),
                ),
                (
                    "user_contact",
                    models.CharField(help_text="user_contact", max_length=15),
                ),
                ("user_image", models.ImageField(null=True, upload_to="media/")),
                ("last_login", models.DateTimeField(blank=True, null=True)),
            ],
            options={
                "db_table": "user_details",
            },
        ),
    ]
