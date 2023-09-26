Feature: Churn Validation


    # Author: Narendra
    # Last Updated: 
    # Comments 
    # Scenario_ID : TC_891
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_368 To verify that the Business user shouldn’t be in Suspended State at the time of Churning. The Business user should be resumed and then churned.
        Given Login into Mobiquity Portal as System admin Checker1
        When  Click on Churn Management and Churn Initiation
        And  Download a File template 
        And Convert csv To JSON file
        And Update the json data with Suspended Buisness User
        And convert json to csv
        Then Upload csv file with Pending Transaction Buisness user MSISDN

    
    
    
    # Author: Narendra
    # Last Updated: 
    # Comments 
    # Scenario_ID : TC_890
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_369 To verify that there shouldn’t be any pending transaction for Business user at the time of Churning. The pending Transactions should be settled prior to Churning.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        Then Click on submit and Confirm O2C
        And Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When  Click on Churn Management and Churn Initiation
        And  Download a File template 
        And Convert csv To JSON file
        And Update the json data with Pending Transaction Buisness User
        And convert json to csv
        Then Upload csv file with Pending Transaction Buisness user MSISDN



    # Author: Narendra
    # Last Updated: 
    # Comments 
    # Scenario_ID : TC_889
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_370 To verify that there shouldn’t be any Child user under a Business user at the time of Churning. Child Users Hierarchy should be changed to another Business user.
        Given Login into Mobiquity Portal as System admin Checker1
        When  Click on Churn Management and Churn Initiation
        And  Download a File template 
        And Convert csv To JSON file
        And update the json data with Headmerchant number
        And convert json to csv
        Then Upload csv file with HeadMerchant MSISDN


    # Author: Narendra
    # Last Updated: 
    # Comments 
    # Scenario_ID : TC_889
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_371 To verify that the churn initiatation fails if  MSISDN in not registered in the system.
        Given Login into Mobiquity Portal as System admin Checker1
        When  Click on Churn Management and Churn Initiation
        And  Download a File template 
        And Convert csv To JSON file
        And update the json data with unregistered number
        And convert json to csv
        And Upload csv file with Unregisterd MSISDN


