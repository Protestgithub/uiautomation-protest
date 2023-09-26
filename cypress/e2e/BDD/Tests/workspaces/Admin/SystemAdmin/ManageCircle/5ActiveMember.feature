Feature: Active member validations


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_018
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: On active member section shows the invite member button, search bar for search by name/mobile number, list of active members is shown <name> <mobile number> <member types(chairperson, secretary, members)> <total deposited> <total withdrawn> <action>.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number
        And View the Circle details and click on member tab
        And Verify the active user details

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_019
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: In active members, show only the active members list.
         Then Verify the active member list




    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_020
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario:Verify the action section, On the list of active members click on view more icon shows more details of member :<Appointed by> <Appointed on>.
        Then Verify on action section to view more details


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_021
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario:Verify In the active section search a mobile number which is inactive or not registered with mobiquity, in search results showing �nothing�.
        Then Click Invite member and search with Inactive mobile number

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_022
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify Invite member add functionality
        Then Verify the add functionality


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_023
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify admin is able to add multiple members 
        Then Add multiple members


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_024
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Verify Remove search member from invite member table
        And Click Invite member and search the mobile number
        Then Verify the remove functionality



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_025
    # TestCase_ID :
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Verify In the active member section, click on the close button, it will back to the manage circle page.
        Then Verify the cancel functionality