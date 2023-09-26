Feature: Manage circle Rejected members validations



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_030
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario: Verify the Rejected section in the manage circle module <filters> <search bar> <list of rejected members>.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number
        And View the Circle details and click on member tab
        And Click on Rejected members
        Then Verify the rejected member details

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_031
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario: Click on the filter icon it shows <start date> <end date> <clear and apply> button, enter the start date and end date then click on apply, shows the filtered list.
        And Click on Rejected members
        Then Verify Rejected filter details



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_032
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Searched by mobile number/name , shows the related number rejected members. enter the invalid circle code and hit the search icon it shows no result. Search with blank bar , no search result is shown.
        And Click on Rejected members
        Then Enter invalid mobile details and verify no results message
    

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_033
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:In the rejected list of members shows 5 rows <Name> <Mobile number> <Remarks> <Rejected by> <Rejected on>, remarks is non mandatory field if it is not field then it is blanked.
        Then Verify Rejected table headers


