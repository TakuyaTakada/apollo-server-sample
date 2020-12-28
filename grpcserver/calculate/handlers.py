from calculate.services import RoomService, UserService
from calculate.calculate_proto import room_pb2_grpc, user_pb2_grpc


def grpc_handlers(server):
    room_pb2_grpc.add_RoomsControllerServicer_to_server(RoomService.as_servicer(), server)
    user_pb2_grpc.add_UsersControllerServicer_to_server(UserService.as_servicer(), server)
