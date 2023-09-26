Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin



    #####            Sudheer                  #####

    # # # Author: Sudheer Baraker
    # # # Last Updated: 05/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_78
    # # #
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test
    

    Scenario:TC_199,TC_SMOKE6 To verify that System admin is able to Initiate Stock Transfer to EA through web.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Stock Transfer to EA
        And User Select MFS Provider
        And User Should Enter Reference number
        And User Should Enter Amount
        And User Click on Submit button
        Then  User Click on Confirm button

     #   # # # Author: Sudheer Baraker
#     # # # Last Updated: 13/10/2022
#     # # # Comments :
#     # # # Scenario_ID : TC_07
#     # # #
#TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test

Scenario: TC_SMOKE7 To Verify that Once initiated the stock,the user will be able to go for first level approved from Stock Transfer to EA Approval – 1.


Given Login into Mobiquity Portal as System admin Checker1
When Click on Stock Management
And Click on Stock Transfer to EA Approval 1
#And Select the Initiated stock for which level 1 Approval is required
And Click on Submit for EA
Then Click on Approve for EA

#          # # # Author: Sudheer Baraker
#     # # # Last Updated: 13/10/2022
#     # # # Comments :
#     # # # Scenario_ID : TC_08
#     # # #
#TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test


Scenario: TC_SMOKE8 To Verify that, If Stock transfer amount is higher than the set Stock Transfer limit to EA then, the system will request for second level approval from Stock Transfer to EA Approval – 2



Given Login into Mobiquity Portal as System admin Checker2
When Click on Stock Management
And Click on Stock Transfer to EA Approval 2
#  And Select the Initiated stock for which level 1 Approval is required
And Click on Submit Approval2 for EA
Then Click on Approve of Approval2 for EA



    # # # Author: Sudheer Baraker
    # # # Last Updated: 05/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_78
    # # #
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanity
    # test case tags
    @test

    Scenario:TC_200 To verify that System admin is able to Initiate Stock Transfer to RA through web.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Stock Transfer to RA
        And Select MFS Provider
        And Enter Reference number
        And Enter Amount
        And Click on Submit button
        Then Click on Confirm button

    # # # Author: Sudheer Baraker
    # # # Last Updated: 06/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_79
    # # #
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
  @x.04sanity
    # test case tags
    @test

    Scenario:TC_201 To verify that System admin can enquire the Stocks through stock enquiry.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Stock Enquiry
        #     And User Select the From & To Dates and Transaction Status
        #     And Click on Submit or
        And Select any Transaction ID from the displayed list
        Then Click on Enquiry Submit button


