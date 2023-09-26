Feature: Service Charge

    Feature Description

   
# Author: Arpitha
# Last Updated:
# Comments : Service Charge Creation
# Scenario_ID : TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_354 TC_53 To verify service charge module's calculator is workable
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge >> Service Service Charge Calculator
And enter the required details
Then Verify service charge calculator