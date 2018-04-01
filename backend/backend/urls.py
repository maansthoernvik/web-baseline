from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from backend.webapp import views as app_views
from backend.api import urls as api_urls
from backend.events import urls as event_urls


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^events/', include(event_urls)),
    url(r'^$', app_views.get_app_root),
    url(r'^.*/$', app_views.get_app_root),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
