Feature: Modify profile name, description, ovearll table, user details

###################################### TCP Modification ################################################

# # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID : 
# # # //changes added on 26/07
@test
 Scenario:  To verify that user should not cross the the maximum value set for amount fields
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily debit limit 
 And set instrument weekly debit limit
 And set instrument daily, weekly, monthly debit limit in amount exceeding upper limit

# # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID : 
@test
 Scenario:  To verify that user should not cross the the maximum value set for count fields
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily, weekly, monthly debit limit in count exceeding upper limit




# # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Comments  : we will use the profile name of this TCP to check Profile name is unique during the modification
# # # Test Case_ID : 
@test
 Scenario:  To create inst TCP for checking modified profile name should be unique for TCP during modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details2
 And Set Debit Limits
 And Set Credit Limits
 And Enter User details
 And Save TCP Profile name to use it later in modification
 And Confirm the Instrument TCP details
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP


# # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Comments  : we will use the profile name of this TCP to check Profile name is unique during the modification
# # # Test Case_ID : 
@test
 Scenario:  To approve inst TCP for checking modified profile name should be unique for TCP during modification
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Approve the Users for Admin Creation


# # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID : 
@test
 Scenario:  To verify that the that modified profile name should be unique for TCP
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 Then Enter an another tcp name in the Profile Name Field to be modified

# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scriptedand tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario:  To verify that the sysadmin user is able to modify profile name and description of Instrument TCP, and check Category,Grade,Payment Instrument and wallet Type are disabled
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And Navigate to confirmation page
 And Save TCP Profile name and tcp details
 And Confirm the Instrument TCP details
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP



# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scripted and tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario: To verify the approval of modification Request
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Approve the Users for Admin Creation


# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scriptedand tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario:  To verify that the sysadmin user is able to modify User Details section of TCP
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Navigate to User details page and Edit them
 And Save TCP Profile name and tcp details
 And Confirm the Instrument TCP details
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP

# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scripted and tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario: To verify that approval of modification Request can be Rejected
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Reject the Users for modification

 
# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scripted and tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario:  To verify that the sysadmin user is able to modify overall table for debit limit and credit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for ALL channel 
 Then Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for ALL channel
 And Confirm the Instrument TCP details
 And Navigate to My Activity and Apply submitted
 And Write Created on time for Instrument TCP

# # # Author: Prerna
# # # Last Updated: 03/07/23
# # # Comments  : scripted and tested, needs to be pushed
# # # Test Case_ID : 
@test
 Scenario: To verify the approval of debit and credit overall table modification Request
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Approve the Users for Admin Creation

 # # # Author: Prerna
# # # Last Updated: 11/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@x.09
@test
 Scenario:  To verify that no speacial character should be there in amount field during Modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And set instrument daily debit limit with amount having special character
 And set instrument weekly debit limit with amount having special character
 And set instrument monthly debit limit with amount having special character
 And set per transaction amount of debit limit with amount having special character
 Then Check the amount fields of daily, weekly and monthly

# # # Author: Prerna
# # # Last Updated: 11/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@x.09
@test
 Scenario:  To verify that no negative value should be there in amount field during Modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And set instrument daily debit limit with amount in negative
 And set instrument weekly debit limit with amount in negative
 And set instrument monthly debit limit with amount in negative
 And set per transaction amount of debit limit with amount in negative
 Then Check the amount fields of daily, weekly and monthly

# # # Author: Prerna
# # # Last Updated: 11/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@x.09
@test
 Scenario:  To verify that no negative value should be there in count field during Modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And set instrument daily debit limit with count in negative
 And set instrument weekly debit limit with count in negative
 And set instrument monthly debit limit with count in negative
 Then Check the count fields of daily, weekly and monthly



# # # Author: Prerna
# # # Last Updated: 11/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@x.09
@test
 Scenario:  To verify that no special character should be there in count field during Modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And set instrument daily debit limit with count having special character
 And set instrument weekly debit limit with count having special character
 And set instrument monthly debit limit with count having special character
 Then Check the count fields of daily, weekly and monthly

# # # Author: Prerna
# # # Last Updated: 11/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@x.09
@test
 Scenario:  To verify that no decimal value should be there in count field during Modification
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on edit icon of TCP
 And Modify the profile name and description of TCP
 And set instrument daily debit limit with count in decimal value
 And set instrument weekly debit limit with count in decimal value
 And set instrument monthly debit limit with count in decimal value
 Then Check the count fields of daily, weekly and monthly is not a decimal number
