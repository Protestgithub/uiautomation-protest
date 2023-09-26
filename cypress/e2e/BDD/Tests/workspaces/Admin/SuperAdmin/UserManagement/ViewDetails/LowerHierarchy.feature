Feature: View Subscriber details

    # Author: Kalyani M
    # Last Updated:
    # Comments   :
    # Test Case_ID : TC_90
    #
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_99 To verify that Super admin maker able to view Subscriber details
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        When User Click on eye button

    # Author: Kalyani M
    # Last Updated:
    # Comments
    # Test Case_ID : TC_52_SuperadminChecker_LowerHierarchyDetails
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_100 To verify that Super admin is able to  view Lower_Hierarchy details of SystemAdmin
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number of System admin in Search
        When User Click on eye button