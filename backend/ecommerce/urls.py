# urls.py
from django.urls import path, include
from rest_framework import routers
from .views import SubscriptionViewSet, ProductViewSet, ServiceViewSet, OrderViewSet, BillingInfoViewSet, PaymentViewSet, GoodViewSet

router = routers.DefaultRouter()
router.register(r'subscriptions', SubscriptionViewSet)
router.register(r'products', ProductViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'goods', GoodViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'billing-info', BillingInfoViewSet)
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
