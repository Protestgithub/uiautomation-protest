Feature: Modification of Subscriber

    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_70
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_112 To verify that System Admin/businsess user is able to modify Subscriber successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        And User Click on eye button
        And System Admin is able to edit subscriber details
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Created Subscriber Mobile Number and Write Created on time to initiate Subscriber creation


    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_71
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_113 To verify that another System Admin/businsess User is able to approve the Modified Subscriber Data.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Subscriber submitted user data
        And Approve the Users
        Then Approve the edit details
