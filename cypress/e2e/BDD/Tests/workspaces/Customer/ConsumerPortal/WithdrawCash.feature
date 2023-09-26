Feature: Withdraw Cash


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that if User having authority for withdraw cash then he/she can able to perform the withdraw cash process successfully.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Fill all the details for withdraw cash and proceed
#And Enter the Pin and verify transaction
#And Assert the transaction successfully page
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that default value Agent should be there while proceeding towards withdraw cash.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Check by default Agent is checked
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that for withdraw cash mobile number/receiver code field should have value numerical,alphanumerical. Special character and character should not allow.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Enter numerical Mobile number in mobile number/receiver code field
And Enter alpha numerical receiver code in mobile number/receiver code field
And Enter Special character and character assert error field
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that amount field should have value greater than 0 and allow until 2 decimal point(2.35).
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Enter numerical Mobile number in mobile number/receiver code field
And Enter amount in amount field
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that User should be able to choose different currency and the related wallet should change to respected currency.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Enter numerical Mobile number in mobile number/receiver code field
And Enter amount in amount field
And Select a different currency
#And Check related wallet as per currency
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that the entered remarks length should be in the limit of 30 letters.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Enter remarks
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that without filling any data in withdraw cash by agent page user should not be able to click proceed button.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Check Proceed button is not clickable
Then Logout from portal


# # Author: Rajesh
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test


Scenario: To verify that After clicking on ATM the information icon should be enable to click.
Given Login into Consumer Portal as Customer
When Check whether Withdraw cash is visible or not
And Click on Withdraw cash
And Click on ATM button
And Click on information icon and assert
Then Logout from portal















