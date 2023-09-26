Feature: 1Subscriber Teardown

    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_297 To verify that SystemAdmin is able to delete suspended Subscriber
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of Subscriber for suspension in Search
        When User Click on eye button
        And Click on delete
        #And verify user is deleted
        When Navigate to My Activity and Apply required filters1
        And Assert Created SubRegistration Mobile Number and Write Created on time


    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_298 To verify the approval of Subscriber for Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for subRegistration
        And User click on approve delete request
#Then Verify Sucess Message of Delete
