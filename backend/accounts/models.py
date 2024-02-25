# accounts/models.py
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django_countries.fields import CountryField
from django_countries import countries


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username.strip(), email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)

class CustomUser(AbstractUser):
    CURRENCY_CHOICES = [(code, countries.name(code)) for code in countries]

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    GROUP_CHOICES = (
        ('associate', 'Associate'),
        ('specialist', 'Specialist'),
        ('manager', 'Manager'),
        ('director', 'Director'),
        ('owner', 'Owner'),
        ('customer', 'Customer'),
    )

    PERMISSION_CHOICES = (
        ('full_control', 'Full Control (Create, Update, Edit, Delete)'),
        ('half_control', 'Half Control (View, Create, Update)'),
        ('partial_viewer', 'Partial Viewer (View Only)'),
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)

    date_of_birth = models.DateField(blank=True, null=True)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, blank=True)

    country = CountryField(default='ZA')
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES, default='ZAR')

    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
   
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    groups = models.ManyToManyField('auth.Group', related_name='users', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='users', blank=True)

    
    def __str__(self):
        return self.username
