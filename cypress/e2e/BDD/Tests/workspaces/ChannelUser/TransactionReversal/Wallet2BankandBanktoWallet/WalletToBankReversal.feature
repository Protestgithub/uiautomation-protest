Feature: Wallet to Bank Transaction Reversal


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
    ##########  SVA to Bank Transfer  ###########
    Scenario: To verify that System admin is able to Delete Service Charge for SVA to Bank Transfer
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on SVA to Bank Transfer
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
    Scenario: To verify that System admin should be able to add initiate service charge for SVA to Bank Transfer through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on SVA to Bank Transfer
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
    ##########  SVA to Bank Transfer  ###########
    Scenario: To verify that System admin is able to Delete Commission for SVA to Bank Transfer
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on SVA to Bank Transfer
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
    Scenario: To verify that user should also be able to define commission rule for SVA to Bank Transfer.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on SVA to Bank Transfer
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

Scenario: To verify user able to do Wallet to Bank Transactions
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount and click on Proceed
And Enter PIN and click on Verify
Then Get W2B TransactionId1
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


Scenario: To Verify System Admin user should be able to Initiate W2B Transaction reversal. Verify the Order is in CANCELLATION_INITIATED state and Status will be in Pending state.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search W2B transaction using TransactionId
Then Get W2B OrderId
Then Initiate W2B reverse transaction
Then Navigate to MyActivity and get Transaction initiated time


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

Scenario: Approval of W2B Transaction Reversal
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

Scenario: Ambiguous W2B FulfillmentReversal settlement Initiation
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

Scenario: Ambiguous W2B FulfillmentReversal settlement Approval
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

Scenario: Ambiguous W2B PaymentReversal settlement Initiation
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

Scenario: Ambiguous W2B PaymentReversal settlement Approval
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


Scenario: To verify Transaction reverted
Given Login into Consumer Portal
Then Verifying Transaction Reversal