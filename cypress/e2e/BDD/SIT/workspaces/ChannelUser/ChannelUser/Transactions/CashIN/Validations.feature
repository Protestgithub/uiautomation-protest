Feature: CashIn Validations



# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that a barred or suspended customer is not able to receive money in their wallet as cash-in
Given Log in with Merchant user credential
When Navigate to Cash in or Cash out and Click on Cash in
And Enter Suspended mobile for CashIn
And Click on Submit and Click on Confirm Button
Then Verify Suspended error message

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that an active business user is not able to perform cash-in if he/she doesn't have enough balance in their wallet
    Then Enter Amount more than balance and verify error message

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that business user is not able to perform cash-in if entered amount is not valid.
    Then Enter Invalid Amount and Verify error message

