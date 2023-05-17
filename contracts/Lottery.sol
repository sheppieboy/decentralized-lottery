// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

//enter the lottery (paying some amount)

//Pick a random winner

//Winner to be selected every X minutes -> completely automated

//chainlink oracle for randomness, automated execution (Chainlink Keepers)

error Lottery__NotEnoughETHEntered();

contract Lottery {
    /**
     * State Variables
     */
    uint256 private immutable i_entranceFee;
    address payable[] private s_players;

    /**
     * Events
     */
    event LotteryEnter(address indexed player);

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    //get entrance fee
    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    //get player
    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }

    function enterLottery() public payable {
        if (msg.value < i_entranceFee) {
            revert Lottery__NotEnoughETHEntered();
        }

        s_players.push(payable(msg.sender));
        emit LotteryEnter(msg.sender);
    }

    //function pickWinner(){}
}
