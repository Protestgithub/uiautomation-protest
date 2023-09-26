Feature: Subscriber User Resumption

    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_74

    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_129 To verify that the System Admin is able to resume a suspend subscriber successfully through web.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And enter user mobile number and search the SuspendResume user
        And Resume the user by giving the comment
        Then Verify the user resume Confirmation message
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Suspension of Subscriber Mobile Number and Write Created on time


    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_74

    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_130 To verify that the System Admin is able to approve the resumed user.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data
        And Approve the Users
        Then Verify the user Resumed approval message
