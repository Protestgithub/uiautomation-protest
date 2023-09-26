Feature: 3Business Admin Teardown

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
    Scenario:TC_280 To verify that System admin is able to Delete businsess user
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of Business Admin in Search
        And User Click on eye button
        And Click on delete
        #And Verify Sucess Message
        When Navigate to My Activity and Apply required filters1
        And Assert Created Business Admin Mobile Number and Write Created on time

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
    Scenario:TC_281 To verify the approval of Business Admin Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user BU
        And User click on approve delete request
#Then Verify Sucess Message of Delete