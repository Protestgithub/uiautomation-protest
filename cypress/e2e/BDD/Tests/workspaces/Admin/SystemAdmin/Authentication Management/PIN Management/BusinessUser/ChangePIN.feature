Feature: ChangePIN


    # Author: Aditya
    # Last Updated:
    # Comments
    # Test Case_ID : TC_228
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_338 TC_250 To verify that a user who has auth  can reset the pin of a channel user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter previously registeredd Mobile number
        And Click on view Details
        And Navigate to Credentials and reset PIN
        And Logout

