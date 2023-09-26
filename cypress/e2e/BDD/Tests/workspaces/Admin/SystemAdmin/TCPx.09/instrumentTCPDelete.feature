Feature: Instrument Level TCP deletion

###################################### TCP Deletion ################################################

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : scripted and tested, to be pushed
@test
 Scenario:  To verify that only the sysadmin user is able to delete tcp profile
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on delete icon to delete TCP
 When Navigate to My Activity and Apply required filters1
 And Write Created on time for Instrument TCP

 

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : scripted and tested, to be pushed
@test
 Scenario: To verify that System admin Checker can approve Deletetion of instrument TCP request of System admin
 Given Login into Mobiquity Portal as System admin Checker1
 When Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And User click on approve delete request




# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, to be pushed
# # # Test Case_ID :
@test
Scenario: To verify post approval of deletion profile, profile should not come in TCP module
#dependent on create and approve
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Enter profile name of instrument TCP
And Check no record should be present
