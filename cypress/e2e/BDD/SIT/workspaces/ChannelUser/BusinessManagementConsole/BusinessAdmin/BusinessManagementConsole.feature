Feature: Business Management console > Business Admin

    #######################  Business Management console > Business Admin  ##########################

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_350
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that BMC allows business owner and employer able to see other employee or user who are not in their hierarchy and non employees. 
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Enter Mobile number and KYC number in search menu for others

 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_351
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that User details modification approval sent when edit and submit profile.
       
        Given Login into Mobiquity Portal as Business admin User5
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit button for User and Confirm

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_354
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that BMC allows business owner and employer to view the single user after single option.
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        Then Click on Single User

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_355
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that BMC allows business owner and employer to view Multiple user.
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        Then Click on Multiple User

        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_357
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that BMC allows business owner and employer to view the multiple user export profile details with all details header and sections in xlsl file.
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        Then Click on Multiple User to export profile


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_358
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Admin able to see basic information , edit information and confirmation change in progess bar.
       
        Given Login into Mobiquity Portal as Business admin User5 
        When Click on user management and Manage users
        And Click on Search Button
        And Click on Action icon
        And Click on edit icon for User information









   