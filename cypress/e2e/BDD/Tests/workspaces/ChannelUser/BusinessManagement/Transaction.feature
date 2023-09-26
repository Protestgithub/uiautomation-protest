Feature: Business to Business Transfer

    # Author: Prerna
    # Last Updated:
    # Comments

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_159 Pre-requisite to verify Wallet Payment history for Channel User Coporate
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details for Allocation for Distributer
        Then Click on allocation and Submit
        And Click on MyActivity, filter Owner To Channel and get Creation on time


    ############################################# Prerna ######################################################
    # Author: Prerna
    # Last Updated:

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_160 Pre-requisite To verify that System admin checker is able to approve the O2C allocation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes
        Then Confirm the Success Message for O2C Approval1

# Author:Niroop H N
# Last Updated:
# Comments
# Test Case_ID :
#
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
 
Scenario:TC_641 To Verify that valid user  is able to perform Business to Business  transfer Transaction.By giving the amount 10.01
Given Login into Mobiquity Portal as Channel User1
And Click on Channel to Channel Link and Enter Details for B2B


    # Author: Prerna
    # Last Updated:
    # Comments

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_159 Pre-requisite to verify Wallet Payment history for Channel User Coporate
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details for Allocation for Corporate User
        Then Click on allocation and Submit
        And Click on MyActivity, filter Owner To Channel and get Creation on time


    ############################################# Prerna ######################################################
    # Author: Prerna
    # Last Updated:

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_160 Pre-requisite To verify that System admin checker is able to approve the O2C allocation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes
        Then Confirm the Success Message for O2C Approval1



        
    # Author: Sudheer Baraker
    # Last Updated:
    # Comments
    # Test Case_ID : TC_130_Business admin
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
    Scenario:TC_72 Pre-requisite To verify that Channel User is able to transfer wallet to bank
        Given Login with corporate user credential
        When Navigate to Transfer to Bank
        And Enter all the information for Bank to Wallet transfer
        Then Click on Transfer Button