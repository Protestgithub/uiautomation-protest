Feature: E2E TCP deletion

###################################### TCP Deletion ################################################

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : 
@test
#version tags
@x.10
 Scenario:  To Delete Instrument TCP profie for E2E
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on delete icon to delete TCP
 When Navigate to My Activity and Apply required filters1
 And Write Created on time for Instrument TCP

 

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : 
@test
 Scenario: System admin Checker can approve Deletetion of instrument TCP request of System admin
 Given Login into Mobiquity Portal as System admin Checker1
 When Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And User click on approve delete request


# # # Author: Prerna
# # # Last Updated:
# # # Comments  : 
# # # Test Case_ID :
@test
Scenario: To verify post approval of deletion profile, profile should not come in Instrument TCP module
#dependent on create and approve
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Enter profile name of instrument TCP
And Check no record should be present

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that user is able to delete Cumulative TCP
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
And Search a user and assert the fields
And Click on Delete
Then Logout
Given Login into Mobiquity Portal as Super admin Checker
Then Navigate to Checker Approvals and filter by Submitted status
Then User click on Superadmin submitted user data
Then Click on Approve
Then User status is approved