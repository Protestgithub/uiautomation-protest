Feature: Business User Resumption

    # Author: Kalyani M
    # Last Updated:
    # Comments   : Business user Resumption
    # Test Case_ID : TC_61
    #

    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_125 To verify that System admin is able to  Resume the details of searched user
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number and KYC number in search for suspension
        And Resume the user by giving the comment
        Then Verify the user resume Confirmation message
        And Navigate to My Activity and Apply Modified User filters
        And Assert Buissness User Mobile Number for Suspension and Write Created on time


    # Author: Kalyani M
    # Last Updated:
    # Comments  : Approval
    # Test Case_ID : TC_62
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_126 System Admin/Business Admin can approve resumption initiate of an suspended businsess user.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Suspended submitted user data
        And Approve the Users
        Then Verify the user Resumed approval message

    # Author: Kalyani M
    # Last Updated:
    # Comments  : Approval
    # Test Case_ID : TC_62
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

        
Scenario:Asserting the Resumed business user login 
Given Login into Mobiquity Portal as Business admin Users1

    # Author: Kalyani M
    # Last Updated:
    # Comments : Business User Suspension
    # Test Case_ID : TC_59,TC_65
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags

    Scenario:TC_127 To Verify that System Admin is able to initiate suspension of businsess user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon
        And  write comments to Suspend user
        And  click on yes
        Then Verify the user resume Confirmation message
        And Navigate to My Activity and Apply Modified User filters
        And Assert Buissness User Mobile Number for Suspension and Write Created on time


    # Author: Kalyani M
    # Last Updated:
    # Comments  :Approval
    # Test Case_ID : TC_60
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_128 To verify that SystemAdmin approve initiated suspended businsess user.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Suspended submitted user data
        And Approve the Users
        Then Verify the user Resumed approval message
