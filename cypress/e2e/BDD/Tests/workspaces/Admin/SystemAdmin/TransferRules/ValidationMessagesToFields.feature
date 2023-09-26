Feature: Validation Messages

    # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1888
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_316 TC_1888 To verift that proper error message is shown if To Domain is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select the Service Name and from details.
    Then Click on submit button for validation
    And Verify the mandatory error message

     # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1889
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_317 TC_1889 To verift that proper error message is shown if To Payment Instrument  is not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select the Service Name and from details.
    And Select To Domain
    Then Click on submit button for validation
    And Verify the mandatory error message


      # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1890
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_318 TC_1890 To verify that proper error message is shown if To Wallet Type/Linked Bank not selected.
    Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select the Service Name and from details.
    And Select To Domain and To PaymentInstrument
    Then Click on submit button for validation
    And Verify the mandatory error message

# Author: Saswat
# Last Updated: 18-02-2023
# Comments : TransferRuleForOtherUsers
# Testcase_ID :596
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_455 To verify that Users other than network admin are not able to add initiate Transfer Rule.
Given Log in with corporate User Credential
And Check for Transfer Rules Initiation

