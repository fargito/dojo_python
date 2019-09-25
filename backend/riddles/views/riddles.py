from core.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def upgrade_to_level_1(request):
    data = request.data
    try:
        username = data['username']
    except KeyError:
        return Response({}, status=400)

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({}, status=404)

    user.level = 1
    user.save()

    return Response({}, status=200)
