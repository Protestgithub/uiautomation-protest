Feature: User Profile Configuration-5

    #######################   User Profile Configuration-5 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2134
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to check the box as it has no sequential words and numbers.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and check box beside Has no sequential words and numbers


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2142
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set auto logout duration.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and set auto logout duration


   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2143
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set authentication system as internal
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and set authentication system as internal


   # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2144
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set number of minimum and maximum questions.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Login and Set number of minimum and maximum questions