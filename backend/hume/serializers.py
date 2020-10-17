from rest_framework import serializers

from .models import Hume


class HumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hume
        fields = ('id', 'uuid', 'ip_address', 'heartbeat', 'is_paired', 'name',
                  'home')
