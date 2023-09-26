 Feature:Session Management
 
 # Author:Rakesh 
    # Last Updated:
    # Comments
    # Scenario_ID : TC_73
    #
    #TAGS
    #version tags
    @x.06 @x.07
    # suite tags
    # test case tags
    @test

    Scenario:To verify that Master Admin/Network Admin can check details of all his own session through session management.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to SessionManagement
    And Click On My Sessions
    Then Click on any Session and Assert the Session Information

