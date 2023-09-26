Feature: Authorization profile Field Level

    #######################   Field Level  ##########################

  # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-273
    # # #
      #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that user is able to select the user role for authorization profile creation

        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        And  select BusinessAdmin user type and select user role

        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-274
    # # #
      #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that user is able to search group by name

        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        Then  User is able to search group by name


 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-276
    # # #
      #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that user is able to search role by name

        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        Then  User is able to search role by name
    
    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-279
    # # #
      #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
    
    Scenario:To verify that user able to select attribute values for any selected group and roles

        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        Then  User is able to select attribute values for any selected group and roles


# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : Pre-Requisite-TC_149
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario: TC_10,TC_Smoke26 To verify that system admin should be able to add BusinessAdmin authorization profile
      

        Given Login into Mobiquity Portal as Super admin Maker
        When  Select Authorization profile and add profile
        And  select SystemAdmin user type and select user role
        Then Fill all Details and Create SystemAdmin authorization profile

        # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-283
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that user is able to approve creation/modification/deletion of authorization profile

    Given Login into Mobiquity Portal as Super admin Checker
    Then User approval for Authorization profile