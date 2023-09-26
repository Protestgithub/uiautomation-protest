Feature: Business Management console - Task on Employee-1

    #######################   Business Management console - Task on Employee-1  ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_391
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to search employee users by mobile number,KYC number
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer



  # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_392
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user able to click on reset button
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        Then Click on Reset Button for users


         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_393
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to click on action icon
       
         Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        And Click on Action icon

        

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_395
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To check the fuctionality of name sorting in assending order.
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        Then Click on Name sorting on table


        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_396
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To check the fuctionality of name sorting in descending order.
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for Employeer
        Then Click on Name sorting on table


         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_397
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To check the fuctionality of date sorting on Registered column in assending order
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        Then  Click on Registered on on table


         # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_398
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario: To check the fuctionality of date sorting on Registered in decending order 
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        Then  Click on Registered on on table



             # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_400
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
   Scenario:To verify that the business owner able to view wallet Statement information.
       
        Given Log in with valid credentials as corporate user 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        Then Click on Wallet Payment History for the user







