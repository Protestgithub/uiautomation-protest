Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin

    ########################################### Stock Management ####################################################

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test
    
    Scenario:TC_185,TC_SMOKE5 To verify that System admin can set the Stock Limit.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock Limit
        And Enter the value for Approval Limit 1
        Then Click on Submit button for Stock Limit

    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_75
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
   @x.04Smoke
    # test case tags
    @test

    Scenario:TC_186 TC_SMOKEe32 To verify that System admin can initiate the stock successfully
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock initiation
        And Select MFS provider and Enter Reference number and Amount
        Then click on Submit and Confirm button

    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_76
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
   @x.04Smoke
    # test case tags
    @test

    Scenario:TC_187  TC_SMOKEe33 To verify that System admin can successfully approve the stock at level>>1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Stock Management and Click on Stock Approval 1
        And Click on Submit Button
        Then Click on Approve button


    # Author: Narendra
    # Last Updated: 6/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_77
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test

    Scenario:TC_188  TC_SMOKE33 To verify that System admin can successfully approve the stock at level 2.
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to Stock Management and Click on Stock Approval 2
        Then Click on Submit and Approve the Stock at level 2
        And Navigate to Stock Management and Click on Stock initiation
        And Select MFS provider and Enter Reference number and Amount
        Then Assert Credit Stock

# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1609
    #TAGS
    #version tags
    @x.04
    # suite tags
   @UAT
    # test case tags
    @test
Scenario:TC_469 To verify the functionality of 'Back' button in stock initiation screen
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Stock Management and Click on Stock initiation
And Select MFS provider and Enter Reference number and Amount
Then Click on Back Button