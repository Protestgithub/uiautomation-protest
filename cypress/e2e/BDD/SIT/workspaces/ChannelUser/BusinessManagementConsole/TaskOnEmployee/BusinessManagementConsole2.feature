Feature: Business Management console - Task on Employee-2

    #######################   Business Management console - Task on Employee-2  ##########################
# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_401
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to select the date from calender
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
    And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 
    And Select start date and end date and  Click apply

    # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_402
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that the business owner able to search transaction by transaction ID click on search icon.
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
    And Click on Search Button
   # And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user and search transaction by transaction ID

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_403
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that business owner able to export transaction details 
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
   # And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Export Transaction 

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_404
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To very that User able to statement fetched based on filters such as transaction type,service type and date range.
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_405
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Transaction type.
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and Status Type


     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_406
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Status type.
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and Status Type


     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_407
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Date range
       
     Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
   # And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 
    And Select start date and end date and  Click apply

     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_408
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that when click on clear will  clear the set filters
       
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
     And Click on Search Button
   # And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and clear the set filters

