Feature: Stock Management Initiation

    This feature includes Stock initiation,StockApproval1 and StockApproval2 by System Admin


# Author: Arpitha
# Last Updated: 5/05/2022
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1976
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that System admin can initiate the stock successfully
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
Then Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time



# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_410
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that Network  Admin can Reject the Initiated Stock at level 1 and aeert in in the myactivity
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information
And Click on Create and Confirm Success Message
And Click on MyActivity, filter Stock Creation and get Creation on time

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1410
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: TC_1322 To verify level1 Approval
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to approvals
And Apply Stock Creation filter
And User click on Stock submitted user data
Then Reject the Initiated stock at level1


# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 197
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:TC_323 To Verify that, proper message should be shown over there, If user enter amount more than existing amount
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter All Stock Transfer details and enter amount greater than existing amount
#Then Verify Error Message for EA

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1888
# TestCase_ID : 
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_324 To Verify that, User is able to check the failed transaction staus of stock transfer to EA
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
#Then Check the Failed transaction staus of stock transfer to EA

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : TC_1822
# TestCase_ID : 
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To Verify that, User is able to check the initiated transaction staus of stock transfer to EA
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Transfer
And Enter all the Stock Transfer Information
#And Click on Create and Confirm Success Message
#Then Check the initiated transaction staus of stock transfer to EA



# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1323
# TestCase_ID : 
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To Verify that, user is not able to initiate the stock If user enter amount more than existing amount
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Creation
And Enter all the Stock Information and enter amount greater than existing amount
#Then Verify Error Message for EA




