Feature: User Profile Configuration-3

    #######################   User Profile Configuration-3 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2108
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave the pin length field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave the pin length field blank.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2109
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave Maximum number of invalid attempts field blank for password
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave Maximum number of invalid attempts field blank for password

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2110
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave minimum length and maximum length password field blank.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on System admin and leave minimum length and maximum length password field blank.


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2111
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave the password expiry duration field blank.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on System admin and leave the password expiry duration field blank.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2112
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set the pin length
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and set the pin length



    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2113
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that that user is able to leave special characters field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave special characters field blank.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2114
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave Maximum number of invalid attempts field blank for pin
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave Maximum number of invalid attempts field blank for pin



    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2115
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to get numeric OTP while logging in from a new device.
       
    Given Login into Mobiquity Portal as Super admin Maker
 