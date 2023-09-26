Feature: Search Manage Circle


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_015
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Verify the action icon on managed circles, click on the action (icon) it shows <circle name> <status(active)> on the top of the circle details, members, appoint officials.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number        
        Then Verify circle details, members, appoint officials





    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_016
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: verify member details
        And View the Circle details and click on member tab
        Then Verify the member details




    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_017
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:  Verify the members section in manage circle module <Active> member section <Invited> member section <Rejected> member section <Removed/Left> member section.
        Then Verify the active member details
        Then Verify the invited member details
        Then Verify the rejected member details
        Then Verify the remove or left member details




