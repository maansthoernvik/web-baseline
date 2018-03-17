from django.conf.urls import url

from rest_framework import routers

from backend.api import views as api_views


router = routers.DefaultRouter()
router.register(r'users', api_views.UserViewSet)
router.register(r'groups', api_views.GroupViewSet)
router.register(r'info', api_views.InfoViewSet)


urlpatterns = [
    url(r'csrf', api_views.get_csrf_token),
    url(r'login', api_views.login_user),
    url(r'logout', api_views.logout_user),
] + router.urls
