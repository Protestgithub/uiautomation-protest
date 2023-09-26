Feature: Bank to Wallet Reversal

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
    ##########  Bank to SVA Transfer  ###########
    Scenario: To verify that System admin is able to Delete Service Charge for Bank to SVA Transfer
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Bank to SVA Transfer
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
    Scenario: To verify that System admin should be able to add initiate service charge for Bank to SVA Transfer through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Bank to SVA Transfer
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
    ##########  Bank to SVA Transfer   ###########
    Scenario: To verify that System admin is able to Delete Commission for Bank to SVA Transfer
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Bank to SVA Transfer
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
    Scenario: To verify that user should also be able to define commission rule for Bank to SVA Transfer.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Bank to SVA Transfer
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


Scenario:To verify system admin user able to do Bank to Wallet Transactions
Given Login into Consumer Portal
When Click on Add money button
And Enter Amount and Select bank and Click on Proceed
And Get NetPayable,ServiceCharge,Commision and tax
Then Enter Pin and verify
And Get B2W TransactionId
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
And Search B2W transaction using TransactionId1
Then Get B2W OrderId
Then Initiate B2W reverse transaction
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


Scenario:To verify system admin user able to do Approval of B2W Reversal
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

Scenario:To verify system admin user able to do Ambiguous W2B PaymentReversal settlement Initiation
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

Scenario:To verify system admin user able to do Ambiguous W2B PaymentReversal settlement approval

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