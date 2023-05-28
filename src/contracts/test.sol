// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract test {
    string name = "something";

    function getName () view public returns (string memory) {
        return name;
    }
}