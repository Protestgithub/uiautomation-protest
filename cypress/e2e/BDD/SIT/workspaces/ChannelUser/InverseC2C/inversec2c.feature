Feature:Pull From Business

# Author: Arpitha
# Last Updated: 25-04-2022
# Comments 
# Scenario_ID :
# TC_

    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
    @SIT
    #prerequisite
Scenario:TC_581 To verify that valid System admin is able to initiate Merchant businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as Merchant
And Enter all the required business user details Creation for inverse c2c
And Enter Channel User KYC Details
And Enter Hierarchy Details
And Enter Merchant Profile Details
Then Confirmation message displayed
#When Navigate to My Activity and Apply required filters
#Then Assert Created Buissness User Mobile Number and Write Created on time for Merchant



    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @prerequisite
@SIT
#prerequisite
Scenario:TC_582 Merchant Approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness User submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
@SIT
#prerequisite
Scenario:TC_583 Login as Buissness User with Merchant Credentials
Given Login into Mobiquity Portal as Merchant for inverse C2C


    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1337

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Channel Use (Debiting Entity) is not able to transfer money  if it doesn't have sufficient balance in wallet.
          Given Log in with Merchant user credential for inverse C2C
          When Click On Inverse C2C Transfer
          And Enter all details for Inverse C2C transactions
          #Then Verify Success message for Inverse C2C transaction    
    
    
    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1337

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To Verify that head merchant is not able to pull money from its sub account if Requested amount is not in multiple of defined value
          Given Log in with Merchant user credential for inverse C2C
          When Click On Inverse C2C Transfer
          And Enter amount for Inverse C2C transaction
          #Then Verify Success message for Inverse C2C transaction  

    