// generated from rosidl_generator_c/resource/idl__functions.c.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice
#include "atl_ide_interfaces/msg/detail/idewebapp__functions.h"

#include <assert.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>


// Include directives for member types
// Member `debug_message`
#include "rosidl_runtime_c/string_functions.h"

bool
atl_ide_interfaces__msg__IDEWEBAPP__init(atl_ide_interfaces__msg__IDEWEBAPP * msg)
{
  if (!msg) {
    return false;
  }
  // debug_message
  if (!rosidl_runtime_c__String__init(&msg->debug_message)) {
    atl_ide_interfaces__msg__IDEWEBAPP__fini(msg);
    return false;
  }
  return true;
}

void
atl_ide_interfaces__msg__IDEWEBAPP__fini(atl_ide_interfaces__msg__IDEWEBAPP * msg)
{
  if (!msg) {
    return;
  }
  // debug_message
  rosidl_runtime_c__String__fini(&msg->debug_message);
}

atl_ide_interfaces__msg__IDEWEBAPP *
atl_ide_interfaces__msg__IDEWEBAPP__create()
{
  atl_ide_interfaces__msg__IDEWEBAPP * msg = (atl_ide_interfaces__msg__IDEWEBAPP *)malloc(sizeof(atl_ide_interfaces__msg__IDEWEBAPP));
  if (!msg) {
    return NULL;
  }
  memset(msg, 0, sizeof(atl_ide_interfaces__msg__IDEWEBAPP));
  bool success = atl_ide_interfaces__msg__IDEWEBAPP__init(msg);
  if (!success) {
    free(msg);
    return NULL;
  }
  return msg;
}

void
atl_ide_interfaces__msg__IDEWEBAPP__destroy(atl_ide_interfaces__msg__IDEWEBAPP * msg)
{
  if (msg) {
    atl_ide_interfaces__msg__IDEWEBAPP__fini(msg);
  }
  free(msg);
}


bool
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__init(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array, size_t size)
{
  if (!array) {
    return false;
  }
  atl_ide_interfaces__msg__IDEWEBAPP * data = NULL;
  if (size) {
    data = (atl_ide_interfaces__msg__IDEWEBAPP *)calloc(size, sizeof(atl_ide_interfaces__msg__IDEWEBAPP));
    if (!data) {
      return false;
    }
    // initialize all array elements
    size_t i;
    for (i = 0; i < size; ++i) {
      bool success = atl_ide_interfaces__msg__IDEWEBAPP__init(&data[i]);
      if (!success) {
        break;
      }
    }
    if (i < size) {
      // if initialization failed finalize the already initialized array elements
      for (; i > 0; --i) {
        atl_ide_interfaces__msg__IDEWEBAPP__fini(&data[i - 1]);
      }
      free(data);
      return false;
    }
  }
  array->data = data;
  array->size = size;
  array->capacity = size;
  return true;
}

void
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__fini(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array)
{
  if (!array) {
    return;
  }
  if (array->data) {
    // ensure that data and capacity values are consistent
    assert(array->capacity > 0);
    // finalize all array elements
    for (size_t i = 0; i < array->capacity; ++i) {
      atl_ide_interfaces__msg__IDEWEBAPP__fini(&array->data[i]);
    }
    free(array->data);
    array->data = NULL;
    array->size = 0;
    array->capacity = 0;
  } else {
    // ensure that data, size, and capacity values are consistent
    assert(0 == array->size);
    assert(0 == array->capacity);
  }
}

atl_ide_interfaces__msg__IDEWEBAPP__Sequence *
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__create(size_t size)
{
  atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array = (atl_ide_interfaces__msg__IDEWEBAPP__Sequence *)malloc(sizeof(atl_ide_interfaces__msg__IDEWEBAPP__Sequence));
  if (!array) {
    return NULL;
  }
  bool success = atl_ide_interfaces__msg__IDEWEBAPP__Sequence__init(array, size);
  if (!success) {
    free(array);
    return NULL;
  }
  return array;
}

void
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__destroy(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array)
{
  if (array) {
    atl_ide_interfaces__msg__IDEWEBAPP__Sequence__fini(array);
  }
  free(array);
}
