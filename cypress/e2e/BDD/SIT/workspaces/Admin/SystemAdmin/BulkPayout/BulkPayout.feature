Feature: BulkPayout


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1378
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that System admin can download the error log file to view any errors that may have occurred while processing any record of the file.
 Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
 And Select service from dropdown list
 And Download a blank .csv file from Download a File template link
 And Enter Common Remarks
 Then update the json data for the Bulk Payout
And Upload the a. CSV file and assert the error message
When Click on download to download the error log file



 #Author:Rakesh
#Last Updated:4-7-23
#Comments
#Test Case_ID : TC_1412 ,TC_1366
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will not be able to perform any service through Bulk payout tool if the mandatory field - To Wallet No  in the uploaded file is  blank.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout by without entering the To Wallet NO
Then Assert the Error Message that Bulk Upload Failed
Then update the json data for Bulk Payout by without entering the To Wallet NO


 #Author:Rakesh
#Last Updated:4-7-23
#Comments
#Test Case_ID : TC_1393
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system should  display proper drop down list in the service field in the Bulk payout tool.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
Then Assert the Drop down options in Bulk Payout tool

#Author:Rakesh
#Last Updated:4-7-23
#Comments
#Test Case_ID : TC_1373
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario: To verify that proper error message will be displayed when the user upload another file along with CSV file
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
 And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Click on Bulk Payout Initiate
And Select the different service from dropdown list
And Enter Common Remarks
Then update the json data for Bulk Payout
And Upload the CSV file with the different service


 #Author:Rakesh
#Last Updated:4-7-23
#Comments
#Test Case_ID : TC_1392
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To Verify that, During the bulk payout service if user enter more than 200 characters in refrence field then he/she should not be able to go to further process
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
  And Select service from dropdown list
 Then Enter the Common Remark and Check for the Error Message
 Then update the json data for Bulk Payout
And Upload the a. CSV file and assert the error message
 Then check for the error message of Remark

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1427
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario: To Verify that, the admin user will be able to see all batches that belong to services to which it has access to "Bulk Payout Tool Approve" and "Bulk Payout Tool Dashboard".
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Approval link and view All the Batches
And Click on Bulk Payout Dashboard and view All the Batches
