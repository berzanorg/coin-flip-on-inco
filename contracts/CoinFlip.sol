// SPDX-License-Identifier: MIT

pragma solidity ^0.8.25;

import "fhevm@0.3.x/lib/TFHE.sol";

contract CoinFlip {
    mapping(address => euint32) internal getWon;

    event Flipped(address addr);

    function getStats(address addr) public view virtual returns (uint32) {
        if (TFHE.isInitialized(getWon[addr])) {
            return TFHE.decrypt(getWon[addr]);
        } else {
            return 0;
        }
    }

    function flip() public returns (bool) {
        euint8 random = TFHE.randEuint8(2);

        ebool won = TFHE.ne(random, 0);

        getWon[msg.sender] = TFHE.add(getWon[msg.sender], TFHE.cmux(won, TFHE.asEuint32(1), TFHE.asEuint32(0)));

        emit Flipped(msg.sender);

        return TFHE.decrypt(won);
    }
}
