Feature:CashOut

# Author: Chetan
# Last Updated:21-10-22
# Comments 
# Test Case_ID :16
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @prerequisite @Smoke
    # test case tags
    @test
Scenario: TC_372 TC_Smoke17 To verify that Business admin is able to Perform Cash out for Subscriber
Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash Out
And Enter all Mandatory details CashOut
Then Click on Submit and Click on Confirm Button for cashout