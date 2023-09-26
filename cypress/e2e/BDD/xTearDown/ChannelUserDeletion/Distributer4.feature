Feature: 2User Business user Teardown



    # Author:
    # Last Updated:
    # Comments    :
    # Test Case_ID :


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    @Smokeprerequisite
    Scenario:TC_282 To verify that System admin is able to Delete businsess user
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of Business user in Search
        When User Click on eye button
        And Click on delete
        When Navigate to My Activity and Apply required filters1
        And Assert Created Buissness User Mobile Number and Write Created on time for O2C


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    @Smokeprerequisite
    Scenario:TC_283 To verify that System admin Checker is able to approve Delete request of businsess user
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for O2C
        And User click on approve delete request
#Then Verify Sucess Message of Delete