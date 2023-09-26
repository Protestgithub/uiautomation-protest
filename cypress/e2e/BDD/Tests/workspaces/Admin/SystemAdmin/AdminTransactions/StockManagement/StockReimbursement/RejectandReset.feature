Feature: Reject and Reset Stock Reimbursement

# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
#TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_460 To Verify that , System admin is able to reject any stock of Reimbursement approval request
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Reimbursement and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Reimbursement filter
And User click on Stock submitted user data
And Reject the initiated stock


# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
#TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_461 To Verify that , System admin is able to reset any stock of Reimbursement approval request
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information
Then Click on Reset Button
