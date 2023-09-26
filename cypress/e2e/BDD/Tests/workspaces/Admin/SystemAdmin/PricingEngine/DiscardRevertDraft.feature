Feature: Discard and Revert Draft

# Author: Narendra
# Last Updated: 04-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1284,TC_1097
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_390 To verify that Net admin can discard his/her policy on which he/she are working
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Service Policy
Then Enter all Mandatory Details for Pricing Engine

# Author: Narendra
# Last Updated: 05-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1241
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_391 To verify that user is able to change the service level setting
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on Any Service Policy
And Click on Service level Settings
Then Change Service level Settings

# Author: Narendra
# Last Updated: 05-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1285
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_392 To verify that user is able to Revert to Last Saved Drafts policy When user chooses to revert to last saved, all the changes applied after saving the last draft is reverted
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Service Policy
And Select the rule and modify it and Revert to last saved