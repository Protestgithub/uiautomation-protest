Feature: Business Management console - Task on Employee-4

    #######################   Business Management console - Task on Employee-4  ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_421
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that contact number, login id, email address and merchant code of basic information of employee user must be in read only mode
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on edit button to edit Pofile information

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_422
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to modify KYC information
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on edit button to edit KYC information


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_423
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to modify profile information 
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on edit button to edit Pofile information


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_424
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that employer able to click on reset password icon
       
        Given Log in with valid credentials as corporate user
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        Then Cick on Credentials and click on reset password icon

         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_426
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that the business owner able to  reset PIN  click on Yes button on pop up.
       
       Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on Credentials and click on reset PIN and YES button


         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_427
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that the business owner able to click on no button on pop up.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on Credentials and click on reset PIN and NO button


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_428
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on cancel button
       
       Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on Cancel button for edit user information


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_429
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that employer able to click on confirm button
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        And Click on Confirm button for employer


 