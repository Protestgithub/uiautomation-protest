Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin


    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_75
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_182 To verify that System admin can initiate the stock successfully
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Enter all the Stock Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Creation and get Creation on time

    # Author: Narendra
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_76
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_183 To verify that System admin can successfully approve the stock at level>>1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

    # Author: Narendra
    # Last Updated: 6/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_77
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_184 To verify that System admin can successfully approve the stock at level 2.
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And Apply Stock Creation filter
        And User click on submitted user data
        And Approve the Users for Admin Creation
        Then Confirm the Success Message for Stock Initiation