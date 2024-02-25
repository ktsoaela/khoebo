# views.py
from rest_framework import viewsets
from .models import Subscription, Product, Service, Order, BillingInfo, Payment, Good
from .serializers import SubscriptionSerializer, ProductSerializer, ServiceSerializer, OrderSerializer, BillingInfoSerializer, PaymentSerializer, GoodSerializer

class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class GoodViewSet(viewsets.ModelViewSet):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class BillingInfoViewSet(viewsets.ModelViewSet):
    queryset = BillingInfo.objects.all()
    serializer_class = BillingInfoSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
