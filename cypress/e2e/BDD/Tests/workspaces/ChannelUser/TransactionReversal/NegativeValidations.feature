Feature: Transaction Reversal Negative validations

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test


Scenario: Verify that no other user except system admin(NWADM) should be able to Initiate the reversal.
Given Login into Mobiquity Portal as Channel User4
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And Select others in dropdown
And Enter Subscriber mobile number and search
Then Verify Business user should not able to reverse transaction

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: Verify that no other user except system admin(NWADM) should be able to approve the reversal.
Given Login into Mobiquity Portal as Channel User4
Then Verify business user cannot be able to approve reversal transaction

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: Verify that if user is proving wrong order id then getting the error in response.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search With Wrong TransactionId and verify error message
