Feature: Employee Creation

   #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario: TC_341 To verify corporate user is able to create Employee User
    Given Log in with corporate user credential
    When Select User type as Business and Select user role Employee
    And Enter all the Employee Details
    Then Confirmation message displayed

    # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario:  TC_342 To verify approval of employee user1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved

   #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario: TC_345 To verify corporate user is able to create another Employee User
    Given Log in with corporate user credential
    When Select User type as Business and Select user role Employee
    And Enter all the Employee Details1
    Then Confirmation message displayed

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario: TC_351 To verify first login of employee user
    Given Log in with employee user credential

       # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario:  TC_346 To verify approval of employee user2
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @prerequisite
    Scenario: TC_352 To verify first login of employee user2
    Given Log in with employee user2 credential