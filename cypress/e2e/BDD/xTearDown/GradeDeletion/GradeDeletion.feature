Feature: Grade Deletion

# Author: Rakesh 
# Last Updated: 
# Comments : Teardown for Grade
# Scenario_ID : TC_,TC_272
#              :959
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
@Smokeprerequisite
Scenario:TC_426 To verify that Super admin Checker can able to Delete the Grade
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Delete Grade
Then verify the error message of Grade deletion
