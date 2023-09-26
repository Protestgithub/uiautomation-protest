Feature: Business user creation for Suspension

    # Author: Kalyani M
    # Last Updated:
    # Comments : Business User Suspension
    # Test Case_ID :
    # TC_Prerequistite for suspension/Resumption
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test


    Scenario:TC_44 To Verify that System Admin is able to initiate suspension of businsess user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role
        And Enter all the required business user details for suspension
        And Save BusinessUser LoginID for Suspension
        And Enter Channel User KYC Details
        And Enter ChannelUser Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Buissness User Mobile Number for Suspension and Write Created on time

    # Author: Kalyani M
    # Last Updated:
    # Comments : Business User Suspension
    # Test Case_ID :
    # TC_Prerequistite for suspension/Resumption


    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_45 To verify that another System Admin is able to approve the initiated Business user creation for Suspension.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Suspended submitted user data for Suspension
        And Approve the Users for Admin Creation
        Then User status is approved