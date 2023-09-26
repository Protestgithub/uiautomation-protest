Feature:  Add Bank

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID :TC_391
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags   
Scenario: To verify that user is able to click the ADD Bank Account
Given Login into Mobiquity Portal as Channel User4
When Navigate to User Management and Click on manage user
And Select the user type as self
And User Click on eye button
Then Check for the Add Bank Account


# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID :TC_394
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags   
Scenario:To verify that Business user is able to view the Bank account
Given Login into Mobiquity Portal as Channel User4
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in search menu for Business user1
Then Check the Bank Account