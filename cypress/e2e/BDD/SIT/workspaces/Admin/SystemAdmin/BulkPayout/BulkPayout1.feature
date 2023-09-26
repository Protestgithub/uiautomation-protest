Feature: BulkPayout


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1376
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To Verify that System will not allowed to upload the file when User enters Invalid detail.
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
 And Select service from dropdown list
 And Download a blank .csv file from Download a File template link
 And Enter Common Remarks
 Then update the json data for the Bulk Payout
  Then check the error message when the upload file content is invalid


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1372
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that proper error message will be displayed when the user doesn't  upload CSV file.
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
 And Select service from dropdown list
 And Download a blank .csv file from Download a File template link
 And Enter Common Remarks
 Then update the json data for the Bulk Payout
  Then check the error message when invalid CSV is uploaded


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1367
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will not be able to perform any service through Bulk payout tool if no file is uploaded.
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
Then click on submit and Assert the error message



#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1369
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will  download proper file template in Bulk payout tool.
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
 And Select service from dropdown list
 And Download a blank .csv file from Download a File template link




 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1410
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - From User Type/From Mobile Number  in the uploaded file is blank.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout by without entering the Mobile Number

Then Assert the Error Message that Bulk Upload Failed 



 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1411
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will not be able to perform any service through Bulk payout tool if the mandatory field - To MFS Provider  in the uploaded file is blank.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout by without entering the To MFS Provider

Then Assert the Error Message that Bulk Upload Failed 


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1414
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will not be able to perform any service through Bulk payout tool if the mandatory field - Amount  in the uploaded file is left blank.
Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout by without entering the Amount
Then Assert the Error Message that Bulk Upload Failed 
