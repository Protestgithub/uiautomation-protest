Feature: Business Management console- View/Modify/Delete/Suspend User Details-1 

    #######################   Business Management console- View/Modify/Delete/Suspend User Details-1   ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_360
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to view the other user details.
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_363
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete button without enter any comment and reason
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Delete icon and Don’t enter comment and reason

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_364
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete button if employer enter valid reason and comment box is emplty
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Delete icon and Don’t enter comment and select valid reason

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_365
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete button if employer enter comment in comment box and not fill any reason
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Delete icon and enter comment and Don’t select valid reason


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_366
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete button if employer enter comment in comment box and enter valid reason
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Delete icon and enter comment and select valid reason

        
# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_368
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that business Admin/ employer able to click on suspend user account.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon


        
# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_369
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on Yes button without enter any comment in comment box on suspend user pop up 
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on Yes button without enter any comment


        # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_370
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on No button on Suspend user pop up
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on No button without enter any comment
       

# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_371
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on yes button when enter the comment in comment box
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on yes button when enter the comment