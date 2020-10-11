// generated from rosidl_typesupport_c/resource/idl__type_support.cpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#include "cstddef"
#include "rosidl_runtime_c/message_type_support_struct.h"
#include "atl_ide_interfaces/msg/rosidl_typesupport_c__visibility_control.h"
#include "atl_ide_interfaces/msg/detail/idewebapp__struct.h"
#include "rosidl_typesupport_c/identifier.h"
#include "rosidl_typesupport_c/message_type_support_dispatch.h"
#include "rosidl_typesupport_c/type_support_map.h"
#include "rosidl_typesupport_c/visibility_control.h"
#include "rosidl_typesupport_interface/macros.h"

namespace atl_ide_interfaces
{

namespace msg
{

namespace rosidl_typesupport_c
{

typedef struct _IDEWEBAPP_type_support_ids_t
{
  const char * typesupport_identifier[2];
} _IDEWEBAPP_type_support_ids_t;

static const _IDEWEBAPP_type_support_ids_t _IDEWEBAPP_message_typesupport_ids = {
  {
    "rosidl_typesupport_fastrtps_c",  // ::rosidl_typesupport_fastrtps_c::typesupport_identifier,
    "rosidl_typesupport_introspection_c",  // ::rosidl_typesupport_introspection_c::typesupport_identifier,
  }
};

typedef struct _IDEWEBAPP_type_support_symbol_names_t
{
  const char * symbol_name[2];
} _IDEWEBAPP_type_support_symbol_names_t;

#define STRINGIFY_(s) #s
#define STRINGIFY(s) STRINGIFY_(s)

static const _IDEWEBAPP_type_support_symbol_names_t _IDEWEBAPP_message_typesupport_symbol_names = {
  {
    STRINGIFY(ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_fastrtps_c, atl_ide_interfaces, msg, IDEWEBAPP)),
    STRINGIFY(ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, atl_ide_interfaces, msg, IDEWEBAPP)),
  }
};

typedef struct _IDEWEBAPP_type_support_data_t
{
  void * data[2];
} _IDEWEBAPP_type_support_data_t;

static _IDEWEBAPP_type_support_data_t _IDEWEBAPP_message_typesupport_data = {
  {
    0,  // will store the shared library later
    0,  // will store the shared library later
  }
};

static const type_support_map_t _IDEWEBAPP_message_typesupport_map = {
  2,
  "atl_ide_interfaces",
  &_IDEWEBAPP_message_typesupport_ids.typesupport_identifier[0],
  &_IDEWEBAPP_message_typesupport_symbol_names.symbol_name[0],
  &_IDEWEBAPP_message_typesupport_data.data[0],
};

static const rosidl_message_type_support_t IDEWEBAPP_message_type_support_handle = {
  rosidl_typesupport_c__typesupport_identifier,
  reinterpret_cast<const type_support_map_t *>(&_IDEWEBAPP_message_typesupport_map),
  rosidl_typesupport_c__get_message_typesupport_handle_function,
};

}  // namespace rosidl_typesupport_c

}  // namespace msg

}  // namespace atl_ide_interfaces

#ifdef __cplusplus
extern "C"
{
#endif

ROSIDL_TYPESUPPORT_C_EXPORT_atl_ide_interfaces
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_c, atl_ide_interfaces, msg, IDEWEBAPP)() {
  return &::atl_ide_interfaces::msg::rosidl_typesupport_c::IDEWEBAPP_message_type_support_handle;
}

#ifdef __cplusplus
}
#endif
