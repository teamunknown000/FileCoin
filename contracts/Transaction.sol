// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract Transaction {
    struct Transactions {
        string buyer;
        string seller;
        string product;
        uint256 quantity;
        uint256 price;
        string offer;
    }

    Transactions[] transactions;

    function listTransactions(
        string memory _buyer,
        string memory _seller,
        string memory _product,
        uint256 _quantity,
        uint256 _price,
        string memory _offer
    ) public {
        require(bytes(_buyer).length > 0, "Please enter BuyerId");
        require(bytes(_seller).length > 0, "Please enter SellerId");
        require(bytes(_product).length > 0, "Please enter ProductId");
        require(_quantity > 0, "Quantity must be Atleast 1");
        require(_price >= 0, "Price Cannot be negative");
        require(bytes(_offer).length > 0, "Please enter offer");
        transactions.push(
            Transactions(_buyer, _seller, _product, _quantity, _price, _offer)
        );
    }

    function getListedTransactions()
        public
        view
        returns (Transactions[] memory)
    {
        return transactions;
    }
}
