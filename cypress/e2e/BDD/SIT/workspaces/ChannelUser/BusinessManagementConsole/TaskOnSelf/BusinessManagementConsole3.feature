Feature: Business Management console - Task on Self-3

    #######################   Business Management console - Task on Self-3 ##########################

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_528
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display personal information of user details.
       
        Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
        And Click on Action icon
        Then Cick on User Details


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_529
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display KYC information of user details.
       
        Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
        And Click on Action icon
        Then Cick on View Details for KYC


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_530
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that display profile information of user details 
       
     Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
        And Click on Action icon and Profile Information


          # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID :TC_531
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To verify that displays Access Identifier of user details
       
        Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Enter Mobile number and KYC number in search menu4
        And Click on Action icon and Access Identifier

    
 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_532
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business Owner able to modify or edit the user details
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on User Details to modify


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_535
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business Owner able to click on view details in user details on KYC tab
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Cick on View Details for KYC
  
  
    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_536
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify Employer able to click on close button
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Close Button


     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_537
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Business Owner able to change credentials
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Credentials and Can not reset




    
    

    