pragma solidity ^0.4.17;

contract Person {
  string public name;
  address owner;

  function Person() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  function setName(string _name) public onlyOwner {
    name = _name;
  }
}
