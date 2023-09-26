Feature: CommisionDisbursment


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1351
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

#Prerequsite
Scenario: To verify that Super admin Maker is able Suspend the System admin Maker
       Given Login into Mobiquity Portal as Super admin Maker
       When Navigate to User Management and Click on Manage Users
       And enter the System admin Number and search the SuspendResume user
       And Resume the user by giving the comment
       Then Verify the user resume Confirmation message
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prerequsite
 Scenario:  To verify that Super admin Checker is able to Approve the Suspended System admin Maker
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved
        
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1351
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prerequsite
Scenario:TC_1351 To Verify that, The Suspended user cannot upload the commission disbursement report file.
Given Login into Mobiquity Portal with the suspended System admin Maker
Then Assert the Error that User is suspended

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prerequsite
Scenario: To verify that Super admin Maker is able Resume the System admin Maker
       Given Login into Mobiquity Portal as Super admin Maker
       When Navigate to User Management and Click on Manage Users
       And enter the System admin Number and search the SuspendResume user
       And Resume the user by giving the comment
       Then Verify the user resume Confirmation message

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prerequsite
 Scenario:To verify that Super admin Checker is able to Approve the Resumed System admin Maker
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prerequsite
Scenario:To verify that System admin Maker is able to Login
Given Login into Mobiquity Portal as System admin Maker


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1349
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To Verify that, User can be select commission disbursement service from the given service list. 
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
Then Select CommisionDisbursment Option