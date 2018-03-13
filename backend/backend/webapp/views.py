from django.shortcuts import render


def get_app_root(request):
    return render(template_name='index.html', request=request)
