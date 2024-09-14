from django.db import models

class UserModel(models.Model):
    user_id=models.AutoField(primary_key=True)
    user_name=models.CharField(help_text='user_name',max_length=50)
    user_age=models.IntegerField(null=True)
    user_email=models.EmailField(help_text='user_email')
    user_password=models.TextField(help_text='user_password',max_length=50)
    user_address=models.TextField(help_text='user_address',max_length=100)
    user_contact=models.CharField(help_text='user_contact',max_length=15)
    user_image=models.ImageField(upload_to='media/',null=True)
    last_login = models.DateTimeField(null=True, blank=True)
    user_status = models.TextField(default = 'pending', max_length=50, null = True)
    
    class Meta:
        db_table='user_details'

class Contact(models.Model):
    email = models.EmailField()  # Field for email
    contact = models.CharField(max_length=15)
    Message =models.TextField(max_length=250,null=True)

    class Meta:
        db_table='contact_details'

class Feedback(models.Model):
    Feed_id = models.AutoField(primary_key=True)
    Rating=models.CharField(max_length=100,null=True)
    Review=models.CharField(max_length=225,null=True)
    Reviewer=models.ForeignKey(UserModel, on_delete=models.CASCADE,null=True)
    datetime=models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'feedback_details'