// generated from rosidl_typesupport_fastrtps_cpp/resource/idl__rosidl_typesupport_fastrtps_cpp.hpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__ROSIDL_TYPESUPPORT_FASTRTPS_CPP_HPP_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__ROSIDL_TYPESUPPORT_FASTRTPS_CPP_HPP_

#include "rosidl_runtime_c/message_type_support_struct.h"
#include "rosidl_typesupport_interface/macros.h"
#include "atl_ide_interfaces/msg/rosidl_typesupport_fastrtps_cpp__visibility_control.h"
#include "atl_ide_interfaces/msg/detail/idewebapp__struct.hpp"

#ifndef _WIN32
# pragma GCC diagnostic push
# pragma GCC diagnostic ignored "-Wunused-parameter"
# ifdef __clang__
#  pragma clang diagnostic ignored "-Wdeprecated-register"
#  pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
# endif
#endif
#ifndef _WIN32
# pragma GCC diagnostic pop
#endif

#include "fastcdr/Cdr.h"

namespace atl_ide_interfaces
{

namespace msg
{

namespace typesupport_fastrtps_cpp
{

bool
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
cdr_serialize(
  const atl_ide_interfaces::msg::IDEWEBAPP & ros_message,
  eprosima::fastcdr::Cdr & cdr);

bool
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
cdr_deserialize(
  eprosima::fastcdr::Cdr & cdr,
  atl_ide_interfaces::msg::IDEWEBAPP & ros_message);

size_t
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
get_serialized_size(
  const atl_ide_interfaces::msg::IDEWEBAPP & ros_message,
  size_t current_alignment);

size_t
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
max_serialized_size_IDEWEBAPP(
  bool & full_bounded,
  size_t current_alignment);

}  // namespace typesupport_fastrtps_cpp

}  // namespace msg

}  // namespace atl_ide_interfaces

#ifdef __cplusplus
extern "C"
{
#endif

ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
const rosidl_message_type_support_t *
  ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_fastrtps_cpp, atl_ide_interfaces, msg, IDEWEBAPP)();

#ifdef __cplusplus
}
#endif

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__ROSIDL_TYPESUPPORT_FASTRTPS_CPP_HPP_
