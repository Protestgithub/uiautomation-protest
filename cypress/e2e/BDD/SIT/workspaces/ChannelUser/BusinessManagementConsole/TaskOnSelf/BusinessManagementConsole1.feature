Feature: Business Management console - Task on Self-1

    #######################   Business Management console - Task on Self-1 ##########################


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_505
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to select user type self and  click on search
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
      

      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_506
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to select user type self and  click on reset
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
      And Click on Reset Button for users

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_508
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to view self wallet Statement information
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_509
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To very that Statement can be fetched based on filters such as transaction type,service type and date range.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_511
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Status type.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and Status Type


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_512
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Date range
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 
    And Select start date and end date and  Click apply

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_513
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that when click on clear will  clear the set filters
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and clear the set filters
   

   




      