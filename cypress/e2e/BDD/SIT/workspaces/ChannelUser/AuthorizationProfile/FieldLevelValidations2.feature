Feature: BusinessAdmin field level validations 


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-313
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to create clone of authorization profile 
       
    Given Log in with Merchant user credential
        When  Select Authorization profile
        Then Click on Copy Icon

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-308
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on confirm button

        When  Select Authorization profile
        Then Click on Modify button of authorization profile to modify and Click on Confirm



# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-307
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to modify profile information 

        When  Select Authorization profile
        Then Click on Modify button of authorization profile to modify


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-303
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on confirm button

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and click Add button then click Done Button

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-302
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on confirm button

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and click Add button then click Confirm Button

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-301
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on back arrow

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and click Add button then click Back Arrow Button

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-300
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on back button

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and click Add button then click Back Button