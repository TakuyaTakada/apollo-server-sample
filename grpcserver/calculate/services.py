import grpc
from google.protobuf import empty_pb2
from django_grpc_framework.services import Service
from calculate.models import User, Room
from calculate.serializers import UserProtoSerializer, RoomProtoSerializer


class RoomService(Service):
    def List(self, request, context):
        rooms = Room.objects.all()
        serializer = RoomProtoSerializer(rooms, many=True)
        for msg in serializer.message:
            yield msg

    def Create(self, request, context):
        serializer = RoomProtoSerializer(message=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.message

    def get_object(self, pk):
        try:
            return Room.objects.get(pk=pk)
        except Room.DoesNotExist:
            self.context.abort(grpc.StatusCode.NOT_FOUND, f"Room:{pk} not found!")

    def Retrieve(self, request, context):
        room = self.get_object(request.id)
        serializer = RoomProtoSerializer(room)
        return serializer.message

    def Update(self, request, context):
        room = self.get_object(request.id)
        serializer = RoomProtoSerializer(room, message=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.message

    def Destroy(self, request, context):
        room = self.get_object(request.id)
        room.delete()
        return empty_pb2.Empty()


class UserService(Service):
    def List(self, request, context):
        users = User.objects.all()
        serializer = UserProtoSerializer(users, many=True)
        for msg in serializer.message:
            yield msg

    def Create(self, request, context):
        serializer = UserProtoSerializer(message=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.message

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            self.context.abort(grpc.StatusCode.NOT_FOUND, f"User:{pk} not found!")

    def Retrieve(self, request, context):
        user = self.get_object(request.id)
        serializer = UserProtoSerializer(user)
        return serializer.message

    def Update(self, request, context):
        user = self.get_object(request.id)
        serializer = UserProtoSerializer(user, message=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.message

    def Destroy(self, request, context):
        user = self.get_object(request.id)
        user.delete()
        return empty_pb2.Empty()
