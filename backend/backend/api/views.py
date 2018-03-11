from django.contrib.auth.models import User, Group

from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated

from backend.api.models import Info
from backend.api.serializer import UserSerializer, GroupSerializer, InfoSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    pagination_class = LimitOffsetPagination
# To specify specific permission and authentication classes for different
# viewsets, uncomment the lines below and add the appropriate imports.
    permission_classes = (IsAuthenticated, )
#    authentication_classes = (BasicAuthentication, )

# Overriding perform_create makes something happen at object creation. Call serializer.save(). There is also
# perform_destroy and perform_update etc.
#    def perform_create(self, serializer):


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated, )


class InfoViewSet(viewsets.ModelViewSet):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated, )
