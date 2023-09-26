Feature: Regulatory Profile Creation

    ##################################### TCP Creation ################################################
    # # Author:Monica
    # # Last Updated:
    # # Comments
    # # Scenario_ID : TC_143
    # #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    
    Scenario:TC_19  TC_Smoke12 To verify that system admin should be able to add regulatory profile in the system
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to UserManagement And Click on Regulatory Profile
        Then Create Regulatory Profile