Feature: User Profile Configuration-2

    #######################   User Profile Configuration-2 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2102
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that modification of the marketing profile should not affect user accounts which are associated with it.
       
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to UserManagement and Click on Marketing Profile
    And Click on Pencil Icon to Modify


     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2104
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to enter value less than 0 for password expiry duration field.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on system admin and Enter the value less than 0 in password expiery field.


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2105
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to enter value greater than  365 for password expiry duration field.
       
   Given Login into Mobiquity Portal as Super admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on system admin and enter value greater than  365 for password expiry duration field.


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2106
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to set pin length less than 0
       
   Given Login into Mobiquity Portal as System admin Maker
   When Navigate to Security and click to select security profile
   And Click on Add profile in security profile
   Then Click on Customer and set pin length less than 0


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2107
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