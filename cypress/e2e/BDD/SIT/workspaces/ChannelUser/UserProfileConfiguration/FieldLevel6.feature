Feature: User Profile Configuration-6

    #######################   User Profile Configuration-6 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2153
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to enter value less than 0 for password expiry duration field
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and Enter the value less than 0 in password expiery field.


   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2154
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to enter value greater than  365 for password expiry duration field.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and enter value greater than  365 for password expiry duration field.


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2156
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave the pin expiry duration field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave the pin expiry duration field blank

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2157
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
    # # # Scenario_ID : TC_2158
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
    # # # Scenario_ID : TC_2159
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave minimum length and maximum length password field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Cutomer and leave minimum length and maximum length password field blank.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2160
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
   Then Click on System Admin and leave the password expiry duration field blank.



   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2161
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
    # # # Scenario_ID : TC_2162
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
    # # # Scenario_ID : TC_2163
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
