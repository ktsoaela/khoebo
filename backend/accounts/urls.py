# accounts/urls.py

from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView, PasswordResetView
from . import views

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('password/change/', PasswordChangeView.as_view(), name='password_change'),
    path('password/reset/', PasswordResetView.as_view(), name='password_reset'),
]
