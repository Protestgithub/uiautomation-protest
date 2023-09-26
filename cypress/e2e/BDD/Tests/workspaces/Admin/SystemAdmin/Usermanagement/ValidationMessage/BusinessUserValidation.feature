Feature: Business User Message Validation

    # Author: Arpitha C
    # Last Updated: 26/05/2022
    # Comments :
    # Scenario_ID : SC_169
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test



    Scenario:TC_131 To verify that proper error message should be displayed when login id is already registered in the system.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role
        And Enter registered login id value
        Then Login id Error message is displayed

    # Author: Arpitha C
    # Last Updated: 26/05/2022
    # Comments :
    # Scenario_ID : SC_170
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test



    Scenario:TC_132 To verify that proper error message should be displayed when Email Id  is registered in the system.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role
        And Enter registered email id value
        Then Email Error message is displayed
