Feature: Subscriber Creation for Churn

    This feature includes registering, and Approval of Subscriber
    Users by System Admin

    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # # TC_68
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite
    # test case tags
    @test
    @Smokeprerequisite
    Scenario:TC_54 To verify that valid SystemAdmin is able to initiate Subscriber creation for churn Initiation.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Enter all the required subscriber details for Churn Initiation
        And Enter KYC Details
        And Enter Subscriber Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Subscriber Mobile Number and Write Created on time for Churn Management


    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite
    # test case tags
    @test
    @Smokeprerequisite
    Scenario:TC_55 To verify that another System Admin is able to approve the initiated Subscriber creation for Churn Initiation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data for Churn
        And Approve the Users for Admin Creation
        Then User status is approved

    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite
    # test case tags
    @test
    @Smokeprerequisite
    Scenario:TC_56 To verify that valid SystemAdmin is able to initiate Subscriber creation for Bulk upload
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Enter all the required subscriber details for bulk upload
        And Enter KYC Details
        And Enter Subscriber Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Subscriber Mobile Number for Bulk and Write Created on time


    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # #
    # #@test

    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite
    # test case tags
    @test
    @Smokeprerequisite
    Scenario:TC_56 To verify that another System Admin/businsess User is able to approve the initiated Subscriber creation for Churn bulk Upoad
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data for Churn
        And Approve the Users for Admin Creation
        Then User status is approved
