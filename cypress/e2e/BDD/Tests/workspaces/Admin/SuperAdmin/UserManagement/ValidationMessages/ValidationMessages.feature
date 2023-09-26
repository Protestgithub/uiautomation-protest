Feature: SuperAdmin UserManagement Validation Messages



    ############################################# Monica ##############################################

    #ERROR_MESSAGE

    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_167
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_96 To verify that proper error message should be when login id is already present in the system.
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And Fill All Required Fields and Enter Registered LoginID
        Then Error Message Should be displayed


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_168
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_97 To verify that proper error message should be display when contact number/ email  is registered in the system.
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And Fill All Required Fields and Enter Registered EmailID
        Then Error Message Should be displayed

    # # Author:Monica
    # # Last Updated:
    # # Comments
    # # Scenario_ID : TC_180
    # #
    # #TAGS
    # #version tags
    # @x.04 @x.06 @x.07 @x.09
    # # suite tags
    # @sanity
    # # test case tags
    # @test
    # Scenario:To verify that proper error message should  be displayed when email id/contact number is not verified.
    #     Given Login into Mobiquity Portal as Super admin Maker
    #     When Navigate to User Management and click on register
    #     And Click On System Admin and select Single User
    #     And Fill All Required Fields and Enter Not Verified EmailID
    #     Then Not Registered EmailId Error Message

    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_181
    #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_98 TO verify that immidiate error message should be displayed whne any invalid value is entered by the user.
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And enter invalid value in mandatory field
        Then Email Id Error Message Should be dispalyed