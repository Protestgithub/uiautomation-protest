Feature: Auth Profile Creation for Business Admin

    #######################   Authorization Profile Creation ##########################

    # # # Author: Sudheer Baraker
    # # # Last Updated: 17/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_149
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario: TC_10,TC_Smoke26 To verify that system admin should be able to add BusinessAdmin authorization profile
        #Administrator -- BusinessAdmin

        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        And  select BusinessAdmin user type and select user role
        Then Fill all Details and Create BusinessAdmin authorization profile


    #TAGS
    #version tags
    @x.06 @x.07 @x.09 @x.04
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario: TC_11 Approval of added Business Admin profile
        Given Login into Mobiquity Portal as System admin Checker1
        Then User approval for Authorization profile
