Feature:  Manage Circle Invited Members



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_026
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Verify the Invited section in manage circle module <filters> <search bar(search by name,mobile number)> <list of invited members>.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number
        And View the Circle details and click on member tab
        Then Verify Invited Members page

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_027
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: In the invited list of members, shows the details of member : Name, Mobile number, Status(pending, expired), Invited by, Invited on 
        Then Verify Invited Members details



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_028
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Click on the filter icon it shows <invited by(Admin, others)> <invited on (start date, end date)> <clear> and <apply> button.
        Then Verify filter options


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_029
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Click to open the filter and choose the admin with start and end date, then click on apply, the filtered list is shown in the invited section.
        Then Apply the filters to view invited members






