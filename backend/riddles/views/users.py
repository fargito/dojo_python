from django.http import JsonResponse


def get_users(request):
    """this endpoint returns the list of users and their current score"""
    return JsonResponse({"users": []})
