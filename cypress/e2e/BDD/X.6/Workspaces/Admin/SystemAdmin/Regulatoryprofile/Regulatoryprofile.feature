Feature: Regulatory Profile



    # Author:Bhagyashri
    # Last Updated:
    # Comments
    # Scenario_ID : TC_2089
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @UATHP
    # test case tags
    @test

    Scenario:To verify that user is able to modify the name of regulatory profile.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to UserManagement And Click on Regulatory Profile
    And  Click on pencil icon to modify profile name and click on save
