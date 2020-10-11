// generated from rosidl_generator_cpp/resource/idl__struct.hpp.em
// with input from atl_ide_interfaces:msg/IDEWEBAPP.idl
// generated code does not contain a copyright notice

#ifndef ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_HPP_
#define ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_HPP_

#include <rosidl_runtime_cpp/bounded_vector.hpp>
#include <rosidl_runtime_cpp/message_initialization.hpp>
#include <algorithm>
#include <array>
#include <memory>
#include <string>
#include <vector>


#ifndef _WIN32
# define DEPRECATED__atl_ide_interfaces__msg__IDEWEBAPP __attribute__((deprecated))
#else
# define DEPRECATED__atl_ide_interfaces__msg__IDEWEBAPP __declspec(deprecated)
#endif

namespace atl_ide_interfaces
{

namespace msg
{

// message struct
template<class ContainerAllocator>
struct IDEWEBAPP_
{
  using Type = IDEWEBAPP_<ContainerAllocator>;

  explicit IDEWEBAPP_(rosidl_runtime_cpp::MessageInitialization _init = rosidl_runtime_cpp::MessageInitialization::ALL)
  {
    if (rosidl_runtime_cpp::MessageInitialization::ALL == _init ||
      rosidl_runtime_cpp::MessageInitialization::ZERO == _init)
    {
      this->debug_message = "";
    }
  }

  explicit IDEWEBAPP_(const ContainerAllocator & _alloc, rosidl_runtime_cpp::MessageInitialization _init = rosidl_runtime_cpp::MessageInitialization::ALL)
  : debug_message(_alloc)
  {
    if (rosidl_runtime_cpp::MessageInitialization::ALL == _init ||
      rosidl_runtime_cpp::MessageInitialization::ZERO == _init)
    {
      this->debug_message = "";
    }
  }

  // field types and members
  using _debug_message_type =
    std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other>;
  _debug_message_type debug_message;

  // setters for named parameter idiom
  Type & set__debug_message(
    const std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other> & _arg)
  {
    this->debug_message = _arg;
    return *this;
  }

  // constant declarations

  // pointer types
  using RawPtr =
    atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> *;
  using ConstRawPtr =
    const atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> *;
  using SharedPtr =
    std::shared_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>>;
  using ConstSharedPtr =
    std::shared_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> const>;

  template<typename Deleter = std::default_delete<
      atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>>>
  using UniquePtrWithDeleter =
    std::unique_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>, Deleter>;

  using UniquePtr = UniquePtrWithDeleter<>;

  template<typename Deleter = std::default_delete<
      atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>>>
  using ConstUniquePtrWithDeleter =
    std::unique_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> const, Deleter>;
  using ConstUniquePtr = ConstUniquePtrWithDeleter<>;

  using WeakPtr =
    std::weak_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>>;
  using ConstWeakPtr =
    std::weak_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> const>;

  // pointer types similar to ROS 1, use SharedPtr / ConstSharedPtr instead
  // NOTE: Can't use 'using' here because GNU C++ can't parse attributes properly
  typedef DEPRECATED__atl_ide_interfaces__msg__IDEWEBAPP
    std::shared_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator>>
    Ptr;
  typedef DEPRECATED__atl_ide_interfaces__msg__IDEWEBAPP
    std::shared_ptr<atl_ide_interfaces::msg::IDEWEBAPP_<ContainerAllocator> const>
    ConstPtr;

  // comparison operators
  bool operator==(const IDEWEBAPP_ & other) const
  {
    if (this->debug_message != other.debug_message) {
      return false;
    }
    return true;
  }
  bool operator!=(const IDEWEBAPP_ & other) const
  {
    return !this->operator==(other);
  }
};  // struct IDEWEBAPP_

// alias to use template instance with default allocator
using IDEWEBAPP =
  atl_ide_interfaces::msg::IDEWEBAPP_<std::allocator<void>>;

// constant definitions

}  // namespace msg

}  // namespace atl_ide_interfaces

#endif  // ATL_IDE_INTERFACES__MSG__DETAIL__IDEWEBAPP__STRUCT_HPP_
