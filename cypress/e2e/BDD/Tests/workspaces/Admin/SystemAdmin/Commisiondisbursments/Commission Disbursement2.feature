Feature: Commission Disbursement2



 # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : 1459
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_466 To Verify that, the commision amount will be debit from bussiness user wallet and it will be credit in the business user's chosen wallet.
Given Login into Mobiquity Portal as System admin Maker
When  Commission Disbursement Process and Commission Disbursement
And  Commision disbursment Select MFS provider and enter Mobile number
And Commision disbursment Download the .csv file

 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: Allocation
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Allocation 
And Enter All the Mandatory Details for Allocation
Then Click on allocation and Submit
# And Click on MyActivity, filter Owner To Channel and get Creation on time

 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: O2C Approval1
Given Login into Mobiquity Portal as System admin Maker
When Navigate to approvals
And Click on filter, type Owner to channel in workflow and apply
And User click on submitted user data
And Approve the Users

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_163 To verify System admin Checker2 is able to perform Approval2
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation

 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: BulkPayout initiation
Given Login into Mobiquity Portal as System admin Checker1
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then Edit the commission amount information
And Upload a .csv file with valid details

 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: BulkPayout Approval
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Approval link.
And Select initiated service.
And Click on Approve button.
And Click on BulkPayout tool
And Click on Bulk Payout Dashboard
And Click on number of entries
Then Verify Batch Id