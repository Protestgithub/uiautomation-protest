Feature:  Subscriber Creation for Suspension

    This feature includes registering and Approval of Subscriber and Businsess
    Users by System Admin for Suspension

    # Author: Chetan.S
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_Prerequistite for suspension/Resumption


    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_61 To verify that valid SystemAdmin is able to initiate Subscriber creation for suspension and Resumption
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Enter all the required subscriber details for suspension and Resumption
        And Enter KYC Details
        And Enter Subscriber Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Suspension creation Subscriber Mobile Number and Write Created on time

    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_62 To verify that another System Admin is able to approve the initiated Subscriber creation for Suspension
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved


