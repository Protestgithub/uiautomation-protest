Feature: Bank and Wallet Creation

    # ##################################### wallet Creation ################################################

    # # Author: Narendra
    # # Last Updated: /05/2022
    # # Comments
    # # Scenario_ID :
    # # TestCase_ID : TC_01
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario:TC_31 TC_Smoke13 To verify that System admin is able to Add wallet successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate Multiple Wallet Management and Click on Add Wallet
        And Enter Wallet name and click on save
