Feature: View Wallet

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_580 & TC_581
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify user should be able to view all the associated wallets with him/her.
Given Login into Consumer Portal
When Click on View wallets
And Assert wallet and statement
