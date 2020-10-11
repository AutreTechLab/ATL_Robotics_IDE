// generated from rosidl_generator_cpp/resource/idl__traits.hpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__TRAITS_HPP_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__TRAITS_HPP_

#include "atl_ide_interfaces/msg/detail/idewebapp__struct.hpp"
#include <rosidl_runtime_cpp/traits.hpp>
#include <stdint.h>
#include <type_traits>

namespace rosidl_generator_traits
{

template<>
inline const char * data_type<atl_ide_interfaces::msg::IDEWEBAPP>()
{
  return "atl_ide_interfaces::msg::IDEWEBAPP";
}

template<>
inline const char * name<atl_ide_interfaces::msg::IDEWEBAPP>()
{
  return "atl_ide_interfaces/msg/IDEWEBAPP";
}

template<>
struct has_fixed_size<atl_ide_interfaces::msg::IDEWEBAPP>
  : std::integral_constant<bool, false> {};

template<>
struct has_bounded_size<atl_ide_interfaces::msg::IDEWEBAPP>
  : std::integral_constant<bool, false> {};

template<>
struct is_message<atl_ide_interfaces::msg::IDEWEBAPP>
  : std::true_type {};

}  // namespace rosidl_generator_traits

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__TRAITS_HPP_
