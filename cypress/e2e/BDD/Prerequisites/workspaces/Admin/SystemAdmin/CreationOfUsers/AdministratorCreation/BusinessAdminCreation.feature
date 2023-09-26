Feature: Business Admin Creation

    This feature includes registering, Modifying and Approval of Business Admin
    Users by System Admin

    # # Author: Automation Tester 1
    # # Last Updated: 17/03/2022
    # # Comments :
    # # Scenario_ID : S_01
    # #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

    Scenario: TC_32  TC_Smok29 To verify System Admin is able to add Business administrator
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Adminstrator and click on BusinessAdmin
        And Enter all the required details for Business Admin
        And Save Business Admin LoginID
        And Enter Business Admin Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        And Assert Created Business Admin Mobile Number and Write Created on time for Business Administrator





    # # # Author: Automation Tester 2
    # # # Last Updated: 18/03/2022
    # # # Comments
    # # # Scenario_ID : S_02
    # # #
    #  #@test

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario: TC_33 TC_Smoke59 Approval of registered Business Administrator
        Given Login into Mobiquity Portal as System admin Checker1
        Then Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness Admin submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved

