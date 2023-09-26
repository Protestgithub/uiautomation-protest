Feature: International Money Transfer Reversal

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
Scenario: To verify on entering all mandatory details International transfer should be successful with ServiceCharge.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
Then Get IMT TransactionId

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


Scenario: To Verify System Admin user should be able to Initiate IMT Transaction reversal with ServiceCharge.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search IMT transaction using TransactionId
Then Initiate W2B reverse transaction and Reverse Service charge
And Click on order details for customerbusiness users
And Search IMT Transaction with OrderId
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


Scenario: To Verify user able to Approve IMT Transaction Reversal with ServiceCharge.
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search IMT Transaction with OrderId
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

Scenario: To verify system admin user able to perform Ambiguous IMT FulfillmentReversal settlement Initiation along with Service charge reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convert IMT FulfillmentReversal csv to json, Update data and convert json to csv
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

Scenario: To verify system admin user able to perform Ambiguous IMT FulfillmentReversal settlement approval along with Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Approve the Initiated Ambiguous bulk and verify success message
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search IMT Transaction with OrderId
Then Verify Transaction reversal state
