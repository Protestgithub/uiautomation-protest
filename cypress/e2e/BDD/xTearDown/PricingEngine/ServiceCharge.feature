Feature: Service Charge Teardown

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
##########  CASH IN  ###########
Scenario:TC_633 To verify that System admin is able to Delete Service Charge
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on Search and Seacrh for CASH IN Rule Name
Then Delete the Service Policy


# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown

Scenario:TC_634 To verify that System admin Checker1 is able to Approve the deleted Service
Given Login into Mobiquity Portal as System admin Checker1
When Click on Pricing Engine
And Navigate to PricingApproval


# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
##########  Commission  ###########
Scenario:TC_635 To verify that System admin is able to Delete Service Charge
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on Search and Seacrh for Commission Rule Name
Then Delete the Service Policy


# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
##########  Modified Commission Rule ###########
Scenario:TC_636 To verify that System admin is able to Delete Service Charge
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on Search and Seacrh for Modified Commission Rule Name
Then Delete the Service Policy

