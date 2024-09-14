from django.urls import path
from api import views
from django.conf.urls.static import static
from django.conf import settings
from . import views
from .views import register_user
urlpatterns = [
    path('user/', views.user_list, name='user_list'), 
    path('users-register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    path('admin-login/',views.admin_login, name='admin_login'),
    path('contact/', views.contact, name='contact'),
    path('feedback/',views.feedback, name='feedback'),
    path('profile/',views.profile, name='profile'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

