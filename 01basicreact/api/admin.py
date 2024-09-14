from django.contrib import admin
from .models import UserModel,Contact,Feedback
# Register your models here.
@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display=['user_id','user_name','user_age','user_email','user_password','user_address','user_contact','user_image']
@admin.register(Contact)    
class ContactAdmin(admin.ModelAdmin):
    list_display = ('email', 'contact', 'Message')
@admin.register(Feedback)    
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('Feed_id', 'Rating', 'Review','Reviewer','datetime')