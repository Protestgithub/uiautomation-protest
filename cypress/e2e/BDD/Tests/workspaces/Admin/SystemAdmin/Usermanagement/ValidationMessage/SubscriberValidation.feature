Feature: Subscriber Message Validation


    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_182
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_133 To verify that proper error message should  be displayed when email id/contact number is not verified.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        Then Fill all required details and Enter Email and Contact Number which are not verified and confirm Error message


    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_183
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_134 To verify that immidiate error message should be displayed whne any invalid value is entered by the user.
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        Then Fill all required details and Enter Invalid value and confirm Error message


    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_184
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_135 To verify that proper error message should  be displayed when Email id/contact number is not verified
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Fill all required details and Enter Email and Contact Number which are not verified and confirm Error message


    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_185
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test


    Scenario:TC_136 To verify that immidiate Error Message should be displayed whne any invalid value is Entered by the user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Fill all required details and Enter Invalid value and confirm Error message


    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_187
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_137 To verify that Proper error message should be When contact Number/ Email  is registered in the system
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Fill all required details and enter registered EmailID and confirm Error message
        Then Email Error message is displayed