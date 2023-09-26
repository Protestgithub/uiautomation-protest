Feature: SecurityProfile

    # Author: Chetan.S
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TC_110
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_246 To verify that for each workspace there will be one default security profile
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Security and click to select security profile
        And Filter by slecting Default security profile
        Then Assert each workspace have one default Profile


    # Author: Chetan.S
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TC_111
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_247 Security profile should be associated with the user at the time of on-boarding
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on Subscriber
        Then Verify User registration have security profile