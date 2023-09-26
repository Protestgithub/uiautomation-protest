Feature: Business Admin Authorisation Field level Validations


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-299
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on cancel button

    Given Log in with Merchant user credential
    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and click Add button then click Cancel Button

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-298
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that Employer able to click on add button when set the profile preferences for all module and services

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and select all modules, services and set profile preferences

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-296
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that Employer able to set profile prefernces

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and select module, service and set profile preferences 

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-294
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that Employer able to select the module from module list

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and select module from module list

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_293
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that Employer able to search module in search box.

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and search module name

    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-289
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To check BMC Employer pass his right to another user profile.

    When  Select Authorization profile and add profile
    And  select BusinessAdmin user and select userrole
    Then Fill all Details and Check BMC Employer BusinessAdmin authorization profile


    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-269
    # # #
      #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that user is able to get details of authorization profile

    When  Select Authorization profile
    Then View Profiles