from django.conf.urls import url

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from backend.events.consumers import EventConsumer


# You can specify HTTP request handling here, if you do not it will use Django's default view system's ASGI interface.
application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter([
            url('^$', EventConsumer)
        ])
    ),
})
