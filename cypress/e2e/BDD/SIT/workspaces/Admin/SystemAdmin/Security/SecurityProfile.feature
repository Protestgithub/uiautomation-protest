Feature:Security Profile

 #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_2139

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags

Scenario:To verify that user is able to set the two factor authentication on any new device on which he/she logs in.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Security and click to select security profile
        And Click on add profile select user type as subscriber and fill the details
        And Fill the details-Subscriber Profile Name
        And Fill the details-PasswordRestrictios
        And Fill the details-PinRestrictions
        And Fill the details-AuthRestrictions for radio check button
        Then assert check button is selected







 #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_2111

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
   
    Scenario: To verify that user is able to enter special character for password expiry duration field.    
  Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Security and click to select security profile
        And Click on add profile select user type as subscriber and fill the details
        And Fill the details-Subscriber Profile Name
        And Fill the details-PasswordRestrictios
        And Fill the details-PinRestrictions
        And Fill the details-AuthRestrictions for radio check button
        Then assert check button is selected