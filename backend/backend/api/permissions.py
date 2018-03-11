from rest_framework.permissions import BasePermission


class ExtendedPermission(BasePermission):

    # Example extension
    def has_object_permission(self, request, view, obj):
        return request.user is not None
