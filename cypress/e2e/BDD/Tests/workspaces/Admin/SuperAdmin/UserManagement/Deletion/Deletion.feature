Feature: System Admin Deletion

    # # Author: Kalyani M
    # # Last Updated:
    # # Comments    :
    # # Test Case_ID : TC_47_sysadmin
    # #TAGS
    # #version tags
    # @x.04 @x.06
    # # suite tags
    # 
    # # test case tags
    # @test

    # Scenario:TC_89 Creation of system admin for deletion scenario.
    #     Given Login into Mobiquity Portal as Super admin Maker
    #     When Navigate to User Management and click on register
    #     And Click On System Admin and select Single User
    #     And Enter all Maker required Fields for Maker
    #     And Save Mobile Number
    #     And Enter all Profile Details
    #     Then Confirmation message displayed


    # Author: Kalyani M
    # Last Updated:
    # Comments    :
    # Test Case_ID : TC_47_sysadmin
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @test

    Scenario:TC_90 Creation of system admin for deletion scenario.
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And Enter all Maker required Fields for Maker
        And Save Mobile Number
        And Enter all Profile Details
        Then Confirmation message displayed
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_91 Approval of creation request.
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_92 To verify master admin is able to initiate deletion request of system admin
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of System admin in Search
        When User Click on eye button
        And Click on delete
    #And Verify Sucess Message
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_93 To verify Master Admin checker is able to approve initiated deletion request
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And User click on approve delete request

