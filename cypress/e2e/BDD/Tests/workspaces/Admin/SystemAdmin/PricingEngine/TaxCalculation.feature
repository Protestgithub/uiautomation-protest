Feature: Enable or Disable Tax Calculation

# Author: Rajesh
# Last Updated:
# Comments : 
# Scenario_ID : 
# TC_60
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_520 To verify that User will be able to enable or disable the tax calculation successfully.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Transaction Tax
And Click on any service to add service charge1             
And Check is any rule there if not create one
And Make the rule Active or Inactive