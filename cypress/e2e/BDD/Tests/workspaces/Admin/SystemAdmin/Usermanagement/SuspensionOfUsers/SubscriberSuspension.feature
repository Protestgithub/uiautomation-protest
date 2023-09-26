Feature: Subscriber Suspension

    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_73
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_123 To verify that the System Admin is able to suspend a subscriber successfully through web.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And enter user mobile number and search the SuspendResume user
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon
        And  write comments to Suspend user
        And  click on yes
        Then Verify the user resume Confirmation message
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Suspension of Subscriber Mobile Number and Write Created on time

    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_73
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_124 To verify that the System Admin is able to Approve the suspended user
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data
        And Approve the Users
        Then User status is Suspended

