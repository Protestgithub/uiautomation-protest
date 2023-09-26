Feature: Stock Creation Rejection



# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:TC_457 To verify that Net Admin can Reject the Initiated Stock at level 1 
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And User click on Stock submitted user data
And Reject the initiated stock

# Author: Arpitha
# Last Updated: 8/02/2023
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1762
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:TC_479 To Verify that, Rejected stock appear in approval  
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And User click on Stock submitted user data
And Reject the Users for Admin Creation





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

Scenario:TC_460 To Verify that , System admin is able to  click on reject  button any stock of Reimbursement approval request
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

Scenario:TC_461 To Verify that , System admin is able to  cick on reset any stock of Reimbursement approval request
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information
#Then Click on Reset Button
