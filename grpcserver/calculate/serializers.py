from django_grpc_framework import proto_serializers
from calculate.models import User, Room
from calculate.calculate_proto import room_pb2, user_pb2


class RoomProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = Room
        proto_class = room_pb2.Room
        fields = ['id', 'name', 'user']


class UserProtoSerializer(proto_serializers.ModelProtoSerializer):
    class Meta:
        model = User
        proto_class = user_pb2.User
        fields = ['id', 'name']
