Feature: CashOut Field Validations

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
Scenario: To verify that business user is not able to initiate cash-out if entered amount is not valid.
    Given Log in with Merchant user credential
    When Navigate to Cash in or Cash out and Click on Cash Out
    Then Enter Invalid Amount for CashOut and Verify Error Message

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
Scenario: To verify that business user is not able to initiate cash-out transaction if consumer's mobile number is not valid.
    Then Enter Invalid Mobile number and verify error message

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

Scenario: To verify that business user is not able to transfer money if business user is barred or suspended.
    Then Enter Suspendend mobile number and Verify error message

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

Scenario: To verify that sender is not able to transfer money if they don't have enough balance in their SVA.
    Then Enter Amount more than balance and verify error message for cashout