Feature: Search Manage Circle



    Scenario:Verify the action icon on managed circles, click on the action (icon) it shows <circle name> <status(active)> on the top of the circle details, members, appoint officials.



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_006
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify On circle details shows <circle name> <circle code> <description> <wallet balance> <currency> <target amount> <target date> <circle contribution> <created on> <edit icon> <delete icon> and close button.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number        
        Then Verify Circle details


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_007
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario:On circle details shows <circle name> <circle code> <description> <wallet balance> <currency> <target amount> <target date> <circle contribution> <created on>, check all the details is matched(true or not)
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number        
        Then View the Circle details and verify


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_008
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the Active text will be visible when clicked on action icon in circle details page
        Then Verify Active Text in edit page



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_009
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify On the circle details page , click on the close button and it will be back to the previous page.
        
        Then Click on Close Button and verify it will navigate to previous page


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_010
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the validations in edit detatis of circles
        And Click Manage Circle and search the valid circle Number        
        Then Verify the edit details page validations

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :X.09_SavingCircles_011
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the edit circle name and description on review and confirm page, enter the valid circle name and valid description then hit the next button, show a review and confirm page. The circle name and description is the same as on the edit page.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number        
        Then Edit and View the Circle details

    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID :X.09_SavingCircles_012
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:On edit page click on Cancel and it will be back to the previous page.
        Then Cancel the Edit and View the Circle details