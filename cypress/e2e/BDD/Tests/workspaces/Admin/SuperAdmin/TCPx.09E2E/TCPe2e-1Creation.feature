Feature: TCP

###################################### TCP Creation ###############################################

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.10
# suite tags
@UAT
# test case tags
@TEST

Scenario: To verify that user is able to create Cumulative TCP
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill out the details
Then Modify the Credit and Debit Limits
Then Navigate to My Activity Superadmin and Apply submitted
Then Check in My activity
Then Write Created on time for Cumulative TCP
Then Logout
Given Login into Mobiquity Portal as Super admin Checker
Then Navigate to Checker Approvals and filter by Submitted status
Then User click on Superadmin submitted user data
Then Click on Approve
Then User status is approved


# # # Author: Saswat
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@TEST
Scenario: To create an instrument TCP using the same domain and category
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set Debit Limits
And Set Credit Limits
And Enter User details
And Save TCP Profile name and tcp details
And Confirm the Instrument TCP details
And Navigate to My Activity and Apply submitted
And Write Created on time for Instrument TCP

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
#version tags
@x.10
Scenario:To verify that sysadmin checker is able to approve of instrument tcp
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Approve the Users for Admin Creation
 