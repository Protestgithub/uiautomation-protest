Feature: Recharge others Transaction reversal without Commission and ServiceCharge

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
    ##########  Recharge-Others  ###########
    Scenario: To verify that System admin is able to Delete Service Charge for Recharge-Others
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Recharge-Others
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
    Scenario: To verify that System admin should be able to add initiate service charge for Recharge-Others through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Recharge-Others
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
    ##########  Recharge-Others  ###########
    Scenario: To verify that System admin is able to Delete Commission for Recharge-Others.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Recharge-Others
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
    Scenario: To verify that user should also be able to define commission rule for Recharge-Others.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on Recharge-Others
        And Enter all the details and add commission
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created card to wallet Commission rule

###########################################################################################################


# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify mobile recharge transaction for transaction correction reversal
Given Login into Consumer Portal
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
And Assert the transaction successfully page
Then Get Recharge TransactionId

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


Scenario: To Verify System Admin user should be able to Initiate Mobile Recharge Transaction reversal.
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Search Recharge transaction using TransactionId
And Get Recharge OrderId
Then Initiate B2W reverse transaction
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
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


Scenario: To Verify user able to Approve Mobile Recharge Transaction Reversal along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on Transaction reversal data
Then Approve the reversal transaction
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
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

Scenario: To verify system admin user able to perform Ambiguous Mobile Recharge FulfillmentReversal settlement Initiation along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Maker
When Click on Ambiguous Order Transaction >> Bulk settlement initiation
And Select Fulfillment Reversal operation name
And Click on Download template
And Convert MobileRecharge FulfillmentReversal csv to json, Update data and convert json to csv
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

Scenario: To verify system admin user able to perform Ambiguous Mobile Recharge FulfillmentReversal settlement approval along with Commission and Service charge reversal
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Ambiguous order and click on Bulk Approval
And click on initiated fulfillment reversal
Then Approve the Initiated Ambiguous bulk and verify success message
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on order details for customerbusiness users
And Search Recharge Reversal Transaction with OrderId
Then Verify Transaction reversal state
