Feature:Modify Service Charge


# Author: Rakesh
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : TC_49
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_618 To verify that system admin is able to modify the service charge
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Modify or Delete service charge
And Select the Service Charge Profile
Then click on Approve to Modify