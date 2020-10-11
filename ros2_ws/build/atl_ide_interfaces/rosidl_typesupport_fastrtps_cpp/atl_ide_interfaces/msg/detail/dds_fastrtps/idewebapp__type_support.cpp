// generated from rosidl_typesupport_fastrtps_cpp/resource/idl__type_support.cpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice
#include "atl_ide_interfaces/msg/detail/idewebapp__rosidl_typesupport_fastrtps_cpp.hpp"
#include "atl_ide_interfaces/msg/detail/idewebapp__struct.hpp"

#include <limits>
#include <stdexcept>
#include <string>
#include "rosidl_typesupport_cpp/message_type_support.hpp"
#include "rosidl_typesupport_fastrtps_cpp/identifier.hpp"
#include "rosidl_typesupport_fastrtps_cpp/message_type_support.h"
#include "rosidl_typesupport_fastrtps_cpp/message_type_support_decl.hpp"
#include "rosidl_typesupport_fastrtps_cpp/wstring_conversion.hpp"
#include "fastcdr/Cdr.h"


// forward declaration of message dependencies and their conversion functions

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
  eprosima::fastcdr::Cdr & cdr)
{
  // Member: debug_message
  cdr << ros_message.debug_message;
  return true;
}

bool
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
cdr_deserialize(
  eprosima::fastcdr::Cdr & cdr,
  atl_ide_interfaces::msg::IDEWEBAPP & ros_message)
{
  // Member: debug_message
  cdr >> ros_message.debug_message;

  return true;
}

size_t
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
get_serialized_size(
  const atl_ide_interfaces::msg::IDEWEBAPP & ros_message,
  size_t current_alignment)
{
  size_t initial_alignment = current_alignment;

  const size_t padding = 4;
  const size_t wchar_size = 4;
  (void)padding;
  (void)wchar_size;

  // Member: debug_message
  current_alignment += padding +
    eprosima::fastcdr::Cdr::alignment(current_alignment, padding) +
    (ros_message.debug_message.size() + 1);

  return current_alignment - initial_alignment;
}

size_t
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_PUBLIC_atl_ide_interfaces
max_serialized_size_IDEWEBAPP(
  bool & full_bounded,
  size_t current_alignment)
{
  size_t initial_alignment = current_alignment;

  const size_t padding = 4;
  const size_t wchar_size = 4;
  (void)padding;
  (void)wchar_size;
  (void)full_bounded;


  // Member: debug_message
  {
    size_t array_size = 1;

    full_bounded = false;
    for (size_t index = 0; index < array_size; ++index) {
      current_alignment += padding +
        eprosima::fastcdr::Cdr::alignment(current_alignment, padding) +
        1;
    }
  }

  return current_alignment - initial_alignment;
}

static bool _IDEWEBAPP__cdr_serialize(
  const void * untyped_ros_message,
  eprosima::fastcdr::Cdr & cdr)
{
  auto typed_message =
    static_cast<const atl_ide_interfaces::msg::IDEWEBAPP *>(
    untyped_ros_message);
  return cdr_serialize(*typed_message, cdr);
}

static bool _IDEWEBAPP__cdr_deserialize(
  eprosima::fastcdr::Cdr & cdr,
  void * untyped_ros_message)
{
  auto typed_message =
    static_cast<atl_ide_interfaces::msg::IDEWEBAPP *>(
    untyped_ros_message);
  return cdr_deserialize(cdr, *typed_message);
}

static uint32_t _IDEWEBAPP__get_serialized_size(
  const void * untyped_ros_message)
{
  auto typed_message =
    static_cast<const atl_ide_interfaces::msg::IDEWEBAPP *>(
    untyped_ros_message);
  return static_cast<uint32_t>(get_serialized_size(*typed_message, 0));
}

static size_t _IDEWEBAPP__max_serialized_size(bool & full_bounded)
{
  return max_serialized_size_IDEWEBAPP(full_bounded, 0);
}

static message_type_support_callbacks_t _IDEWEBAPP__callbacks = {
  "atl_ide_interfaces::msg",
  "IDEWEBAPP",
  _IDEWEBAPP__cdr_serialize,
  _IDEWEBAPP__cdr_deserialize,
  _IDEWEBAPP__get_serialized_size,
  _IDEWEBAPP__max_serialized_size
};

static rosidl_message_type_support_t _IDEWEBAPP__handle = {
  rosidl_typesupport_fastrtps_cpp::typesupport_identifier,
  &_IDEWEBAPP__callbacks,
  get_message_typesupport_handle_function,
};

}  // namespace typesupport_fastrtps_cpp

}  // namespace msg

}  // namespace atl_ide_interfaces

namespace rosidl_typesupport_fastrtps_cpp
{

template<>
ROSIDL_TYPESUPPORT_FASTRTPS_CPP_EXPORT_atl_ide_interfaces
const rosidl_message_type_support_t *
get_message_type_support_handle<atl_ide_interfaces::msg::IDEWEBAPP>()
{
  return &atl_ide_interfaces::msg::typesupport_fastrtps_cpp::_IDEWEBAPP__handle;
}

}  // namespace rosidl_typesupport_fastrtps_cpp

#ifdef __cplusplus
extern "C"
{
#endif

const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_fastrtps_cpp, atl_ide_interfaces, msg, IDEWEBAPP)() {
  return &atl_ide_interfaces::msg::typesupport_fastrtps_cpp::_IDEWEBAPP__handle;
}

#ifdef __cplusplus
}
#endif
