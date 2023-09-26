Feature: Marketing Profile Modification and Wallet Deletion

# Author:Narendra
# Last Updated:
# Comments 
# Scenario_ID : TC_2094
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_410 To verify that user is able to modify marketing profile
Given Login into Mobiquity Portal as System admin Maker
When Navigate to UserManagement and Click on Marketing Profile
And Click on Modify and Save Modify changes

# Author: Bhagyashri
# Last Updated: 15/02/2023
# Comments 
# Scenario_ID :
# TestCase_ID : TC_695
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_411 To verify that user is able to delete any wallet type record from marketing profile details section
Given Login into Mobiquity Portal as System admin Maker
When Navigate to UserManagement and Click on Marketing Profile
And  Search marketing profile
Then Click on delete icon under wallet option
And Click on search button and Delete wallet