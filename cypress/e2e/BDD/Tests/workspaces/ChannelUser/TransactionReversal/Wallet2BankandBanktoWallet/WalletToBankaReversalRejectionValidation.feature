Feature: Bank to wallet and wallet to bank reversal Rejection validation
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

Scenario: To verify system admin user able to do Wallet to Bank Transaction for Both ServiceCharge and Commission Reversal
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount and click on Proceed
And Enter PIN and click on Verify
Then Get W2B TransactionId4
And Login into Consumer Portal
Then Get Wallet Balance


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

Scenario:Verify that if Wallet to Bank reversal is inititiate and no action has been taken then user should not be able to initiate the reversal request again and proper error message should come.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search W2B transaction using TransactionId4
And Get W2B OrderId
Then Initiate W2B reverse transaction
And Navigate to MyActivity and get Transaction initiated time
And Logout
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search W2B transaction using TransactionId
And Get W2B OrderId
Then Verify cannot reinitiate reversal error message




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


Scenario:Verify that only reversal request is initiated then another admin user should be able to reject the reversal
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


Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal along with Commission and Service charge reversal.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search W2B transaction using TransactionId4
And Get B2W OrderId
Then Initiate W2B reverse transaction to Commission and ServiceCharge Reversal
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


Scenario: Approval of W2B Transaction Reversal along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search W2B Reversal Transaction with OrderId
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

Scenario: Ambiguous W2B FulfillmentReversal settlement Initiation along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convet W2B FulfillmentReversal csv to json, Update data and convert json to csv
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

Scenario: Ambiguous W2B FulfillmentReversal settlement approval along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Reject the Ambiguous Fulfillment Reversal

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

Scenario: Ambiguous W2B FulfillmentReversal settlement Initiation along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convet W2B FulfillmentReversal csv to json, Update data and convert json to csv
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

Scenario: Ambiguous W2B FulfillmentReversal settlement approval along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Approve the Initiated Ambiguous bulk and verify success message

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

Scenario: Ambiguous W2B PaymentReversal settlement Initiation along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Payment Reversal operation name
And Click on Download template
And Convet W2B PaymentReversal csv to json, Update data and convert json to csv
Then Update Payment Reversal template and verify Success message


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

Scenario: Ambiguous W2B PaymentReversal settlement Approval along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated Payment reversal
Then Reject the Ambiguous Payment Reversal
