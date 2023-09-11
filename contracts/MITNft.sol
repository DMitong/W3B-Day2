// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MITNft is ERC721, Ownable {
    constructor() ERC721("MitAvatar", "MTA") {
        _mint(msg.sender, 1);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI)): "";
    }

    
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmafVqw4SFT42KGnMU8qmz7E93YvjaXPqEgSW229KNw4pi";
    }
    
}