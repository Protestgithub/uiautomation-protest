Feature: Exchange Rate Management

    #EXCHANGE RATE MANAGEMENT

    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_116
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_219 To verify that system admin can initiate Add Exchange Rate .
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Exchange Rate Management and Click on Add Exchange Rate
        And Enter all the required details and click on Submit
        Then System Admin can initiate Add Exchange Rate

    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_117
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_220 Approve Exchange Rate Management
        Given Login into Mobiquity Portal as System admin Checker1
        And Navigate to Exchange Rate Management and Click Approve or Reject ER
        And Approve Or Reject ER



    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_119
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_221 To verify that system admin can Modify the Exchange Rate in the system susccessfully.
        Given Login into Mobiquity Portal as System admin Maker
        And Navigate to Exchange Rate Management and Click Update Exchange Rate
        And Enter all details and click on Submit
        And Logout
        And Login into Mobiquity Portal as System admin Checker1
        And Navigate to Exchange Rate Management and Click Approve or Reject Updated Exchange Rate
        Then Click on Approve to Approve Exchange Rate


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_118
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_222 To verify that systen admin can View Modification exchange History successfully.
        Given Login into Mobiquity Portal as System admin Maker
        And Navigate to Exchange Rate Management and Click Show Modification History

