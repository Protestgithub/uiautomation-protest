Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin

    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1489 To verify that the System admin is able to initiate the reimbursement if valid msisdn is entered
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
        #Then Click on Create and Confirm Success Message
        #And Click on MyActivity, filter Stock Reimbursement and get Creation on time

    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1429 To verify that the System admin is not able to initiate the reimbursement if invalid msisdn is entered
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
        #Then Click on Create and Confirm Success Message

    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1819 To verify that the System admin is able to initiate the reimbursement if valid type is selected

        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
        #Then Click on Create and Confirm Success Message

    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
   @SIT
    # test case tags
    @test
    Scenario:TC_1489 To verify that the System admin is able to initiate the reimbursement if valid details are entered in the wallet type
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
        #Then Click on Create and Confirm Success Message



    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1109 To verify that the System admin is able to initiate the reimbursement if invalid reference number is entered
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information



    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1109 To verify that the System admin is able to initiate the reimbursement if special characters entered in reference number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information





    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1609 To verify that the System admin is able to initiate the reimbursement if decimla number entered in reference number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information




    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1109 To verify that the System admin is able to initiate the reimbursement if negative number is entered in reference number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
       

# Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_1090 To verify that System admin checker1 is able to see created stock reimbursement in the approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Apply Stock Reimbursement filter
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

# Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
   @SIT
    # test case tags
    @test
   Scenario:TC_1090 To verify that System admin checker1 is able to see created stock reimbursement in the approval level 2
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation

    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1340

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To Verify that, User is able to see success transaction and initiated transaction details in stock reimbursement status.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information


 #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1510

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Reimbursement will not be successful if msisdn contains alphabets.
           Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter Invalid MSISDN for reimbursement
        Then Assert Error Message of msisdn