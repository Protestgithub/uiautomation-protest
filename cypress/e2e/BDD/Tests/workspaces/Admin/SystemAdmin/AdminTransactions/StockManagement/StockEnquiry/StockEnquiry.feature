Feature: Stock Enquiry

# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_462 To Verify that ,After initiated the stock user is able to see the stock success data in stock enquiry
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Balance Enquiry
And Select currency and Select Stock Account

# Author: Sudheer
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_458 To verify that all the requests will displayed on the Approval Managemnt
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
Then Click on approval management