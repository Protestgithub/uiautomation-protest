Feature: CommisionDisbursment


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1355
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario: To Verify that, Approver system admin can reject  any intiated batched. if there is somethig missing
Given Login into Mobiquity Portal as System admin Checker1
 When Click on BulkPayout tool
  And Click on Bulk Payout Approval link.
  Then Select the Initiated Service and Click on Reject


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID :TC_1471 & TC_1470
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
@prerequsite
Scenario:To Verify that, The Commission disbursement will be done in bulk using ‘Bulk pay-out’ tool feature. 
        Given Login into Mobiquity Portal as System admin Maker
        When  Commission Disbursement Process and Commission Disbursement
        And Commision disbursment Select MFS provider and enter Mobile number
       And Click on the Transaction User ID and Download the CSV
       Then Upload the Csv for Comission disbursment

#Test Case_ID : TC_1356 & TC_1357 &TC_1468
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:TC_1356To Verify that, Once batch is approved then, commission will be disbursed from business user’s commission SVA to their normal SVA.(batch ID in ‘Bulk pay-out Dashboard)
Given Login into Mobiquity Portal as System admin Checker1
 When Click on BulkPayout tool
  And Click on Bulk Payout Approval link.
And Select the Service and Click on Approve for Initiation
And Click on Bulk Payout Dashboard
And Click on Bulk Payout Dashboard and Click on view BUlk ID




 #Author:Rakesh
#Last Updated:30/7/23
#Comments
#Test Case_ID : TC_1358
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To Verify that User is able to initiate the bulk payout service if he/she has been created the Services like Withdraw accrued commission
Given Login into Mobiquity Portal as System admin Maker
    When Commission Disbursement Process and Commission Withdraw Initiate
    And Commision disbursment Select MFS provider and enter Mobile number
    And Click on the Transaction User ID for Comission withdraw Initiate and Download the CSV
    Then Upload the Csv for Comission Withdrawal Initiate

#Test Case_ID : TC_1358
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario: Verify that, Once batch for Withdraw accrued commission
Given Login into Mobiquity Portal as System admin Checker1
 When Click on BulkPayout tool
  And Click on Bulk Payout Approval link.
And Select the Service and Click on Approve for Withdrawal Initiation



#Author:Rakesh
#Last Updated:30/7/23
#Comments
#Test Case_ID : TC_1473
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:To Verify that, Commission wallet can’t credit negative amounts.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to BulkPayout tool and Click on BulkPayout Initiation
Then Upload the Csv for Comission disbursment with the Negative value
