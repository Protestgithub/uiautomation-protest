Feature: Stock Withdrawal



# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1349
# TestCase_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that the Admin is able to perform Stock withdrawl, if there is all pending transactions are settled.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Withdrawal
And Enter all the Stock Withdrawl Information
#Then Click on Create and Confirm Success Message for stock withdraw
#And Click on MyActivity, filter Stock Withdrawal and get Creation on time

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_2513
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_328 To verify that Admin can successfully approve the stock withdrawal at level>>1
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Withdrawal filter
And User click on Stock submitted user data
And Approve the Users for Admin Creation

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1954
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that, After approval level-1  then,  Admin can successfully approve the stock withdrawal  at level-2
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
And User click on submitted user data
And Approve the Users for Admin Creation

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1826
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that the system will show the Available Wallet Balance and the Transaction Initiated Balance to the admin successfully.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Withdrawal
And Enter all the Stock Withdrawl Information
#Then Verify Available wallet Balance and Transaction Initiated Balance


# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1662
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
Scenario: To Verify that, The transaction will be fail, when the stock withdrawal duration has expired.
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Withdrawal Expired filter
And User click on submitted user data
#And Verify the user not able to approve

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 
@test
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
Scenario: To verify that Admin can successfully approve the stock withdrawal at level>>1 and request will close at this level when requested quantity is less than Approval limit 1.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Withdraw
And Enter all the Stock Information for withdraw
#Then Click on Delete and Confirm Success Message
#And Click on MyActivity, filter Stock Creation and get Creation on time
#Then Logout
#Given Login into Mobiquity Portal as System admin Checker1
#When Navigate to approvals
#And User click on Stock submitted user data
#And Approve the Users for Admin Creation
