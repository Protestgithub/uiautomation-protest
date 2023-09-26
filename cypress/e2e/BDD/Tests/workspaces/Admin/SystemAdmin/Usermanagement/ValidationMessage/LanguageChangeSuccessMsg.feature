Feature: French language Transaction Success Message

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags   
# test case tags
@UAT
@test
Scenario:TC_786 To verify that Systemadmin5 can able check the Notification with the changed language
Given Login into Mobiquity Portal as System admin with newly created Password
When Navigate to Admin Transaction and Click on Stock Creation for french language
And Enter All the Mandatory Details for Allocation
Then Click on allocation and Submit Button
Then Verify the Notification text with changed language