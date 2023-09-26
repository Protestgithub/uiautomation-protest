Feature: User Profile Configuration

    #######################   User Profile Configuration-1 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2064
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to check the box as it has no sequential words and numbers.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on system admin and check box beside Has no sequential words and numbers


   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2065
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to make some special characters mandatory.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on system admin and Enter some special character in special character field.

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2066
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set the number of the failed password attempts before account block.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on system admin and Enter number in the Failed Password Attempts for block field.


   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2073
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set authentication system as internal
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Login and Select internal from authentication system dropdown.

   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2074
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set number of minimum and maximum questions.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Login and Set number of minimum and maximum questions