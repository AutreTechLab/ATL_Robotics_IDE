// generated from rosidl_generator_cpp/resource/idl__builder.hpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__BUILDER_HPP_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__BUILDER_HPP_

#include "atl_ide_interfaces/msg/detail/idewebapp__struct.hpp"
#include <rosidl_runtime_cpp/message_initialization.hpp>
#include <algorithm>
#include <utility>


namespace atl_ide_interfaces
{

namespace msg
{

namespace builder
{

class Init_IDEWEBAPP_debug_message
{
public:
  Init_IDEWEBAPP_debug_message()
  : msg_(::rosidl_runtime_cpp::MessageInitialization::SKIP)
  {}
  ::atl_ide_interfaces::msg::IDEWEBAPP debug_message(::atl_ide_interfaces::msg::IDEWEBAPP::_debug_message_type arg)
  {
    msg_.debug_message = std::move(arg);
    return std::move(msg_);
  }

private:
  ::atl_ide_interfaces::msg::IDEWEBAPP msg_;
};

}  // namespace builder

}  // namespace msg

template<typename MessageType>
auto build();

template<>
inline
auto build<::atl_ide_interfaces::msg::IDEWEBAPP>()
{
  return atl_ide_interfaces::msg::builder::Init_IDEWEBAPP_debug_message();
}

}  // namespace atl_ide_interfaces

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__BUILDER_HPP_
