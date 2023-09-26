Feature: Wallet to Bank Transaction reversal with Service Charge Reversal

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

Scenario: To verify system admin user able to do Wallet to Bank Transaction for ServiceCharge Reversal
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount and click on Proceed
And Enter PIN and click on Verify
Then Get W2B TransactionId3
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

Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal along with Service Charge reversal. Verify the Order is in CANCELLATION_INITIATED state and Status will be in Pending state.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search W2B transaction using TransactionId3
And Get W2B OrderId
Then Initiate W2B reverse transaction and Reverse Service charge
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

Scenario: Approval of W2B Transaction reversal along with Service Charge reversal.
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
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: Ambiguous W2B FulfillmentReversal settlement Initiation along with Service Charge reversal.
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

Scenario: Ambiguous W2B FulfillmentReversal settlement Approval  along with Service Charge reversal.
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

Scenario: Ambiguous W2B PaymentReversal settlement Initiation along with Service Charge reversal.
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

Scenario: Ambiguous W2B PaymentReversal settlement approval along with Service Charge reversal.
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
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To verify Transaction reverted with ServiceCharge
Given Login into Consumer Portal
And Verifying ServiceCharge and Tax Reversal
