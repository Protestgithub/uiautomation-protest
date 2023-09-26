Feature: Validation Messages

    # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1882
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_311 TC_1882 To verift that proper error message is shown if Service Name is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select fields
    Then Click on submit button for validation
    And Verify the mandatory error message

     # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1883
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_312 TC_1883 To verift that proper error message is shown if MFS Provider is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select Service Name
    Then Click on submit button for validation
    And Verify the mandatory error message


      # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1883
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_313 TC_1884 To verift that proper error message is shown if Domain is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select Service Name and MFS Provider
    Then Click on submit button for validation
    And Verify the mandatory error message


          # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1885
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_314 TC_1885 To verift that proper error message is shown if Payment Instrument is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select Service Name, MFS Provider and Domain
    Then Click on submit button for validation
    And Verify the mandatory error message


            # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1886
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_315 TC_1886 To verift that proper error message is shown if Wallet Type is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select Service Name, MFS Provider, Domain and Instrument
    Then Click on submit button for validation
    And Verify the mandatory error message
  
# Author: Saswat
# Last Updated: 1-02-2023
# Comments 
# Scenario_ID :
# TC_588
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_454 To verify that proper error message is shown if From Payment Instrument and Wallet Type  is not selected.
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select fields
Then Click on submit button for validation
And Verify the error message for Payment Instrument and Wallet Type








