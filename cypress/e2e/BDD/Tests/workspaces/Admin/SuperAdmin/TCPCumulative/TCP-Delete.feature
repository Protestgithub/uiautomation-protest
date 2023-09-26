Feature:Delete TCP

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

Scenario:To verify that user is able to cleardelete TCP
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