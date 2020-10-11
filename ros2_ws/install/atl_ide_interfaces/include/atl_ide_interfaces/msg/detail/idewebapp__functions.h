// generated from rosidl_generator_c/resource/idl__functions.h.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__FUNCTIONS_H_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__FUNCTIONS_H_

#ifdef __cplusplus
extern "C"
{
#endif

#include <stdbool.h>
#include <stdlib.h>

#include "rosidl_runtime_c/visibility_control.h"
#include "atl_ide_interfaces/msg/rosidl_generator_c__visibility_control.h"

#include "atl_ide_interfaces/msg/detail/idewebapp__struct.h"

/// Initialize msg/IDEWEBAPP message.
/**
 * If the init function is called twice for the same message without
 * calling fini inbetween previously allocated memory will be leaked.
 * \param[in,out] msg The previously allocated message pointer.
 * Fields without a default value will not be initialized by this function.
 * You might want to call memset(msg, 0, sizeof(
 * atl_ide_interfaces__msg__IDEWEBAPP
 * )) before or use
 * atl_ide_interfaces__msg__IDEWEBAPP__create()
 * to allocate and initialize the message.
 * \return true if initialization was successful, otherwise false
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
bool
atl_ide_interfaces__msg__IDEWEBAPP__init(atl_ide_interfaces__msg__IDEWEBAPP * msg);

/// Finalize msg/IDEWEBAPP message.
/**
 * \param[in,out] msg The allocated message pointer.
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
void
atl_ide_interfaces__msg__IDEWEBAPP__fini(atl_ide_interfaces__msg__IDEWEBAPP * msg);

/// Create msg/IDEWEBAPP message.
/**
 * It allocates the memory for the message, sets the memory to zero, and
 * calls
 * atl_ide_interfaces__msg__IDEWEBAPP__init().
 * \return The pointer to the initialized message if successful,
 * otherwise NULL
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
atl_ide_interfaces__msg__IDEWEBAPP *
atl_ide_interfaces__msg__IDEWEBAPP__create();

/// Destroy msg/IDEWEBAPP message.
/**
 * It calls
 * atl_ide_interfaces__msg__IDEWEBAPP__fini()
 * and frees the memory of the message.
 * \param[in,out] msg The allocated message pointer.
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
void
atl_ide_interfaces__msg__IDEWEBAPP__destroy(atl_ide_interfaces__msg__IDEWEBAPP * msg);


/// Initialize array of msg/IDEWEBAPP messages.
/**
 * It allocates the memory for the number of elements and calls
 * atl_ide_interfaces__msg__IDEWEBAPP__init()
 * for each element of the array.
 * \param[in,out] array The allocated array pointer.
 * \param[in] size The size / capacity of the array.
 * \return true if initialization was successful, otherwise false
 * If the array pointer is valid and the size is zero it is guaranteed
 # to return true.
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
bool
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__init(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array, size_t size);

/// Finalize array of msg/IDEWEBAPP messages.
/**
 * It calls
 * atl_ide_interfaces__msg__IDEWEBAPP__fini()
 * for each element of the array and frees the memory for the number of
 * elements.
 * \param[in,out] array The initialized array pointer.
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
void
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__fini(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array);

/// Create array of msg/IDEWEBAPP messages.
/**
 * It allocates the memory for the array and calls
 * atl_ide_interfaces__msg__IDEWEBAPP__Sequence__init().
 * \param[in] size The size / capacity of the array.
 * \return The pointer to the initialized array if successful, otherwise NULL
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
atl_ide_interfaces__msg__IDEWEBAPP__Sequence *
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__create(size_t size);

/// Destroy array of msg/IDEWEBAPP messages.
/**
 * It calls
 * atl_ide_interfaces__msg__IDEWEBAPP__Sequence__fini()
 * on the array,
 * and frees the memory of the array.
 * \param[in,out] array The initialized array pointer.
 */
ROSIDL_GENERATOR_C_PUBLIC_atl_ide_interfaces
void
atl_ide_interfaces__msg__IDEWEBAPP__Sequence__destroy(atl_ide_interfaces__msg__IDEWEBAPP__Sequence * array);

#ifdef __cplusplus
}
#endif

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__FUNCTIONS_H_
