Feature: Business Management console - Task on Employee-5

    #######################   Business Management console - Task on Employee-5  ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_430
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on reset button 
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        Then Click on Reset Button for employer

        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_433
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on save button
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on Save button for edit user information

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_434
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on delete user icon
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Delete Button for user information


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_435
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on cancel button on pop up of delete user
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on cancel button on pop up of delete user


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_436
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on delete button on delete user pop up without enter the comment in comment box
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Delete icon and Don’t enter comment and reason



         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_437
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on delete button on delete user pop up without enter the reason
       
       Given Log in with valid credentials as corporate user
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Delete icon and Don’t enter comment and reason

 # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_438
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
    # Test Case_ID : TC_439
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
    # Test Case_ID : TC_440
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



 # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_441
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


       


 