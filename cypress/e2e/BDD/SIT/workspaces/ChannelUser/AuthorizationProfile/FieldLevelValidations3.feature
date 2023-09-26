Feature: Business Admin Field level validations 
 

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-324
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in decending order on modifyOn column
       
        Given Log in with Merchant user credential
        When Select Authorization profile
        Then Click on Modify ON column

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-323
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in assending order on modifyOn column
       
        When Select Authorization profile
        Then Click on Modify ON column

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-322
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in decending order on createdBy column

        When Select Authorization profile
        Then Click on Created By column

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-321
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in assending order on cereatedBy column

        When Select Authorization profile
        Then Click on Created By column

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-320
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in decending order on createdOn column

        When Select Authorization profile
        Then Click on Created ON column

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-319
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to sort date in assending order on createdOn column

        When Select Authorization profile
        Then Click on Created ON column
      

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-317
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that Employer able to click on clear

        When Select Authorization profile
        And Click on Filterss
        And Click on check box of category based filter subscriber Administrator and business
        Then Click on Clear

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-316
    # # #
    #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to apply category type filter

        When Select Authorization profile
        And Click on Filterss
        And Click on check box of category based filter subscriber Administrator and business
        Then Click on apply

# # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC-315
    # # #
     #TAGS
    #version tags
    @x.09
    #suite tags
    @SIT
   
    Scenario: To verify that employer able to apply status type filter

        When Select Authorization profile
        And Click on Filterss
        And Click on check box of status filter default, user defined
        Then Click on apply

