Feature: Commission Disbursement


    # # # Author: Sudheer Baraker
    # # # Last Updated: 19/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_154
    # # #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_216 To verify that system admin should able to disburse commisson to channel users
        Given Login into Mobiquity Portal as System admin Maker
        When  Commission Disbursement Process and Commission Disbursement
        And  Commision disbursment Select MFS provider and enter Mobile number
        And Commision disbursment Download the .csv file
        Then  Commision disbursment upload the downloaded file on bulk payout tool to initiate commision disbursement