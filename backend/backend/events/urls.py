from django.conf.urls import url

from backend.events.views import event_alarm


urlpatterns = [
    url(r'alarm/$', event_alarm),
]
