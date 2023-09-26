Feature: Error Grade

# Author: Rakesh 
# Last Updated: 
# Comments : prerequisite
# Scenario_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_375 To verify that the Super Admin Checker can able to create Grade
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Add Grade
And Select the domain & category for new Grade
Then Verify the Sucess message of Grade creation


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_376 To verify that System admin Maker is able to add the TCP
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
And Click on Add New Button
Then Enter all required Fields for wholesaler grade
And Click on Create Button
Then Enter all required amount and count for wholesaler grade
And Click on Instrument Level TCP for approval


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_377 To verify that the Proper error message should be displayed if user associated with TCP/Service Charge/comission profile.
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Delete Grade
Then verify the Error message of Grade deletion
