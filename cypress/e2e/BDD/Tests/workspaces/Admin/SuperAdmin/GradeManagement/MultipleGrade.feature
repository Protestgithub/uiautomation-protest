Feature: Multiple Grade Creation

# Author: Bhagyashri
# Last Updated: 06-02-2023
# Comments : 
# Scenario_ID : TC_950
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_378 To verify that user is able to create mutiple grade as per category in the system.
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Add Grade
And Select the domain & category for new Grade1
Then Click on save and confirm