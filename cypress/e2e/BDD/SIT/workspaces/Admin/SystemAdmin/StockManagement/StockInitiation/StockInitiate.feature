Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin


    # Author: Arpitha
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_75
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    @SIT
    Scenario:TC_182 To verify that maximum values are enetered in stok initiation
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Enter all the Stock Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Creation and get Creation on time

    # Author: Arpitha
    # Last Updated: 5/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    @SIT
    Scenario:TC_1102 To verify that minimum values are enetered in stok initiation
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        And Enter all the Stock Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Creation and get Creation on time



    # Author: Arpitha
    # Last Updated: 5/05/2023
    # Comments
    # Scenario_ID :
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1098 To verify that System admin can successfully approve the minium value stock
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

    # Author: Arpitha
    # Last Updated: 6/05/2023
    # Comments
    # Scenario_ID :
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1344 To verify that System admin can successfully approve the minium value stock level 2
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And Apply Stock Creation filter
        And User click on submitted user data
        And Approve the Users for Admin Creation
        Then Confirm the Success Message for Stock Initiation