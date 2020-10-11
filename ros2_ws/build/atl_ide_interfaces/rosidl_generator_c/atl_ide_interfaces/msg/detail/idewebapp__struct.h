// generated from rosidl_generator_c/resource/idl__struct.h.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_H_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_H_

#ifdef __cplusplus
extern "C"
{
#endif

#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>


// Constants defined in the message

// Include directives for member types
// Member 'debug_message'
#include "rosidl_runtime_c/string.h"

// Struct defined in msg/IDEWEBAPP in the package atl_ide_interfaces.
typedef struct atl_ide_interfaces__msg__IDEWEBAPP
{
  rosidl_runtime_c__String debug_message;
} atl_ide_interfaces__msg__IDEWEBAPP;

// Struct for a sequence of atl_ide_interfaces__msg__IDEWEBAPP.
typedef struct atl_ide_interfaces__msg__IDEWEBAPP__Sequence
{
  atl_ide_interfaces__msg__IDEWEBAPP * data;
  /// The number of valid items in data
  size_t size;
  /// The number of allocated items in data
  size_t capacity;
} atl_ide_interfaces__msg__IDEWEBAPP__Sequence;

#ifdef __cplusplus
}
#endif

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_H_
