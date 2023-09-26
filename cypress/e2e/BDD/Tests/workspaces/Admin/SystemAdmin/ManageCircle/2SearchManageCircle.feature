Feature: Search Manage Circle Page validations


    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID : X.09_SavingCircles_001
    # TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: To verify system adin user able to view Search manage circle page
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Verify Manage circle details

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_002
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Verify System admin user able to  Search the circle with invalid mobileNumber and verify error message
        And Click Manage Circle and search the invalid circle Number
        Then Verify the error exists for no circle found
  

    
    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_003
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the searchbox will be empty when clicked on reset button
        And Enter the circle Number and click reset
        Then Verify the mobile number inputbox is empty


    # Author: Narendra
    # Last Updated: 
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_004
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: To verify system admin able Find the circle with valid mobileNumber
        And Click Manage Circle and search the valid circle Number
        Then Verify the Circle should be search successfully

    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_005
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: To Verify system admin user should be able to view circle details

        Then View the Circle details
