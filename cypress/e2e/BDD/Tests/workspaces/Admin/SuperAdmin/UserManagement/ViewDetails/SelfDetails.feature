Feature: System Admin view Self Details



    ############################################# Monica ##############################################

    # Author: Kalyani M
    # Last Updated:
    # Comments
    # Test Case_ID : TC_51_SuperadminMaker_selfdetails
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_101 To verify that Super admin is able to  view Self details
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of superadmin in search
        When User Click on eye button

