Feature: Marketing Pofile Creation

    # ##################################### TCP Creation ################################################

    # # # Author: Kalyani M
    # # # Last Updated:
    # # # Comments : View
    # # # Test Case_ID : TC_23
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

    Scenario:TC_18 TC_Smoke24 To verify that system admin user can Add Marketing Profile.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to UserManagement and Click on Marketing Profile
        Then Add Marketing Profile
        And Add Marketing Profile Wholesaler