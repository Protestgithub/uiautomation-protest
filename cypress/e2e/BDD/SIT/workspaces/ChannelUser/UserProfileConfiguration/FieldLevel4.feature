Feature: User Profile Configuration-4

    #######################   User Profile Configuration-4 ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2118
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to login simultaneously more than the number of times invalid attempts
       
   Given Login into Mobiquity Portal as Super admin Maker
 

    # # Author:Sudheer Baraker
    # # Last Updated:
    # # Comments
    # # Scenario_ID : TC_2122
    # #

    #TAGS
    #version tags
    @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    
    Scenario:To verify that user is able to choose existing regulatory profile code.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to UserManagement And Click on Regulatory Profile
        Then Click on Add Regulatory Profile and Enter existing profile code


    # # # Author: Sudheer Baraker
    # # # Last Updated:
    # # # Comments : View
    # # # Test Case_ID : TC_2123
    # # #
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

    Scenario:To verify that user is able to choose existing marketing profile code.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to UserManagement and Click on Marketing Profile
        Then Click on Add Marketing Profile and Enter existing profile code
         

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_2119
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
    # # # Scenario_ID : TC_2120
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


    # # # Author: Sudheer Baraker
    # # # Last Updated:
    # # # Comments : View
    # # # Test Case_ID : TC_2125
    # # #
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

    Scenario:To verify if user deletes any wallet through modification then it should'nt be affected the already assigned wallet to the user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to UserManagement and Click on Marketing Profile
        Then User Deletes any Wallet through Modification