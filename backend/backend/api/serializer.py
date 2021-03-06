from django.contrib.auth.models import User, Group
from backend.api.models import Info
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Group
        fields = ('url', 'name')


class InfoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Info
        fields = ('url', 'version', 'message')
