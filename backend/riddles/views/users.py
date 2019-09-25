from core.models import User
from core.serializers import UserSerializer
from django.http import JsonResponse


def get_users(request):
    """this endpoint returns the list of users and their current score"""
    users = User.objects.filter(is_staff=False)
    serializer = UserSerializer(users, many=True)

    return JsonResponse({"users": serializer.data})
