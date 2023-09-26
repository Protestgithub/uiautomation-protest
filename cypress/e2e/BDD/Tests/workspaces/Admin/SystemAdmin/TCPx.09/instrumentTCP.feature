Feature: Instrument Level TCP Creation

###################################### TCP Creation MON-58430 ###############################################
# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and checked
# # # Test Case_ID :
# # # //changes added on 26/07
@test
 Scenario:To verify that sysadmin is able to create Instrument TCP profile
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to Transfer Control Profile x.09
  And Click on Add Profile Button of tcp x.09
  Then Enter TCP Details
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
Scenario:To verify that sysadmin checker is able to approve of instrument tcp
 Given Login into Mobiquity Portal as System admin Checker1
 Then Navigate to Checker Approvals and filter by Submitted status
 And User click on Buissness Admin submitted user data
 And Approve the Users for Admin Creation

 # # # Author: Prerna
# # # Last Updated: 19/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:To verify that profile name should be unique and proper error message is displayed when non-unique name is entered
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to Transfer Control Profile x.09
  And Click on Add Profile Button of tcp x.09
  Then Enter an existing tcp name in the Profile Name Field

# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked, to be pushed
# # # Test Case_ID :
@test
Scenario: To verify that system admin is able to set instrument daily credit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And Set Debit Limits
 And set instrument daily credit limit 
 And set instrument weekly credit limit
 And set instrument monthly credit limit
 And set instrument yearly credit limit
 And set per transaction amount of credit limit

# # # Author: Prerna
# # # Last Updated: 28/06
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
 Scenario: To verify that system admin is able to set instrument daily debit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily debit limit 
 And set instrument weekly debit limit
 And set instrument monthly debit limit
 And set instrument yearly debit limit
 And set per transaction amount of debit limit

# # # Author: Prerna
# # # Last Updated: 07/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  To verify that no negative value should be there in count field
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily debit limit with count in negative
 And set instrument weekly debit limit with count in negative
 And set instrument monthly debit limit with count in negative
 And set instrument yearly debit limit with count in negative
 Then Check the count fields of daily, weekly, monthly and yearly

# # # Author: Prerna
# # # Last Updated: 02/07/23
# # # Comments  : scripted and checked, to be pushed
# # # Test Case_ID :
@test
 Scenario: To verify that blank field should not be allowed in amount field of instrument daily debit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily, weekly, monthly debit limit in count

# # # Author: Prerna
# # # Last Updated: 07/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  To verify that no decimal value should be there in count field
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily debit limit with count in decimal value
 And set instrument weekly debit limit with count in decimal value
 And set instrument monthly debit limit with count in decimal value
 And set instrument yearly debit limit with count in decimal value
 Then Check the count fields of daily, weekly, monthly and yearly is not a decimal number

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
Scenario: To verify in user details user's minimum balance, maximum balance,minimum transaction, maximum transaction decimal amount should be allowed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Enter TCP Details
And Set Debit Limits
And Set Credit Limits
And Enter decimal values in minimum balance, maximum balance,minimum transaction and maximum transaction



# # # Author: Prerna
# # # Last Updated: 02/07/23
# # # Comments  : scripted and checked, to be pushed
# # # Test Case_ID :
@test
 Scenario: To verify that blank field should not be allowed in count field of instrument daily debit limit
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily, weekly, monthly debit limit in amount


# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
Scenario: To verify in user details user's minimum balance, maximum balance,minimum transaction, maximum transaction amount should be greater than 0
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Enter TCP Details
And Set Debit Limits
And Set Credit Limits
And Enter value 0 in minimum balance, maximum balance, minimum transaction amount and maximum transaction amount

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and checked, need to push
# # # Test Case_ID :
@test
Scenario: To verify in user can enter value of 1-100 only in Percentage transfer allowed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Enter TCP Details
And Set Debit Limits
And Set Credit Limits
And Enter value less than 1 and value greater than 100 in Percentage transfer allowed


# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
 Scenario: Next button is enabled only after entering all mandatory details
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 #And Click on Next button 




 

# # # Author: Prerna
# # # Last Updated: 07/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  To verify that no negative value should be there in amount field
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And set instrument daily debit limit with amount in negative
 And set instrument weekly debit limit with amount in negative
 And set instrument monthly debit limit with amount in negative
 And set per transaction amount of debit limit with amount in negative
 Then Check the amount fields of daily, weekly and monthly




# # # Author: Prerna
# # # Last Updated: 10/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  verify that the next button is enable only when the limit is set for the all the services
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 Then Enter TCP Details
 And Clear limit values of channel row of any service
 Then Check whether debit limit next button is disabled


# # # Author: Prerna
# # # Last Updated: 06/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  To verify that the description should not be more than 100 character length
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 And Enter description of length 101 characters
 And Set Debit Limits
 And Set Credit Limits
 And Enter User details
 Then check the length of description
 
# # # Author: Prerna
# # # Last Updated: 06/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
 Scenario:  To verify that the profile name should not be more than 20 character length
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on Add Profile Button of tcp x.09
 And Enter profile name of length 21 characters
 And Set Debit Limits
 And Set Credit Limits
 And Enter User details
 Then check the length of profile name
 
