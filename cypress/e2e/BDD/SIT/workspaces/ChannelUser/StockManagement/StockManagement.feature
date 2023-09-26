Feature: Stock Management

    # Author: Sudheer
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC-1633
    #TAGS
    #version tags
    @x.09
    # suite tags
   # @Smoke
    # test case tags
    @test
    Scenario:To Verify that, user should be not able to perform the reimbursement service if he/she enter special charaters into refrence number
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information for special charaters into refrence number
    

#############################################################################################

#Author:Rakesh
#Last Updated:
#Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
@prerequsite
Scenario: Cash In Initiation for User3
Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for CashIn
Then Click on Submit and Click on Confirm Button for Cash-IN1


# Author: Chetan.S
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_73
@x.09
# suite tags
@sanity
# test case tags
 @test


Scenario:TC_123 To verify that the System Admin is able to suspend a subscriber successfully through web.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
When User Click on eye button
Then Verify View Details Page
Then Click on Suspend user icon
And  write comments to Suspend user
And  click on yes
Then Verify the user resume Confirmation message
And Navigate to My Activity and Apply Modified User filters
Then Assert Suspension of Subscriber Mobile Number to Suspend

 # Author: Chetan.S
 # Last Updated: 25-04-2022
 # Comments
 # Scenario_ID :
 # TC_73
@x.09
# suite tags
@sanity
 # test case tags
 @test

Scenario:TC_124 To verify that the System Admin is able to Approve the suspended user
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on Subscriber submitted user data
And Approve the Users
Then User status is Suspended


#Author:Rakesh
#Last Updated:11-7-23
#Comments
#Test Case_ID : TC_1577
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_1577 To verify that valid user can not initiate Transaction correction request for any transaction id if user is suspended
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
Then Assert the Error Message that sender is suspended


# Author: Chetan.S
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_73
@x.09
# suite tags
@sanity
# test case tags
@test


Scenario: To verify that the System Admin is able to suspend a subscriber successfully through web.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
When User Click on eye button
Then Verify View Details Page
Then Click on Suspend user icon
And  write comments to Suspend user
And  click on yes
Then Verify the user resume Confirmation message
And Navigate to My Activity and Apply Modified User filters
Then Assert Suspension of Subscriber Mobile Number to Suspend

# Author: Chetan.S
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_73
@x.09
# suite tags
@sanity
# test case tags
@test

Scenario: To verify that the System Admin is able to Approve the suspended user
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on Subscriber submitted user data
 And Approve the Users
Then User status is Resumed
########################################################################################
#Author:Rakesh
#Last Updated:
#Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
@prerequsite
Scenario: Cash In Initiation for User3
 Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for CashIn
Then Click on Submit and Click on Confirm Button for Cash-IN1


#Author:Rakesh
#Last Updated:11-7-23
#Comments
#Test Case_ID : TC_1553, TC_1556
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that transaction correction will not get initiated if user select expired invalild transaction id.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
And User Click Wallet Payment History and Click on reverse transaction for Cash-IN service
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: Transaction Correction Approval
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Transaction Correction and Reject the Transaction for CASH_IN 
 #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_1553 To verify that transaction correction will not get initiated if user select expired invalild transaction id.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
Then Select the Failed Transaction and Click on Reversal



