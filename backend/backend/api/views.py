from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie

from json import loads

from rest_framework import viewsets, status
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


@csrf_exempt
@ensure_csrf_cookie
def get_csrf_token(request):
    return HttpResponse(status=status.HTTP_200_OK)


def login_user(request):
    request_body = request.body.decode('utf-8')
    dict_request_body = loads(request_body)
    username = dict_request_body['username']
    password = dict_request_body['password']

    user = authenticate(username=username, password=password)

    if not None:
        login(request, user)
        return HttpResponse(status=status.HTTP_200_OK)
    else:
        response = HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        response['WWW-Authenticate'] = 'Invalid username or password'
        return response
