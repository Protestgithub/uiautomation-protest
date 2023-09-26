Feature: Bill payment reversal with instrument type subscriberMobileBankingActivation

    # Author: Narendra
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    # test case tags
    @test
    ##########  Bill payment  ###########
    Scenario: To verify that System admin is able to Delete Service Charge for Bill Payment
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Bill Payment
        And Check if the rule exist and delete the rule
    
    # Author: Narendra
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    # test case tags
    @test
    Scenario: To verify that System admin should be able to add initiate service charge for Bill Payment through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Bill Payment
        And Enter all details and add service charge
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created Card to wallet service charge

    # Author: Narendra
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    # test case tags
    @test
    ##########  Bill Payment  ###########
    Scenario: To verify that System admin is able to Delete Commission for Bill Payment
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Bill Payment
        And Check if the rule exist and delete the rule


    # Author: Narendra
    # Last Updated: 
    # Comments : 
    # Scenario_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    # test case tags
    @test
    Scenario: To verify that user should also be able to define commission rule for Bill Payment.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Bill Payment
        And Enter all the details and add commission
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created card to wallet Commission rule

###########################################################################################################

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
Then Select Board Name and fill details and select bank
And Enter Pin and Verify the electric bill transaction with bank
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
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
Then Initiate reverse transaction from order details
And Click on Wallet Payment History
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
Then Verify Transaction reversal Initiated state
And Navigate to MyActivity and get Bill PaymentTransaction initiated time

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

Scenario:To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Initiation
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Payment Reversal operation name
And Click on Download template
And Convet BillPayment PaymentReversal csv to json, Update data and convert json to csv
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

Scenario:To verify system admin user able to do Ambiguous W2B PaymentReversal settlement approval

Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated Payment reversal
Then Approve the Initiated Ambiguous bulk and verify success message
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Bill pay Transaction Reversal order
Then Verify Transaction reversal state

