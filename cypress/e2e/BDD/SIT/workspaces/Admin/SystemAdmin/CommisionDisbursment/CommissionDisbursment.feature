Feature: CommisionDisbursment



#Author:Rakesh
#Last Updated:04-08-2023
#Comments
#Test Case_ID : TC_1916
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags 
@Prereqisite
 Scenario:To verify that at the system level, all such transactions where operator is acting as payer are predefined in the system and need not be set up separately
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and Select from details for C2C.
And Select the To details for Initiaion of C2C
And Select the From & To category details for C2C
When Click on Add Transfer Rule Button fo C2CService.

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@Prereqisite
Scenario:TransferRule Approval
Given Login into Mobiquity Portal as System admin Checker1
When User clicks on transfer rule approval
And Select rule and approval for Inverse C2C2


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
Scenario:To Verify that Channel user is able to do C2C 
Given Login into Mobiquity Portal as Channel User4
And Click on Inverse Channel to Channel Link and Enter Details to add commission amount

 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1465 & 1452
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To Verify that If the disbursement method  selected  “Wallet” option then user will also have to select the "wallet type" for disbursement process.
    Given Login into Mobiquity Portal as System admin Maker
    When  Commission Disbursement Process and Commission Disbursement
    And Commision disbursment Select MFS provider and enter Mobile number
    Then Assert the Transaction details


 #Author:Rakesh
#Last Updated:20-7-23
#Comments
#Test Case_ID :TC_1464 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To verify that Business Users will not be able to transfer the commission amount from their Commission wallet to their normal wallet if Transfer amount is more than commission wallet balance
 Given Login into Mobiquity Portal as System admin Maker
       When  Commission Disbursement Process and Commission Disbursement
       And Commision disbursment Select MFS provider and enter Mobile number
       And Click on the Transaction User ID and Download the CSV
       Then Upload the Csv for Comission disbursment with Invalid amount
#Test Case_ID :TC_1389
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To Check that System admin Checker1 is able to Approve.(initiated and fail , approved CSV file)
Given Login into Mobiquity Portal as System admin Checker1
  When Click on BulkPayout tool
  And Click on Bulk Payout Approval link.
And Select the Service and Click on Approve for Initiation
And Click on Bulk Payout Dashboard
And Click on Bulk Payout Dashboard and Click on view for failed Status




 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1344 &TC_1469
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To Verify that, The Commission disbursement will be done in bulk using ‘Bulk pay-out’ tool feature.(downloading CSV)
        Given Login into Mobiquity Portal as System admin Maker
        When  Commission Disbursement Process and Commission Disbursement
        And Commision disbursment Select MFS provider and enter Mobile number
       And Click on the Transaction User ID and Download the CSV
       Then Upload the Csv for Comission disbursment

 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1343
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To Verify that, Invalid User is not able to excute the following steps for bulk approval process.
Given Login into Mobiquity Portal as System admin Maker
  When Click on BulkPayout tool
  And Click on Bulk Payout Approval link.
 Then Select the Service and Click on Approve with the Invalid User



