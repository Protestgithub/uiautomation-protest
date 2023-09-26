Feature: Bank to Wallet Transaction reversal with ServiceCharge and Commission Reversal

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


Scenario: To verify user is able to do Bank to Wallet Transactions for both ServiceCharge and Commission Reversal
Given Login into Consumer Portal
When Click on Add money button
And Enter Amount and Select bank and Click on Proceed
And Get NetPayable,ServiceCharge,Commision and tax
Then Enter Pin and verify
And Get B2W TransactionId4
Given Login into Consumer Portal
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


Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal along with Commission and Service charge reversal. Verify the Order is in CANCELLATION_INITIATED state and Status will be in Pending state.
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


Scenario: Approval of B2W Reversal along with Commission and Service charge reversal
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


Scenario: To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Initiate along with Commission and Service charge reversal
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

Scenario: To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Approval along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated Payment reversal
Then Approve the Initiated Ambiguous bulk and verify success message
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Transaction Reversal order
Then Verify Transaction reversal state

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


Scenario: To verify Transaction reverted with ServiceCharge,Commision and tax
Given Login into Consumer Portal
Then Verifying ServiceCharge,Commission and Tax Reversal