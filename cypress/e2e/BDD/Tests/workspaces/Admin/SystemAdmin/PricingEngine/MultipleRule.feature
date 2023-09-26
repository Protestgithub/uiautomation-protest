Feature: Multiple rule with same conditions

# Author: Niroop H N 
# Last Updated: 05/01/2023
# Comments : Service Charge PricingEngine Test Case
# Scenario_ID : 99
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_499 To verify that It is possible to create two rules in the same policy with the same conditions and statement
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Service Policy
And Click on same service to create another rule in same data.
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Click on Pricing Engine
Then Aprove the created service charge with Same name