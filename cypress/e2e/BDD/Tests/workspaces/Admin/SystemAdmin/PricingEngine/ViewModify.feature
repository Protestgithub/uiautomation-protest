Feature: View and Modify PricingEngine

# Author: Narendra
# Last Updated: 05-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1292
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_393 To verify that user is able to qucik to find the relevant rule that they want to modify or clone through search functionality
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Search Rule created by System admin
And Modify the Selected Rule

# Author: Narendra
# Last Updated: 05-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1295
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_394 To verify that if user chooses to enter a rule name and search the search result will give the list of all rules matching the rule name
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Search Rule with created Rule name

# Author: Narendra
# Last Updated: 05-01-2023
# Comments : PricingEngine Test Case
# Scenario_ID : TC_1299
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_395 To verify that functionality of search result will it give the list of rules names with the matching condition
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Search Rule with created Rule name with Matched condition

# Author: Rakesh
# Last Updated:
# Comments : Service Charge Commission
# Scenario_ID : TC_1313

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_396 To verify that network admin should be able to modify new Commission Subscriber rule successfully.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on commission and Select the rule
Then Search for the Service and modify



# Author: Niroop H N 
# Last Updated: 05/01/2023
# Comments : Service Charge PricingEngine Test Case
# Scenario_ID : 

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_500 "To verify that in the rejected policy list should be contain all the policies that have been rejected"
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on reject policy