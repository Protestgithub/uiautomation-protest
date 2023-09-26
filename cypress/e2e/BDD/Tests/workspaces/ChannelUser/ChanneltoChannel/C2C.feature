Feature: C2C Validation

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_642 Pre-requisite creating the service charge
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the C2C Service Policy
And Click on any service to add service charge.
Then Logout
#Given Login into Mobiquity Portal as another System admin Checker1 after logout
#When Click on Pricing Engine
#Then Aprove the created service charge
#Then Logout

# Author: Niroop H N
# Last Updated:
# Comments : 
# Scenario_ID : 640
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_643 To verify that transaction will be successful  if service charge modification is initiated but not approved.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the C2C Service Policy
And Click on any service to modify service charge.
Then Logout
Then Login into Mobiquity Portal as Channel User
And Click on Channel to Channel Link and Enter Details


# Author: Niroop H N
# Last Updated:
# Comments : 
# Scenario_ID : 641



    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_642 To verify that transaction will be successful  if service charge deletion is initiated but not approved.

Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the C2C Service Policy
And Delete service policy
Then Logout
Then Login into Mobiquity Portal as Channel User
And Click on Channel to Channel Link and Enter Details




