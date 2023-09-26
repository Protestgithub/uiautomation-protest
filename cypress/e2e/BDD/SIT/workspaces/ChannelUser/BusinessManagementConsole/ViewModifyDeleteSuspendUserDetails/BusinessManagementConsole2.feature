Feature: Business Management console- View/Modify/Delete/Suspend User Details-2 

    #######################   Business Management console- View/Modify/Delete/Suspend User Details-2   ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_373
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to edit basic details of user
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button to edit User basic information


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_374
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to edit KYC information of user
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button to edit KYC information

        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_375
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to edit profile information of employee
       
       Given Login into Mobiquity Portal as Business admin User5
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button to edit Pofile information

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_376
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT

Scenario:To verify that employer able to edit profile information of hierarchy user
Given Login with valid credentials as Head merchant
When Navigate to Manage User, and search Business Admin 
And Select Hierarchy in user type drop down And view user
And Click on view Details
And Click on Edit Information info
Then Click on profile on progess bar

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_377
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT

Scenario:To verify that employer able to edit hierarchy information of hierarchy user
Given Login with valid credentials as Head merchant
When Navigate to Manage User, and search Business Admin 
And Select Hierarchy in user type drop down And view user
And Click on view Details
And Click on Edit Information info
Then Click on hierarchy on progess bar



 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_378
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT

Scenario:To verify that contact number, login id, email address and merchant code of basic information of user must be in read only mode
Given Login with valid credentials as Head merchant
When Navigate to Manage User, and search Business Admin 
And Select Hierarchy in user type drop down And view user
And Click on view Details
And Click on Edit Information info
And Click on edit button to edit Pofile information merchant code

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_379
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on save button
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on Save button for edit user information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_381
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on cancel button
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on Cancel button for edit user information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_382
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that Employer able to click on yes button on cancel pop up
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on Yes button for edit user information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_383
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on no button on cancel pop up
       
       Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on No button for edit user information








