# Generated by Django 5.1.1 on 2024-09-09 09:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Dataset",
        ),
        migrations.RemoveField(
            model_name="feedback",
            name="Reviewer",
        ),
        migrations.DeleteModel(
            name="Last_login",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Date_Time",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Last_Login_Date",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Last_Login_Time",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Message",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="No_Of_Times_Login",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Otp_Num",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Otp_Status",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="Phone_Number",
        ),
        migrations.RemoveField(
            model_name="usermodel",
            name="User_Status",
        ),
        migrations.DeleteModel(
            name="Feedback",
        ),
    ]
