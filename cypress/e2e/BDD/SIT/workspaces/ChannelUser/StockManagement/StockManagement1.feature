Feature: Stock management >> Transaction Correction



#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
@prerequsite
Scenario: Cash In for the user4
 Given Login into Mobiquity Portal as Channel User4
 When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for CashIn
Then Click on Submit and Click on Confirm Button for Cash-IN to check Multiple Reversal


#Author:Rakesh
#Last Updated:1-8-23
#Comments
#Test Case_ID : TC_68,TC_82
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify to enter the transaction ID less then 17 digits(greater then 17 digits)
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
Then Search with the Transaction ID and Assert it



#Author:Rakesh
#Last Updated:17-7-23
#Comments
#Test Case_ID : TC_1547 & TC_1574
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_1547 To Verify that, User can initate the transaction correction.If valid details are entered
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC of Subscriber User
And User Click Wallet Payment History and Click on reverse transaction And enter the Remarks with AlphaNumeric



#Author:Rakesh
#Last Updated:17-7-23
#Comments
#Test Case_ID : TC_1559
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that, The amount would be reverted accordinaly the Basis of the selection by the user.
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Transaction Correction and click on Approve the transaction ID4


#Author:Rakesh
#Last Updated:17-7-23
#Comments
#Test Case_ID : TC_1548
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To Verify that, User cannot initate the transaction correction.if invalid details are entered
Given Login into Mobiquity Portal as System admin Maker
    When Navigate to User Management and Click on Manage Users
    And Search with User Mobile or KYC Mercahnt ID
    And User Click Wallet Payment History and Click on reverse transaction And enter the Invalid Remarks
    Then Assert the Error Message that Invalid Remarks


#Author:Rakesh
#Last Updated:4-08-2023
#Comments
#Test Case_ID : TC_1558
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:Save the Subscriber Balance 
 Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Merchant mobile number and click on search



 #Author:Rakesh
#Last Updated:4-08-2023
#Comments
#Test Case_ID : TC_1558
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@prerequsite
Scenario:Perform CASH out
Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash Out
And Enter all Mandatory details CashOut for Reversal
Then Click on Confirm for CASHOUT SUB
Then Logout


#Author:Rakesh
#Last Updated:4-08-23
#Comments
#Test Case_ID :
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that Transaction Correction will not be successful  if transferred amount is used by Payee
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Search with User Mobile or KYC Mercahnt ID
And User Click Wallet Payment History and Click on reverse transaction for CASHIN ID4