Feature: Subscriber Creation for Banking Activation

    This feature includes registering, and Approval of Subscriber Users by System Admin

    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # # TC_68
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_52 To verify that valid SystemAdmin Maker is able to initiate Subscriber creation for BankingActivation
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Enter all the required subscriber details for Banking Channel Activation
        And Enter KYC Details
        And Enter Subscriber Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Subscriber Mobile Number and Write Created on time for BankingActivation



    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # # TC_69
    # #@test

    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_53 To verify that another SystemAdmin Checker is able to approve the initiated Subscriber creation.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved
