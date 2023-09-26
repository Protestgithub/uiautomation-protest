Feature: System Admin Modification

    # # Author: Kalyani M
    # # Last Updated:
    # # Comments    :
    # # Test Case_ID : TC_44_sysadmin
    # #TAGS
    # #version tags
    # @x.06 @x.04
    # # suite tags
    # 
    # # test case tags
    # @test


    # Scenario: To verify that master admin can initiate modification request of an System admin.
    #     Given Login into Mobiquity Portal as Super admin Maker
    #     When Navigate to User Management and Click on Manage Users
    #     And Enter Mobile number or KYC number of System admin in Search
    #     When User Click on eye button
    #     And Click on edit
    #     And Enter all required Fields
    #     And Enter all Profile Details
    #     Then Confirmation message displayed
    # #Then Verify Sucess Message

    # Author: Kalyani M
    # Last Updated:
    # Comments    :
    # Test Case_ID : TC_44_sysadmin
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_94 To verify that master admin can initiate modification request of an System admin.
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of System admin in Search
        When User Click on eye button
        And Click on edit
        And x.7 Enter all required Fields
        And Enter all Profile Details Modification
        Then Confirmation message displayed1
    #Then Verify Sucess Message

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_95 To verify that master admin can approve modification request of an System admin.
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved