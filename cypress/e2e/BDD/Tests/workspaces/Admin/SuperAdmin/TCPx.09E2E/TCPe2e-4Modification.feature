Feature: TCP Modification E2E

###################################### TCP Modification MON-58430 ###############################################

 # # # Author: Saswat
# # # Last Updated: 
# # # Comments  :
# # # Test Case_ID : 
#version tags
@x.10
@TEST
 Scenario:  To verify that the sysadmin user is able to modify overall table for credit limit for error
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Set Debit Limits for E2E
 And Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for overall table for error


# # # Author: Saswat
# # # Last Updated: 
# # # Comments  :
# # # Test Case_ID : 
#version tags
@x.10
@TEST
 Scenario:  To verify that the sysadmin user is able to modify overall table for debit limit for error
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for ALL channel modify for error
 


# # # Author: Saswat
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : 
#version tags
@x.10
@TEST
 Scenario:  To verify that the sysadmin user is able to modify overall table for debit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for overall table
 And Confirm the Instrument TCP details after the modification of overall table
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP

 # # # Author: prerna
# # # Last Updated:
# # # Comments  : 
# # # Test Case_ID :
#version tags
@x.10
@TEST
Scenario:To verify that sysadmin checker is able to approve of instrument tcp
Given Login into Mobiquity Portal as System admin Checker2
Then Navigate to Checker Approvals and filter by Submitted status
And User click on Buissness Admin submitted user data
And Approve the Users for Admin Creation


# # # Author: Saswat
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : 
#version tags
@x.10
@TEST
 Scenario:  To verify that the sysadmin user is able to modify overall table for credit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Set Debit Limits for E2E
 And Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for overall table
 And Confirm the Instrument TCP details after the modification of overall table
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP

# # # Author: prerna
# # # Last Updated:
# # # Comments  : 
# # # Test Case_ID :
#version tags
@x.10
@TEST
Scenario:To verify that sysadmin checker is able to approve of instrument tcp
Given Login into Mobiquity Portal as System admin Checker2
Then Navigate to Checker Approvals and filter by Submitted status
And User click on Buissness Admin submitted user data
And Approve the Users for Admin Creation




