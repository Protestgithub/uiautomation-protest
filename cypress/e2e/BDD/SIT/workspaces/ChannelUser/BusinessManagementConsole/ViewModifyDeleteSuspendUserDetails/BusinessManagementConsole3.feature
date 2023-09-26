Feature: Business Management console- View/Modify/Delete/Suspend User Details-3 

    #######################   Business Management console- View/Modify/Delete/Suspend User Details-3   ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_384
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To vreify that user is able to click on confirm button
       
        Given Log in with valid credentials as corporate user
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on Confirm button for User



        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_385
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that system admin able to approve modify details of user
       
        Given Log in with valid credentials as corporate user
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button for User and Confirm
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        Then Click on Approve Button for modified Business User

    
        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_386
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that system admin able to click on yes button for approval
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button for User and Confirm
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        Then Click on Yes Button for modified Business User


          # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_387
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that employer able to edit the other user details
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button for Others Users
    

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_388
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete button
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Delete Button for user information


        