from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie


@csrf_exempt
@ensure_csrf_cookie
def get_csrf_token(request):
    return HttpResponse(status=200)


def get_app_root(request):
    return render(template_name='index.html', request=request)
