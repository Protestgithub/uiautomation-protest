Feature: Bank to wallet transaction reversal Rejection

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


Scenario: To verify user is able to do Bank to Wallet Transactions for Rejection
Given Login into Consumer Portal
When Click on Add money button
And Enter Amount and Select bank and Click on Proceed
And Get NetPayable,ServiceCharge,Commision and tax
And Enter Pin and verify
And Get B2W TransactionId4
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


Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal for Rejection
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search B2W transaction using TransactionId4
And Get B2W OrderId
Then Initiate W2B reverse transaction to Commission and ServiceCharge Reversal
And Click on order details for customerbusiness users
And Search Transaction Reversal order
And Verify Transaction reversal Initiated state
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


Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal for Rejection.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search B2W transaction using TransactionId4
And Get B2W OrderId
Then Initiate W2B reverse transaction to Commission and ServiceCharge Reversal
And Click on order details for customerbusiness users
And Search Transaction Reversal order
And Verify Transaction reversal Initiated state
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


Scenario: To Verify system admin user able to Approval of B2W Reversal for Rejection of Ambiguous Payment reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Transaction Reversal order
Then Verify B2W Transaction reversal Approved state

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


Scenario: To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Initiate for Rejection of Ambiguous Payment reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Payment Reversal operation name
And Click on Download template
And Convet B2W PaymentReversal csv to json, Update data and convert json to csv
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

Scenario: To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Approval for for Rejection of Ambiguous Payment reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated Payment reversal
Then Reject the Ambiguous Payment Reversal

