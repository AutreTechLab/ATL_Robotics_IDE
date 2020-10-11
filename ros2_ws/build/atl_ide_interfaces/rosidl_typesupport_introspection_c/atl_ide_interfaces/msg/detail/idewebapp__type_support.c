// generated from rosidl_typesupport_introspection_c/resource/idl__type_support.c.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#include <stddef.h>
#include "atl_ide_interfaces/msg/detail/idewebapp__rosidl_typesupport_introspection_c.h"
#include "atl_ide_interfaces/msg/rosidl_typesupport_introspection_c__visibility_control.h"
#include "rosidl_typesupport_introspection_c/field_types.h"
#include "rosidl_typesupport_introspection_c/identifier.h"
#include "rosidl_typesupport_introspection_c/message_introspection.h"
#include "atl_ide_interfaces/msg/detail/idewebapp__functions.h"
#include "atl_ide_interfaces/msg/detail/idewebapp__struct.h"


// Include directives for member types
// Member `debug_message`
#include "rosidl_runtime_c/string_functions.h"

#ifdef __cplusplus
extern "C"
{
#endif

void IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_init_function(
  void * message_memory, enum rosidl_runtime_c__message_initialization _init)
{
  // TODO(karsten1987): initializers are not yet implemented for typesupport c
  // see https://github.com/ros2/ros2/issues/397
  (void) _init;
  atl_ide_interfaces__msg__IDEWEBAPP__init(message_memory);
}

void IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_fini_function(void * message_memory)
{
  atl_ide_interfaces__msg__IDEWEBAPP__fini(message_memory);
}

static rosidl_typesupport_introspection_c__MessageMember IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_member_array[1] = {
  {
    "debug_message",  // name
    rosidl_typesupport_introspection_c__ROS_TYPE_STRING,  // type
    0,  // upper bound of string
    NULL,  // members of sub message
    false,  // is array
    0,  // array size
    false,  // is upper bound
    offsetof(atl_ide_interfaces__msg__IDEWEBAPP, debug_message),  // bytes offset in struct
    NULL,  // default value
    NULL,  // size() function pointer
    NULL,  // get_const(index) function pointer
    NULL,  // get(index) function pointer
    NULL  // resize(index) function pointer
  }
};

static const rosidl_typesupport_introspection_c__MessageMembers IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_members = {
  "atl_ide_interfaces__msg",  // message namespace
  "IDEWEBAPP",  // message name
  1,  // number of fields
  sizeof(atl_ide_interfaces__msg__IDEWEBAPP),
  IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_member_array,  // message members
  IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_init_function,  // function to initialize message memory (memory has to be allocated)
  IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_fini_function  // function to terminate message instance (will not free memory)
};

// this is not const since it must be initialized on first access
// since C does not allow non-integral compile-time constants
static rosidl_message_type_support_t IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_type_support_handle = {
  0,
  &IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_members,
  get_message_typesupport_handle_function,
};

ROSIDL_TYPESUPPORT_INTROSPECTION_C_EXPORT_atl_ide_interfaces
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, atl_ide_interfaces, msg, IDEWEBAPP)() {
  if (!IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_type_support_handle.typesupport_identifier) {
    IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_type_support_handle.typesupport_identifier =
      rosidl_typesupport_introspection_c__identifier;
  }
  return &IDEWEBAPP__rosidl_typesupport_introspection_c__IDEWEBAPP_message_type_support_handle;
}
#ifdef __cplusplus
}
#endif
