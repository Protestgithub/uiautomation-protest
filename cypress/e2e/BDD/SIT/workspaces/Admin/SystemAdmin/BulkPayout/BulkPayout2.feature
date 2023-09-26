Feature: BulkPayout


 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1371
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags 

Scenario:To verify that proper success message will be displayed when the CSV file is uploaded successfully.
 Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
 And Click on Bulk Payout Initiate
 And Select service from dropdown list
 And Download a blank .csv file from Download a File template link
 And Enter Common Remarks
 Then update the json data for Bulk Payout
 And Upload a .csv file with valid details
 Then Assert the success message when CSV file is uploaded



 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1404
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will be able to perform any service through Bulk payout tool even if Common Remarks field is left blank.
   Given Login into Mobiquity Portal as System admin Maker
    When Click on BulkPayout tool
    And Click on Bulk Payout Initiate
    And Select service from dropdown list
    And Download a blank .csv file from Download a File template link
    Then update the json data for Bulk Payout
    And Upload a .csv file with valid details
    Then Assert the success message of Bulk upload



 #Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1403
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will be able to accept 200 characters in the Common Remarks field in Bulk payout tool.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
 And Enter the Common Remark less than 200 characters
Then update the json data for Bulk Payout
And Upload a .csv file with valid details
Then Assert the success message of Bulk upload





#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1415
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that system will be able to perform any service through Bulk payout tool even if the field - Individual Remarks  in the uploaded file is left blank.
 Given Login into Mobiquity Portal as System admin Maker
 When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout by without entering the Individual Remarks
Then Assert the success message of Bulk upload

