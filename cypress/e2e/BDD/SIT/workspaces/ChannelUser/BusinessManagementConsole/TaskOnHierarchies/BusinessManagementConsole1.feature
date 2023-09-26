Feature: Business Management console - Task on Hierarchies-1

    #######################   Business Management console - Task on Hierarchies-1  ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_445
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user able to click on reset button
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      Then Click on Reset Button for users

      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_446
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on action icon
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_447
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To check the fuctionality of name sorting in assending order.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      Then Click on Name sorting on table

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_448
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To check the fuctionality of name sorting in descending order.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      Then Click on Name sorting on table

      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_449
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To check the fuctionality of date sorting on Registered column in assending order
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      Then  Click on Registered on on table

       # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_450
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To check the fuctionality of date sorting on Registered in decending order
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      Then  Click on Registered on on table

      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_453
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to select the date from calender
       
    Given Login with valid credentials as Head merchant
    When  Click on user management and Manage users
    And Enter Mobile number and KYC number in search menu4
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 
    And Select start date and end date and  Click apply


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_454
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that the business owner able to search transaction by transaction ID click on search icon.
       Given Login with valid credentials as Head merchant
       When Navigate to Manage User, and search Business Admin 
       And Select Hierarchy in user type drop down And view user
       When User Click on eye button
       Then Click on Wallet Payment History for the user and search transaction by transaction ID


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_455
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that business owner able to export transaction details 
       
  Given Login with valid credentials as Head merchant
   When Navigate to Manage User, and search Business Admin 
   And Select Hierarchy in user type drop down And view user
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Export Transaction 

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_456
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To very that User able to statement fetched based on filters such as transaction type,service type and date range.
       
    Given Login with valid credentials as Head merchant
    When  Click on user management and Manage users
    And Enter Mobile number and KYC number in search menu4
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 


   