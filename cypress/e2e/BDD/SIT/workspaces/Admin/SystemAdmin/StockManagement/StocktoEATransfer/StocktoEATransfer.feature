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
    Scenario:TC_1925 To verify that System admin is able to Initiate Stock Transfer to EA through web if alpha numeric deails is entered in reference number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Transfer and get Creation on time

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
    Scenario:TC_1195 To verify that System admin is able to Initiate Stock Transfer to EA through web if numeric deails is entered in reference number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Click on Create and Confirm Success Message
      
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
    Scenario:TC_13925 To verify that System admin is able to Initiate Stock Transfer to EA through web if numbers are entered  remarks
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Transfer and get Creation on time


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
    Scenario:TC_1045 To verify that System admin is able to Initiate Stock Transfer to EA through web if alphabets details is entered in remarks
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
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
    Scenario:TC_1045 To verify that System admin is able to Initiate Stock Transfer to EA through web if alphanumeric details is entered in remarks
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Transfer
        And Enter all the Stock Transfer Information
        Then Click on Create and Confirm Success Message




    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_196 To verify that System admin checker1 is able to approve
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Apply Stock Transfer filter
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_197 To verify that System admin checker2 is able to approve
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation
        #Then Confirm the Success Message for EA and RA


    # Author: Narendra
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
    Scenario:TC_1798 To verify that System admin can enquire the Stocks through stock enquiry
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on Stock Creation
        #And Search by Transaction ID and Enquire the Stock

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
@test
@x.09
@SIT    
Scenario:TC_1373 To Verify that, If Stock transfer amount is higher than the set Stock Transfer limit to EA account then, the system will request for second level approval from Stock Transfer to reward account approval 2.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter all the Stock Transfer Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Transfer and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Transfer filter
And User click on Stock submitted user data
And Approve the Users for Admin Creation
Then Logout
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
And User click on submitted user data
And Approve the Users for Admin Creation
#Then Confirm the Success Message for EA and RA




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