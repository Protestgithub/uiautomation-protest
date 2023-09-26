
Feature: Payment Settings

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_571 & TC_572 & TC_573 & TC_575 &TC_577 & TC_578 
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario: To verify user should be able to see payment methods options on UI to add payment methods and click on Add bank
Given Login into Consumer Portal
When Click on slide menu and check it
And Check the Option and Assert it
And Click on Add Bank Account
And Click on Bank Account and ADD it
Then Assert the Pop-up and click on close


# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_574
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify on clicking "Add Debit Card" by filling the data "ADD" button should be displayed.
When Navigate to Add Debit Card
And Enter the required Debit Card details and check Add Button is Enabled
Then Check for the ADD Btn is Enabled