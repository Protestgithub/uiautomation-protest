Feature: Churn Sttelement


        

    # # Author:Narendra
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :TC_878
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_365 To verify that the Parent user has to be churned, then child user needs to be deleted.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on Churn Management and Churn Initiation
        And  Download a File template
        And Convert csv To JSON file
        And Update the json data with Buisness User MSISDN
        And convert json to csv
        Then Upload csv file with Channel User
        And Click on Churn Management and Churn Approval
        And Select the initiated churn request and click on Batch Approve
        Then Confirm the initiated churn request
    
    # # Author:Narendra
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :TC_892
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_366 To verify that the valid user can initiate the churn settlement process
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Churn Management and Churn Settlement Initiate
        And Enter Churned MSISDN and Click on Submit
        Then Enter Reciever MSISDN and click on submit

    # # Author:Narendra
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :TC_893
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_367 To verify that valid user can approve the initiated churn setlement process
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Churn Management and Churn Settlement Approval
        Then Click on Initiated settlement data and approve

    

        




