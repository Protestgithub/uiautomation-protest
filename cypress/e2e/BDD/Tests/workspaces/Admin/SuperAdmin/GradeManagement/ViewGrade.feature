Feature: View and Validation of Grade

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_264
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_379 To verify that the system/business admin can view the categories and grade for the domain present in the system.
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Add Grade
And User can view the CategoryMenu and GradeMenu

