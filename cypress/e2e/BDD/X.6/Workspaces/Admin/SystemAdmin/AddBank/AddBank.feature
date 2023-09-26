Feature: Add Bank

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID :TC_392
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags   
Scenario: To verify that ADD Bank Account button is disabled
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Mobile number and KYC number in search menu for Merchant user
Then Check for the Add Bank Account is disabled

