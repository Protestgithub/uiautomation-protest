  Feature: Session Management


    # Author:Bhagyashri
    # Last Updated:
    # Comments
    # Scenario_ID : TC_1963
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @UATHP
    # test case tags
    @test

    Scenario:Toverify that user is able to Delete/logout/cancel any session.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to SessionManagement
    Then Click On My Sessions
    And Click on delete icon for any previous device
    And click on logout
