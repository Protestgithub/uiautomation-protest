Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
   # @Smoke
    # test case tags
    @test
    Scenario:TC_189 To verify that the System admin is able to initiate the reimbursement through web
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information
        Then Click on Create and Confirm Success Message
        And Click on MyActivity, filter Stock Reimbursement and get Creation on time
# Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
  #  @Smoke
    # test case tags
    @test
    Scenario:TC_190 To verify that System admin checker1 is able to approve reimbursement
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Apply Stock Reimbursement filter
        And User click on Stock submitted user data
        And Approve the Users for Admin Creation
# Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
   # @Smoke
    # test case tags
    @test
    Scenario:TC_191 To verify that System admin checker2 is able to approve reimbursement
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation



# Author: Sudheer
# Last Updated: 5/05/2022
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1627
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_432 To Verify that, user is able to check the status of his/her requested and find its failed or not.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Reimbursement and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And User click on Stock submitted user data
And Reject the initiated stock
Then Logout
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
Then Check the rejection status  on the stock Reimbursment status


# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
Scenario:TC_456 To verify that the same amount will be deposit in the bank as the user has enterted amount in the mobiquity system.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And User click on Stock submitted user data
And Approve the Users for Admin Creation
Then Logout
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
And Apply Stock Creation filter
And User click on submitted user data
And Approve the Users for Admin Creation
Then Confirm the Success Message for Stock Initiation