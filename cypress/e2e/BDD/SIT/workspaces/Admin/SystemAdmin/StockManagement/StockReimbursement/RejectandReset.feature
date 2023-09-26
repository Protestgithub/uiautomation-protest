Feature: Reject and Reset Stock Reimbursement

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

Scenario:TC_1990 To Verify that , System admin is able to fill invalid date in  Reimbursement
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information

# Author: Sudheer
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

Scenario:TC_461 To Verify that , System admin is fill invalid details and click on  reset any stock of Reimbursement approval request
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information
#Then Click on Reset Button
