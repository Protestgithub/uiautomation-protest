Feature: Delete circle

    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_013
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario: On the circle details page, click on the delete circle ( icon ) , open a pop up message �Are you sure you want to delete this circle?� click on �No�. go back to the circle details page.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number        
        And Click on delete circle button
        Then click on No button and verify previous page

    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_014
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the �delete� circle in circle details(manage circle)