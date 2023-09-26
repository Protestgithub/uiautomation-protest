Feature: User Profile Configuration-7

    #######################   User Profile Configuration-7 ##########################


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2168
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave authentication system field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave authentication system field blank.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2169
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to leave auto logout duration field blank.
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and leave auto logout duration field blank.

   


