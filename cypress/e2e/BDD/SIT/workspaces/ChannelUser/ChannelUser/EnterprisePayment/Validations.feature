Feature: Enterprise Payment Validations

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that the users are not able to view the batches which have neither initiated nor approved by them.
Given Log in with valid credentials as corporate user
And Click On Enterprise Dashboard
Then Verify users are not able to view the batches which have neither initiated nor approved

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario: To verify that bulk transaction initiator is not able to approve the transaction which he/she initiated. It must be done by some other user.
When Click on enterprise payment
And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload
And Click on enterprise payment appproval1
Then Verify Initiator cannot approve the transaction

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario: To verify that the file which is being uploaded, must contain the following naming format “<Company Code>_FileName.csv” e.g.: If Company Code is ComV, this should read ComV_FileName.csv
Then Verify the downloded file is in csv format

