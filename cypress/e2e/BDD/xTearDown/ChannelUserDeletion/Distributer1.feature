Feature: 1Business(Telecooperator created,business user) Teardown

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
    @Smokeprerequisite
    Scenario:TC_274 To verify that the System admin is able to Delete telco operator
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of telco operator for unregistered in Search
        When User Click on eye button
        And Click on delete
        When Navigate to My Activity and Apply required filters1
        And Assert Created telco operator Mobile Number and Write Created on time

    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    @Smokeprerequisite
    Scenario:TC_275 To verify the approval of telco operator Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for BU
        And User click on approve delete request



    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    Scenario:TC_276 To verify that System admin is able to Delete businsess user for unregistered Mobile
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of Business User for unregistered for in Search
        When User Click on eye button
        And Click on delete
        #And verify user is deleted
        When Navigate to My Activity and Apply required filters1
        And Assert Created Business User Mobile Number and Write Created on time
    


    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    Scenario:TC_277 To verify the approval of Business User Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for BU
        And User click on approve delete request