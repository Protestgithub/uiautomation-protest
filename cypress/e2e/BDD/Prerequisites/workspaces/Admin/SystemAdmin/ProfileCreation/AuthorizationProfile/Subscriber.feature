Feature: Auth Profiles Creation for Subscriber

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
    @sanity
    # test case tags
    @prerequisite
    Scenario: TC_16 To verify that system admin should be able to add authorization profile
        ### Subscriber M1S1 ###
        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile and add profile
        And  select Subscriber user type and select user role
        Then Fill all Details and Create Subscriber authorization profile

    #TAGS
    #version tags
    @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite
    Scenario: TC_17 Approval of added profile
        Given Login into Mobiquity Portal as System admin Checker1
        Then User approval for Authorization profile



