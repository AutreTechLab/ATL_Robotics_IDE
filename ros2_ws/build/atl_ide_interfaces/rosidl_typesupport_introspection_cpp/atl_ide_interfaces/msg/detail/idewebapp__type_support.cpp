// generated from rosidl_typesupport_introspection_cpp/resource/idl__type_support.cpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#include "array"
#include "cstddef"
#include "string"
#include "vector"
#include "rosidl_runtime_c/message_type_support_struct.h"
#include "rosidl_typesupport_cpp/message_type_support.hpp"
#include "rosidl_typesupport_interface/macros.h"
#include "atl_ide_interfaces/msg/detail/idewebapp__struct.hpp"
#include "rosidl_typesupport_introspection_cpp/field_types.hpp"
#include "rosidl_typesupport_introspection_cpp/identifier.hpp"
#include "rosidl_typesupport_introspection_cpp/message_introspection.hpp"
#include "rosidl_typesupport_introspection_cpp/message_type_support_decl.hpp"
#include "rosidl_typesupport_introspection_cpp/visibility_control.h"

namespace atl_ide_interfaces
{

namespace msg
{

namespace rosidl_typesupport_introspection_cpp
{

void IDEWEBAPP_init_function(
  void * message_memory, rosidl_runtime_cpp::MessageInitialization _init)
{
  new (message_memory) atl_ide_interfaces::msg::IDEWEBAPP(_init);
}

void IDEWEBAPP_fini_function(void * message_memory)
{
  auto typed_message = static_cast<atl_ide_interfaces::msg::IDEWEBAPP *>(message_memory);
  typed_message->~IDEWEBAPP();
}

static const ::rosidl_typesupport_introspection_cpp::MessageMember IDEWEBAPP_message_member_array[1] = {
  {
    "debug_message",  // name
    ::rosidl_typesupport_introspection_cpp::ROS_TYPE_STRING,  // type
    0,  // upper bound of string
    nullptr,  // members of sub message
    false,  // is array
    0,  // array size
    false,  // is upper bound
    offsetof(atl_ide_interfaces::msg::IDEWEBAPP, debug_message),  // bytes offset in struct
    nullptr,  // default value
    nullptr,  // size() function pointer
    nullptr,  // get_const(index) function pointer
    nullptr,  // get(index) function pointer
    nullptr  // resize(index) function pointer
  }
};

static const ::rosidl_typesupport_introspection_cpp::MessageMembers IDEWEBAPP_message_members = {
  "atl_ide_interfaces::msg",  // message namespace
  "IDEWEBAPP",  // message name
  1,  // number of fields
  sizeof(atl_ide_interfaces::msg::IDEWEBAPP),
  IDEWEBAPP_message_member_array,  // message members
  IDEWEBAPP_init_function,  // function to initialize message memory (memory has to be allocated)
  IDEWEBAPP_fini_function  // function to terminate message instance (will not free memory)
};

static const rosidl_message_type_support_t IDEWEBAPP_message_type_support_handle = {
  ::rosidl_typesupport_introspection_cpp::typesupport_identifier,
  &IDEWEBAPP_message_members,
  get_message_typesupport_handle_function,
};

}  // namespace rosidl_typesupport_introspection_cpp

}  // namespace msg

}  // namespace atl_ide_interfaces


namespace rosidl_typesupport_introspection_cpp
{

template<>
ROSIDL_TYPESUPPORT_INTROSPECTION_CPP_PUBLIC
const rosidl_message_type_support_t *
get_message_type_support_handle<atl_ide_interfaces::msg::IDEWEBAPP>()
{
  return &::atl_ide_interfaces::msg::rosidl_typesupport_introspection_cpp::IDEWEBAPP_message_type_support_handle;
}

}  // namespace rosidl_typesupport_introspection_cpp

#ifdef __cplusplus
extern "C"
{
#endif

ROSIDL_TYPESUPPORT_INTROSPECTION_CPP_PUBLIC
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_cpp, atl_ide_interfaces, msg, IDEWEBAPP)() {
  return &::atl_ide_interfaces::msg::rosidl_typesupport_introspection_cpp::IDEWEBAPP_message_type_support_handle;
}

#ifdef __cplusplus
}
#endif
