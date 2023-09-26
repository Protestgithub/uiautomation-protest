Feature: Create Circle

    This feature includes registering, Modifying and Approval of Business Admin and
    Customer Support Admin Users by System Admin
    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_01
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the circle with valid mobileNumber
        Given Login into Mobiquity Portal as System admin Maker
        And Click Create Circle and search the mobile Number
         And Enter valid details for circle creation
        Then Verify Circle Created Successfully