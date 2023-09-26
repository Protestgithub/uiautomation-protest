Feature: Card to wallet Reversal along with Commission and Service

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test


Scenario:To verify system admin user able to do Card to Wallet Transactions
Given Login into Consumer Portal
When Click on Add money button
And Enter Amount and Select Card and Click on Proceed
And Get NetPayable,ServiceCharge,Commision and tax
Then Enter C2W Pin and verify
And Get C2W TransactionId
Given Login into Consumer Portal
Then Get Wallet Balance


# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test

Scenario: To Verify System Admin user should be able to Initiate C2W Transaction reversal. Verify the Order should be in CANCELLATION_INITIATED state and Status will be in Pending state.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search C2W transaction using TransactionId1
Then Initiate W2B reverse transaction to Commission and ServiceCharge Reversal
Then Navigate to MyActivity and get Transaction initiated time

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test


Scenario:To verify system admin user able to do Approval of C2W Reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test

Scenario:To verify system admin user able to do Ambiguous C2W PaymentReversal settlement Initiation
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Payment Reversal operation name
And Click on Download template
And Convet C2W PaymentReversal csv to json, Update data and convert json to csv
Then Update Payment Reversal template and verify Success message

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test

Scenario:To verify system admin user able to do Ambiguous C2W PaymentReversal settlement approval

Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated Payment reversal
Then Approve the Initiated Ambiguous bulk and verify success message

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@test


Scenario: To verify Transaction reverted
Given Login into Consumer Portal
Then Verifying Transaction Reversal