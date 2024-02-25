from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import logout, get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import PasswordChangeView, PasswordResetView
from .serializers import UserSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"detail": "Logged out successfully."}, status=status.HTTP_200_OK)

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomPasswordChangeView(PasswordChangeView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

class CustomPasswordResetView(PasswordResetView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({"detail": "Login successful."}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"detail": "Logout successful."}, status=status.HTTP_200_OK)

class RegisterView(APIView):
    def post(self, request):
        form = UserCreationForm(request.data)
        if form.is_valid():
            form.save()
            return Response({"detail": "Registration successful."}, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordChangeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')
        if new_password != confirm_password:
            return Response({"detail": "Passwords do not match."}, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(new_password)
        user.save()
        return Response({"detail": "Password changed successfully."}, status=status.HTTP_200_OK)

class PasswordResetView(APIView):
    def post(self, request):
        email = request.data.get('email')
        
        
        subject = 'Password Reset Request'
        message = render_to_string('password_reset_email.html', {'email': email})
        from_email = 'your_email@gmail.com'  # Change this to your email
        recipient_list = [email]
        
        try:
            send_mail(subject, message, from_email, recipient_list)
            return Response({"detail": "Password reset email sent."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "Failed to send password reset email."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)