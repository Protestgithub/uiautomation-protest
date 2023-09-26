Feature: Business Management console - View orders

    #######################   Business Management console - View orders ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_538
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Order Date sorting on table in Order Date column in assending order
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details and Order Date


     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_539
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Order Date sorting on table in Order Date column  in descending order.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details and Order Date


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_540
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employers can view list of orders
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details for employeers


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_542
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify Employer can filter based on status, service type and date range
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details for employeers
    Then Click on filte based on status

     # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_547
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
    Then Click on Order Details for employeers
    And Click on Filter for Order Details and clear the set filters


      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_548
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on apply without set any filter
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details for employeers
    And Click on Filter for Order Details and  click on apply without set any filter


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_550
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that business Admin/employer can see the other user order details.
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Order Details for employeers

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_551
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to enter service
       
    Given Log in with corporate user credential
    When  Click on user management and Manage users
    And Select user type Self in drop down
    And Click on search to view self information
    And Click on Action icon
    Then Click on Filter for Order Details and  Enter service click on apply


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_554
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
    # # # Scenario_ID : TC_555
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




 
    





   
    



