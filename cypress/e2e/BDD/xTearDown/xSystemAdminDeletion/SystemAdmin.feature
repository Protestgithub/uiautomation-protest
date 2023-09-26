Feature: System admin Teardown



    # Author:
    # Last Updated:
    # Comments    :
    # Test Case_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_305 To verify that Master user is able Delete the System admin
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number1 or KYC number of Business Admin in Search
        When User Click on eye button
        And Click on delete

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_306 To verify that Master user can approve Delete request of System admin
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
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
    @Smokeprerequisite
    # test case tags
    @TearDown
    
    Scenario:TC_307 To verify that Master user is able Delete the System admin2
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number2 or KYC number of Business Admin in Search
        When User Click on eye button
        And Click on delete
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    
    Scenario:TC_308 To verify that Master user can approve Delete request of System admin
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
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
    @Smokeprerequisite
    # test case tags
    @TearDown
    
    Scenario:TC_309 To verify that Master user is able Delete the System admin3
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number3 or KYC number of Business Admin in Search
        When User Click on eye button
        And Click on delete

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    
    Scenario:TC_310 To verify that Master user can approve Delete request of System admin
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
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
    @TearDown
    
    Scenario:TC_309 To verify that Master user is able Delete the System admin5
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number5 or KYC number of Business Admin in Search
        When User Click on eye button
        And Click on delete


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    
    Scenario:TC_310 To verify that Master user can approve Delete request of System admin
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And User click on approve delete request
#Then Verify Sucess Message of Delete