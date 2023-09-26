Feature: EnterPrisePaymentService

# Author: Arpitha
# Last Updated: 17/02/2023
# Comments : 
# Scenario_ID : TC_1271
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_478 To verify that admin is able to define service charge rule for service “Enterprise Payment Initiation” in the pricing engine.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Enterprise Payment Service Policy
And Click on EnterPrise Payment to add service charge.
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Click on Pricing Engine        
Then Aprove the created service charge for Enteprise Payment rule
