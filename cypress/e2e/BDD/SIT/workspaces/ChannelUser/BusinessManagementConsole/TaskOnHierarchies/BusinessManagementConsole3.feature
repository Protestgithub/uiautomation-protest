Feature: Business Management console - Task on Hierarchies-3

    #######################   Business Management console - Task on Hierarchies-3  ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_478
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on hierarchy eye icon
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Click on hierarchy eye icon  

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_480
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that displays Access Identifier
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon and Access Identifier

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_482
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that contact number, login id, email address and merchant code of basic information of hierarchy user must be in read only mode
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on edit button to edit Hierarchy Pofile information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_483
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to modify KYC information
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on edit button to edit KYC information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_485
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to edit hierarchy parent user id
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on edit hierarchy parent user id


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_486
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on reset password icon
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on Credentials and click on reset password icon

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_488
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to click on Yes button on pop up.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on Credentials and click on reset PIN and YES button


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_489
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
    # # # Comments:
    # # # Scenario_ID : TC_490
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on cancel button
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on Cancel button for edit user information

 
    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_491
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on confirm button
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on Confirm button for employer


        