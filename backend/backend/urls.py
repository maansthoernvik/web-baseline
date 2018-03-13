from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from backend.api import views as api_views
from backend.webapp import views as app_views


router = routers.DefaultRouter()
router.register(r'users', api_views.UserViewSet)
router.register(r'groups', api_views.GroupViewSet)
router.register(r'info', api_views.InfoViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/', api_views.login_user),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^csrf', app_views.get_csrf_token),
    url(r'^$', app_views.get_app_root),
    url(r'^.*/$', app_views.get_app_root),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
