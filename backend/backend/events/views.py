from django.shortcuts import HttpResponse

from rest_framework import status

from channels.layers import get_channel_layer

from asgiref.sync import async_to_sync


def event_alarm(req):
    layer = get_channel_layer()
    async_to_sync(layer.group_send)('events', {
        'type': 'alarm',
        'content': 'There is a fire!'
    })
    return HttpResponse(status.HTTP_200_OK)
