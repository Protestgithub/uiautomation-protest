Feature: Business admin and subscriber Teardown



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
    Scenario:TC_268 To verify that SystemAdmin is able to Delete Business Administrator
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of Business Admin in Search
        When User Click on eye button
        And Click on delete
        When Navigate to My Activity and Apply required filters1
        And Assert Created Business Admin Name and delete the same user

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    @Smokeprerequisite
    Scenario:TC_269 To verify that System admin Checker can approve Delete request of System admin
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for BA
        And User click on approve delete request
    #Then Verify Sucess Message of Delete


    # Author:
    # Last Updated:
    # Comments    :
    # Test Case_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @Smokeprerequisite @TearDown 
    Scenario:TC_270 To verify that SystemAdmin is able to Delete Subscriber
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of subscriber in Search
        When User Click on eye button
        And Click on delete
        When Navigate to My Activity and Apply required filters1
        And Assert Created Subscriber Name and delete the same user
        Then Logout

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_271 To verify that System admin Checker can approve Delete request of System admin
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for Subscriber
        And User click on approve delete request

