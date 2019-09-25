from django.http import HttpResponse


def health(request):
    return HttpResponse("ok", status=200)
