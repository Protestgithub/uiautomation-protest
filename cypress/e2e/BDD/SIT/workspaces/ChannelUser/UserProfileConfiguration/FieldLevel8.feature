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
   
Scenario:To verify that user is able to add questions in arabic language
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to security and click on security questions
And User click on add questions Button1
And User Select the Arabic language and enter the questions in Arabic language
And Click on add Button
Then Click on Confirm Button