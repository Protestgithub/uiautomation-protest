Feature: Notification sent on modifying Administrator User


    # Author: Narendra
    # Last Updated: 22/04/2022
    # Comments
    # Scenario_ID : S_46
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_114 To verify that the Proper SMS Notification & E>>mail should be sent to users after addition/modification/deletion in system. (If configured)
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search Business Admin
        When User Click on eye button
        And System Admin is able to edit details of the Adminstrator user
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        And Assert Created Business Admin Mobile Number and Write Created on time for Business Administrator modification

    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_115 To verify notification is sent on approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness Admin submitted user data
        And Approve the Users and Check for SMS Notification sent to Administrator user
