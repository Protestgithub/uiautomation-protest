Feature: Recharge reversal rejection

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify mobile recharge transaction for transaction correction reversal for Rejection scenarios
Given Login into Consumer Portal
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
And Assert the transaction successfully page
Then Get Recharge TransactionId

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


Scenario: To Verify System Admin user should be able to Initiate Mobile Recharge Transaction reversalfor rejection scenarios.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search Recharge transaction using TransactionId
And Get Recharge OrderId
Then Initiate B2W reverse transaction
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
Then Verify Transaction reversal Initiated state
And Navigate to MyActivity and get Transaction initiated time


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


Scenario: To Verify user able to Reject Mobile Recharge Transaction Reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Reject the Users

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


Scenario: To Verify System Admin user should be able to Initiate Mobile Recharge Transaction reversal for Ambiguous order Rejection.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search Recharge transaction using TransactionId
And Get Recharge OrderId
Then Initiate B2W reverse transaction
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
Then Verify Transaction reversal Initiated state
And Navigate to MyActivity and get Transaction initiated time


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


Scenario: To Verify user able to Approve Mobile Recharge Transaction Reversal for Ambiguous order rejection
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
Then Verify W2B Transaction reversal Approved state


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

Scenario: To verify system admin user able to perform Ambiguous Mobile Recharge FulfillmentReversal settlement Initiation for Rejection
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convert MobileRecharge FulfillmentReversal csv to json, Update data and convert json to csv
Then Update Fullfillment Reversal template and verify Success message


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

Scenario: To verify system admin user able to Reject Ambiguous Mobile Recharge FulfillmentReversal settlement 
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Reject the Ambiguous Payment Reversal

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

Scenario: To verify system admin user able to perform Ambiguous Mobile Recharge FulfillmentReversal settlement Initiation for Rejection from third party
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convert MobileRecharge FulfillmentReversal csv to json, Update data and convert json to csv for Rejection
Then Update Fullfillment Reversal template and verify Success message


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

Scenario: To verify system admin user able to approval Ambiguous Mobile Recharge FulfillmentReversal settlement  for Rejection from third party
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Reject the Ambiguous Payment Reversal
