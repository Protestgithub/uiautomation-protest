
Feature: Business Management console - Task on Self-2


    #######################  Business Management console - Task on Self-1 ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_514
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to set the sepecific period of time to see final activities.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Filter for Wallet Payment History 
    And Select start date and end date and  Click apply

# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_515
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that the business owner able to search transaction by transaction ID click on search icon.
      Given Log in with corporate user credential
      When Click on user management and Manage users
      And Select user type Self in drop down
      And Click on search to view self information
      And Click on Action icon
      Then Click on Wallet Payment History for the user and search transaction by transaction ID


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_516
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that business owner able to export transaction details 
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user
    And Click on Export Transaction 


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_518
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Business owner able to see transaction summary on click show icon
    Given Log in with corporate user credential
    When Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Wallet Payment History for the user and search transaction by transaction ID
    And Click on expand button
    Then Click on wallet view Details


 # Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_521
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Business owner able to search by order id clicking search icon.
      Given Log in with corporate user credential
      When Click on user management and Manage users
      And Select user type Self in drop down
      And Click on search to view self information
      And Click on Action icon
      Then Click on Order Details and search by order id

      
# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_525
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner able to see wallets- wallet type, currency.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
      And Click on view Details and Click on Account info

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_526
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner able to  see the bank account details like name, currency Account ID( hidden) and nickname
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Account Info and Click on Wallet to see the bank account details



