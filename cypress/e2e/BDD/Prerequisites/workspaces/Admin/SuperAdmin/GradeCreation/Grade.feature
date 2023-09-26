Feature: Domain,Category and Grade Creation


##################################### Grade Creation ################################################

# Author: Likith R
# Last Updated:
# Comments 
# Test Case_ID : TC_12,TC_265
# Scenario_ID:949
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@Smoke
# test case tags
@prerequisite

Scenario:TC_30 ,TCSmoke23 To verify that Master user can create grade, if all fields in contains value upto their maximum length.
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Add Grade
And Select the domain & category for which grade needs to be added.

