Feature:View TCP

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

Scenario:To verify that user is able to view TCP details
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
And Search a user and assert the fields
And Click on View Icon