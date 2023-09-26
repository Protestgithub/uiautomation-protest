Feature: Removed or left members field validations

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_034
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the Removed/left members section in which <filters> <search bar> <list of removed/left members>.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number
        And View the Circle details and click on member tab
        And Click on Members Removed or left tab
        Then Verify Members Removed or left page


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_035
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Click on the filter icon it shows <initiated by(admin and others) > <service type(removed and left)> <clear and apply> button, choose the initiated by and service type then click on apply button. Filtered the list and shown in the removed/left member s...
        Then Click on filter and click on apply button


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_036
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
 
    Scenario: Click on the filter icon it shows <initiated by(admin and others) > <service type(removed and left)> <clear and apply> button, choose the initiated by and service type then click on the clear button. All the fields are clear in the filter.
        Then Click on filter and click on clear button



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_037
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario: Searched by mobile number/name , shows the related number removed/left members. enter the invalid circle code and hit the search icon it shows no result. Search with a blank bar , no search result is shown.
        Then Enter invalid mobile details and verify no results message


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_038
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: The removed/left member details shown on the list : <Name> <Mobile number> <Service type> <status> <initiated by> <initiated on> <action>., in the action (view more details of member).
        Then Verify Removed or left members table headers


