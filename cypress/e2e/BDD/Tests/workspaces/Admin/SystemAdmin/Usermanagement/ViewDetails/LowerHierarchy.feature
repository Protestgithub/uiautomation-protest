Feature: View Subscriber details


    # Author: Kalyani M
    # Last Updated:
    # Comments
    # Test Case_ID : TC_52_Sysadmin checking lower Hierarchy details
    #
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_138 To verify that System admin is able to  Lower Hierarchy details
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        When User Click on eye button
        Then Verify View Details Page
