from rest_framework.serializers import ModelSerializer, SerializerMethodField

from .models import User


class UserSerializer(ModelSerializer):
    score = SerializerMethodField()

    def get_score(self, obj):
        return 0


    class Meta:
        model = User
        fields = ('username', 'score')
