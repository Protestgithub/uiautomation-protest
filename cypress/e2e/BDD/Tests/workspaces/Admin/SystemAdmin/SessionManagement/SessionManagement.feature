Feature: Session Management


    #SESSION MANAGEMENT
    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : PRE-REQUISITE
    #
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_252 Login as Subscriber
        Given Login into Mobiquity Portal as Subscriber
        And Change Password
        And Login into Mobiquity Portal as Subscriber1

    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_253 Login as Subscriber
        Given Login into Mobiquity Portal as Subscriber
        And Change Password
        And x.4 Login into Mobiquity Portal as Subscriber1


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_122
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_254 To verify that Master Admin/Network Admin can delete all the session details of a selected user successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to SessionManagement
        And Click On All Session and Enter Number to search
        Then Delete Devices


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_120
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_255 To verify that Master Admin/Network Admin can check details of all his own session through session management .
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to SessionManagement
        Then Click On My Sessions


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_121
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_256 To verify that Master Admin/Network Admin can check other user's session details successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to SessionManagement
        And Click On All Session and Enter Number to search


