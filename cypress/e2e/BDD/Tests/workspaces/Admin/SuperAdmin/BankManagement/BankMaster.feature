Feature: Bank Management

    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_05
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_84 To verify option is create Bank is available in web
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Bank Master and Click on it


    # # Author: Narendra
    # # Last Updated: /05/2022
    # # Comments
    # # Scenario_ID :
    # # TestCase_ID : TC_06
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_85 To verify that the Proper error message should get generated on screen if user add bank on web without entering Bank Name
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Bank Master and Click on it
        And Enter all the details Except Bank Name
        Then Confirm the Bank Error message


#     # Author: Narendra
#     # Last Updated: /05/2022
#     # Comments
#     # Scenario_ID :
#     # TestCase_ID : TC_07
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test

    Scenario:TC_86 To verify that the master should be able to associate or disassociate services of bank
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to MFS provider Bank type master and Click on Modify or Delete Bank
        Then Select the bank and associate new services
#Then Verify the Success Message