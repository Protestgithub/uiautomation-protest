Feature: 2Business Admin Teardown

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
    Scenario:TC_278 To Verify that System Admin is able to Delete suspended BusinessUser
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number4 or KYC number of Business user created for suspension in Search
        When User Click on eye button
        And Click on delete
        #Then Verify Sucess Message of BusinessUser Deletion
        When Navigate to My Activity and Apply required filters1
        And Assert Created BusinessReg Suspended Mobile Number and Write Created on time

    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID :
    @Smokeprerequisite
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    Scenario:TC_279 To verify that System admin Checker is able to approve suspension Business user for Deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for BuisnessRegSuspension
        And User click on approve delete request
#Then Verify Sucess Message of Delete