Feature: Business Management console - Task on Hierarchies-2

    #######################   Business Management console - Task on Hierarchies-2  ##########################

  # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_458
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Filter based on Status type.
       
    Given Login with valid credentials as Head merchant
    When  Click on user management and Manage users
    And Enter Mobile number and KYC number in search menu4
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and Status Type

     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_460
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that when click on clear will  clear the set filters
       
    Given Login with valid credentials as Head merchant
    When  Click on user management and Manage users
    And Enter Mobile number and KYC number in search menu4
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History and clear the set filters 


 # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_461
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Business owner able to see transaction summary on click show icon.
     Given Login with valid credentials as Head merchant
     When Navigate to Manage User, and search Business Admin 
     And Select Hierarchy in user type drop down And view user
     When User Click on eye button
     Then Click on Wallet Payment History for the user and search transaction by transaction ID
     And Click on expand button
     Then Click on wallet view Details


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_462
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner able to select the no. of wallet items per page selection from drop down.
       
   Given Login with valid credentials as Head merchant
   When Navigate to Manage User, and search Business Admin 
   And Select Hierarchy in user type drop down And view user
    And Click on Action icon
    Then Click on Order Details to select items from drop down



  # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_465
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Business owner able to search by order id clicking on search icon.
     Given Login with valid credentials as Head merchant
     When Navigate to Manage User, and search Business Admin 
     And Select Hierarchy in user type drop down And view user
     When User Click on eye button
     Then Click on Order Details and search by order id


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_466
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner can select no. of items per page selection from dropdown 
       
   Given Login with valid credentials as Head merchant
   When Navigate to Manage User, and search Business Admin 
   And Select Hierarchy in user type drop down And view user
    And Click on Action icon
    Then Click on Order Details to select items from drop down


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_469
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner can select no. of items per page selection from dropdown 
       
   Given Login with valid credentials as Head merchant
   When Navigate to Manage User, and search Business Admin 
   And Select Hierarchy in user type drop down And view user
    And Click on Action icon
    Then Click on Account Info and Click on Bank Account


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_473
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that display personal information of user details.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on User Details


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_475
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on view detail for KYC information on user detail page
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on View Details for KYC

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_476
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on cross on KYC detail pop up
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on cross on KYC detail pop up

      