from rest_framework import serializers
from .models import UserModel,Feedback

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['user_name', 'user_age', 'user_email', 'user_password', 'user_address', 'user_contact', 'user_image']
        
        

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)
        
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['Feed_id','Rating', 'Review','Reviewer','datetime']   
        
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['user_name', 'user_age', 'user_email', 'user_password', 'user_address', 'user_contact', 'user_image']
