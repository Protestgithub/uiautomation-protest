Feature: Transaction Correction Cashout


# Author: Sudheer B
# Last Updated:
# Comments 
# Test Case_ID : 
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_373 TC_1450 To Verify that, System Admin  can request for transaction correction  for  Cash-Out service.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage Users
And Enter Mobile number or KYC number for Cash-Out service
And User Click Wallet Payment History and Click on reverse transaction for Cash-Out service
Then Logout


# Author: Sudheer B
# Last Updated:
# Comments 
# Test Case_ID : 
# #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_374 TC_1451 To Verify that, After complete the transaction correction process the subscriber can get complete cash out done through another agent. 
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Transaction Correction and click on Transaction Approval3


