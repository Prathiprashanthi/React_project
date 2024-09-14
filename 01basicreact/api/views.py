from .models import UserModel,Contact,Feedback
from.serializers import UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.views.decorators.http import require_POST
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password



@api_view(['GET', 'POST'])
def user_list(request):
    if request.method == 'GET':
        users = UserModel.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@require_POST
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from .serializers import LoginSerializer
from django.utils import timezone

@api_view(['POST'])
def login_user(request):
    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        
        # Database lookup and password validation
        try:
            user = UserModel.objects.get(user_email=email)
        except UserModel.DoesNotExist:
            return Response({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
        
        if user.user_password == password:  # Plain-text comparison
            # Successful login logic
            request.session['user_id'] = user.user_id
            user.last_login = timezone.now()
            user.save()
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

    # If serializer is not valid, show the errors
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import json
@csrf_exempt
def admin_login(request):
    admin_name = 'admin'
    admin_pwd = 'admin'

    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Extract JSON data from the request body
            admin_n = data.get('name')
            admin_p = data.get('password')
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)

        if admin_n == admin_name and admin_p == admin_pwd:
            # Success response
            return JsonResponse({'status': 'success', 'message': 'You are logged in!'}, status=200)
        else:
            # Failure response
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)


from django.core.validators import validate_email
from django.core.exceptions import ValidationError

@csrf_exempt
def contact(req):
    if req.method == 'POST':
        try:
            data = json.loads(req.body)
            email = data.get('email')
            contact = data.get('contact')
            message = data.get('message')

            # Basic validation
            if not contact or not email or not message:
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            # Email validation
            try:
                validate_email(email)
            except ValidationError:
                return JsonResponse({'error': 'Invalid email address.'}, status=400)

            # Create entry in the database
            Contact.objects.create(
                email=email,
                contact=contact,
                Message=message
            )

            return JsonResponse({'success': 'Your message has been submitted successfully.'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid data format.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)

from .serializers import FeedbackSerializer
@api_view(['POST'])
def feedback(request):
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Feedback submitted successfully!'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

from .serializers import UserProfileSerializer
@api_view(['GET', 'POST'])
def profile(request):
    if request.method == 'GET':
        try:
            user_profile = UserModel.objects.first()  # Adjust as needed to fetch the correct user
            serializer = UserProfileSerializer(user_profile)
            return Response(serializer.data)
        except UserModel.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = UserModel.objects.first()  # Adjust as needed to fetch the correct user
            if user:
                serializer.update(user, serializer.validated_data)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)