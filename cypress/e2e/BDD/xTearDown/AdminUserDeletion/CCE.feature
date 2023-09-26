Feature: Customer Care Admin Teardown


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
    Scenario:TC_272 To verify that System admin is able to Delete Customer care Admin
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of Customer Care Admin in Search
        When User Click on eye button
        And Click on delete for CCA
        #Then verify user is deleted
        When Navigate to My Activity and Apply required filters1
        And Assert Created CCA Mobile Number and Write Created on time



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
    Scenario:TC_273 To verify the approval of Customer Care Admin Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for CCA
        And User click on approve delete request
#Then Verify Sucess Message of CCA Deletion