Feature: Add Service Charge

# Author: Kalyani
# Last Updated:
# Comments : Service Charge Creation
# Scenario_ID :  TC_311
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_401 To verify that System admin should be able to add service charge.
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge
And Enter required fields for Adding ServiceCharge
Then Click on Next for ServiceCharge


# Author: 
# Last Updated:
# Comments : Service Charge Approval
# Scenario_ID : TC_311
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_402 To verify that System admin should be able to approve service charge.
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge approval


# # Author: Rakesh
# # Last Updated:
# # Comments : Service Charge 
# # Scenario_ID : TC_37
# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# @UAT
# # test case tags
# @test
# Scenario:TC_403 To verify that system admin is able to Add the service charge.
# Given Login into Mobiquity Portal as System admin Maker
# When Click on Service Charge
# And Enter all the required fields for Adding ServiceCharge
# Then Click on Next and enter the details
# And Verify the Sucess message


# # Author: Rakesh
# # Last Updated:
# # Comments : Service Charge 
# # Scenario_ID : Tc_47
# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# @UAT
# # test case tags
# @test
# Scenario:TC_404 To verify that system admin is able to approve the service charge.
# Given Login into Mobiquity Portal as System admin Maker
# When Navigate to service charge Approval
# Then click on Approve
