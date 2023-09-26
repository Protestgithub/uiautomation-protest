Feature: O2C Transfer Rule


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1020

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that proper error message should be displayed when amount entered is alphabetic in First Approval Limit
    Given Login into Mobiquity Portal as System admin Maker
    When User clicks on O2C transfer rules
    And Select Domain Name.
    And Select Category Name.
    And Select MFS Provider,Payment Instrument.
    Then Enter alphabetic amount in First Approval Limit input field.
    And Click on submit O2C.
    And assert the error message


    
    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1021

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that the Minimum transfer Amount do not accept alphabetic or alphanumeric values.
    When User clicks on O2C transfer rules
    And Select Domain Name.
    And Select Category Name.
    And Select MFS Provider,Payment Instrument.
    Then enter the valid data
    Then Enter alphabetic amount in Minimum Transfer Amount input field.
    And Click on submit O2C.
    And assert the error message1



    # Author: Bhagyashri
    # Last Updated:
    # Comments
    # Test Case_ID : TC_1022

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that the Maximum transfer Amount do not accept alphabetic or alphanumeric values.
     When User clicks on O2C transfer rules
     And Select Domain Name.
     And Select Category Name.
     And Select MFS Provider,Payment Instrument.
     Then enter the valid data
     And enter the valid data Minimum transfer amount
     And Enter alphabetic amount in Maximum Transfer Amount input field
      And Click on submit O2C.
      And assert the error message2


      #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1023

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that the  Transfer Amount Multiple Of do not accept alphabetic or alphanumeric values.
     When User clicks on O2C transfer rules
     And Select Domain Name.
     And Select Category Name.
     And Select MFS Provider,Payment Instrument.
     Then enter the valid data
     And enter the valid data Minimum transfer amount
     And enter the valid data in Maximum Transfer Amount input field
     Then Enter alphabetic amount in Transfer Amount Multiple Of  input field
     And Click on submit O2C.
      And assert the error message3