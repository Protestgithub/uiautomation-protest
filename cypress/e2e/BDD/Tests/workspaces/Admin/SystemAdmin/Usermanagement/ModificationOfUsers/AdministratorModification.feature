Feature: BA and CCA Modification and Approval

    This feature includes registering, Modifying and Approval of Business Admin and
    Customer Support Admin Users by System Admin

    # Author: Automation Tester 1
    # Last Updated: 21/03/2022
    # Comments
    # Scenario_ID : S_03
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_102 System Admin is able to initiate modification request of Business Admin
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search Business Admin
        When User Click on eye button
        And System Admin is able to edit details of the Adminstrator user
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        And Assert Created Business Admin Mobile Number and Write Created on time for Business Administrator modification

    # Author:
    # Last Updated:
    # Comments
    # Scenario_ID : S_04
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_103 System Admin is able to approve of modification request of Business Admin
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness Admin submitted user data
        And Approve the Users
        Then Approve the edit details

    # Author: Narendra
    # Last Updated: 21/04/2022
    # Comments
    # Scenario_ID : S_45
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_104 System admin should be able to Initite modification searching with all values (Mobile,Email and Login)
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search with CCA EmailID
        When User Click on eye button
        And System Admin is able to edit details of the Adminstrator user
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Created Customer care Admin Mobile Number and Write Created on time for modification

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_105 To verify approval of initiated modification request
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness Admin submitted user data
        And Approve the Users
        Then Approve the edit details


    # Author: Narendra
    # Last Updated: 21/04/2022
    # Comments
    # Scenario_ID : S_49
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_106 To verify that System admin can approve modification request of an existing Business Admin/Customer Care Admin
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search with CCA Mobile Number
        When User Click on eye button
        And System Admin is able to edit details of the Adminstrator user
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Created Customer care Admin Mobile Number and Write Created on time for modification


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_107 To verify approval of initiated modification request
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness Admin submitted user data
        And Approve the Users
        Then Approve the edit details
