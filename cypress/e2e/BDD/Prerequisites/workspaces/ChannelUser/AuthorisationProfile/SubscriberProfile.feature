Feature: Channel User Authorization Profile Creation 

#######################   Authorization Profile Creation by Business user ##########################
# # # Author: Prerna
    # # # Last Updated: 13/02/2022
    # # # Comments :
    # # # Scenario_ID : 
    # # #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @prerequisite
Scenario: TC_437 To verify that business admin should be able to add authorization profile
          Given Login into Mobiquity Portal as Channel User4
          When  Select Authorization profile and add profile
          And  select Subscriber user type and select user role
          Then Fill all Details and Create Subscriber authorization profile

    # # # Author: Prerna
    # # # Last Updated: 13/02/2022
    # # # Comments :
    # # # Scenario_ID : 
    # # #
    #TAGS
    #version tags
    @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @prerequisite
    Scenario: TC_437 Approval of added profile
        Given Login into Mobiquity Portal as System admin Checker1
        Then User approval for Authorization profile