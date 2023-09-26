Feature: Electric Bill Payment Reversal


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

Scenario: To verify user shall be able to perform Electricity BillPayment 
Given Login into Consumer Portal
When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details
And Enter Pin and Verify the electric bill transaction
Then Get BillPayment TransactionId1
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

Scenario: To Verify System Admin user should be able to Initiate ElectricityBill PaymentReversal Transaction reversal.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search Electric bill payment transaction using TransactionId1
Then Get ElecticBill OrderId
Then Initiate B2W reverse transaction
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
And Verify Transaction reversal Initiated state
Then Navigate to MyActivity and get Bill PaymentTransaction initiated time

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


Scenario: To verify system admin user is able to Approve the initiated ElectricityBill PaymentReversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on BillPayment Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
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

Scenario: To verify System admin user is able to perform Ambiguous ElectricityBill FulfillmentReversal settlement Initiation
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convert BillPayment FulfillmentReversal csv to json, Update data and convert json to csv
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

Scenario: To Verify system admin user able to perform Ambiguous ElectricityBill FulfillmentReversal settlement approval

Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Approve the Initiated Ambiguous bulk and verify success message
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
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


Scenario: To verify BillPayment Transaction reverted
Given Login into Consumer Portal
Then Verifying Transaction Reversal