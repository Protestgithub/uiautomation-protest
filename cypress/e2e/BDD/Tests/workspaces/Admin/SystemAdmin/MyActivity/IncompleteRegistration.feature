Feature: System Admin My Activity



    # ####################################### My Activity ################################################################

    # Author: Narendra
    # Last Updated: 10/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_123
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_226 To verify that system user can manage user registration application, which are not approved like saved,submitted users and rejected users
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Adminstrator and click on Customer care Admin
        And Enter all the User details
        And Navigate to My Activity and Add the required filter
        Then Click on Expand and View Details button

    # Author: Narendra
    # Last Updated: 10/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_124
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_223 To verify that system user can view existing details of user's under saved filter whose registration initiation is incomplete
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to My Activity and Add the required filter
        Then Click on Expand and View Details button



    # Author: Narendra
    # Last Updated: 11/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_125
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_224 To verify that system user can Add/edit details of user's whose registration is incomplete
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to My Activity and Add the required filter
        And Click on Expand and Resume button
        And Enter all the required details of the user



    # Author: Narendra
    # Last Updated: 11/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_126
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_225 To verify that system user can Send for approval of user's whose registration is Incomplete
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to My Activity and Add the required filter
        And Click on Expand and Resume button
        And Enter all the required details of the user
        And Click the >> Submit Button
        Then Confirmation message is displayed

