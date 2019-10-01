from core.models import User
from core.serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def get_users(request):
    """this endpoint returns the list of users and their current level"""
    users = User.objects.filter(is_staff=False)
    serializer = UserSerializer(users, many=True)

    sorted_users_by_level = sorted(serializer.data, key=lambda user: -user["level"])

    return Response({"users": sorted_users_by_level})
