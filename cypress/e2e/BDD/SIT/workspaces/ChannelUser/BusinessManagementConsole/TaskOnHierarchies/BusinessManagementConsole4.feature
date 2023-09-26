Feature: Business Management console - Task on Hierarchies-4

    #######################   Business Management console - Task on Hierarchies-4 ##########################


  # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_492
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on reset button
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Click on Reset Button for Hierarchy


       # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_493
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that the business owner able to click on done button on pop up.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      Then Cick on Credentials and click on reset PIN and YES button and DONE button


       # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_496
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delete user icon.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on Delete Button for user information

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_497
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario:To verify that employer able to click on cancel button on pop up of delete user
       
    Given Login with valid credentials as Head merchant
    When Navigate to Manage User, and search Business Admin 
    And Select Hierarchy in user type drop down And view user
    And Click on Action icon
    And Click on cancel button on pop up of delete user


      # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_498
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delet button on delete user pop up without enter the comment in comment box.
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on Delete icon and Don’t enter comment and reason

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments:
    # # # Scenario_ID : TC_499
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on delet button on delete user pop up without enter the reason
       
      Given Login with valid credentials as Head merchant
      When Navigate to Manage User, and search Business Admin 
      And Select Hierarchy in user type drop down And view user
      And Click on Action icon
      And Click on Delete icon and Don’t enter comment and reason


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : 500
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that business Admin/ employer able to click on suspend user account.
        Given Login with valid credentials as Head merchant
        When Navigate to Manage User, and search Business Admin 
        And Select Hierarchy in user type drop down And view user
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_501
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on Yes button without enter any comment in comment box on suspend user pop up 
       Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on Yes button without enter any comment


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_502
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on yes button when enter the comment in comment box
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on yes button when enter the comment


# Author: Sudheer Baraker
    # Last Updated:
    # Comments : 
    # Test Case_ID : TC_503
    #TAGS
    #version tags
    @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite

    Scenario:To verify that Employer able to click on No button on Suspend user pop up
       Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And  Enter Mobile number and KYC number in search for suspension
        When User Click on eye button
        Then Verify View Details Page
        Then Click on Suspend user icon and click on No button without enter any comment


   