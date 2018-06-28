pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

/**
 * @title TrustfeedToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
 
/**
 * @title TrustfeedCrowdsaleToken
 * @dev Very simple ERC20 Token that can be minted.
 * It is meant to be used in a crowdsale contract.
 */
contract TrustfeedToken is MintableToken {
  // solium-disable-next-line uppercase
  string public constant name = "TrustfeedToken";
  string public constant symbol = "TFT"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase
}
