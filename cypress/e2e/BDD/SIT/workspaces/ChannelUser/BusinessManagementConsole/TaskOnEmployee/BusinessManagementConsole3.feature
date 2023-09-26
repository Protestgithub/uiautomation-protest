Feature: Business Management console - Task on Employee-3

    #######################   Business Management console - Task on Employee-3 ##########################


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_409
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Business owner able to see transaction summary on click show icon.
    Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
    And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Wallet Payment History for the user and search transaction by transaction ID
    And Click on expand button
    Then Click on wallet view Details

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_410
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner able to select the no. of wallet items per page selection from drop down.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details to select items from drop down


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_414
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business owner can select no. of items per page selection from dropdown 
       
   Given Log in with valid credentials as corporate user 
    When  Click on user management and Manage users
    And Click on Search Button
    #And Enter Mobile number and KYC number in search menu for Employeer
    And Click on Action icon
    Then Click on Order Details to select items from drop down


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_415
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that the business owner able to  view Credentials.
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
        #And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        Then Cick on Credentials




# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_416
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display personal information of user details.
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
        #And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        Then Cick on User Details


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_417
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display KYC information of user details.
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
      #  And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon
        Then Cick on View Details for KYC


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_418
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display profile information of user details 
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon and Profile Information


          # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_419
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that displays Access Identifier
       
        Given Log in with valid credentials as corporate user  
        When Click on user management and Manage users
        And Click on Search Button
       # And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon and Access Identifier


        