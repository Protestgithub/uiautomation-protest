Feature: Notification sent on modifying Business User


    #Author: Arpitha C
    # Last Updated: 25/04/2022
    # Comments : refered here is narendra
    # Scenario_ID : TC_55
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_116 To verify that after successful creation of the businsess user, notification should be sent to the user
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search with the Business Mobile Number
        And User Click on eye button
        And Edit all the required business user details for Distributer
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Created Buissness User2 Mobile Number and Write Created on time

    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_117 To verify notification sent on approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness User submitted user data
        And Approve the Users and Check for SMS Notification sent to Business User