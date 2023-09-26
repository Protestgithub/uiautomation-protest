Feature: Set Security Question

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID : TC_673
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_398 To verify that user is able to add Security questions in French language
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to security and click on security questions
# And User click on add questions Button1
# And User Select the French language and enter the questions in French language
# And Click on add Button
# Then Click on Confirm Button

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
Scenario:TC_399 To verify that user is able to set the security questions.
Given Login into Mobiquity Portal as System admin Maker
# When Navigate to Profile icon and Click on Profile icon
# And Click on Setting and click on ViewModify
# Then Click on Edit and Select the questions and enter the answer
# And Click on save Security button
# Then verify the Success Message

# Author: Narendra
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
Scenario:TC_400 To verify that user is able to modify security questions.
Given Login into Mobiquity Portal as System admin Maker
# When Navigate to Profile icon and Click on Profile icon
# And Click on Setting and click on ViewModify
# Then Click on Edit and Select the questions and enter the answer
# And Click on save Security button
# Then verify the Success Message

