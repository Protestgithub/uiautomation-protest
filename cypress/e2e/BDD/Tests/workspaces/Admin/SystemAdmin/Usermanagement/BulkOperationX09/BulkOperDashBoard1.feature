Feature: DashBoard Bulk Operations

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify that user is approved  successfully and Bulk user status is Completed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1 for approval
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:Approve the User
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Approvals and filter by Submitted status for SystemAdmin BulkOperation
And User click on System admin submitted Bulk user data
Then Bulk User status is approved

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify that user is rejected successfully and Bulk user status is Rejected
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1 for approval
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:Reject the User
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Approvals and filter by Submitted status for SystemAdmin BulkOperation
And User click on System admin submitted Bulk user data for reject
Then Bulk User status is rejected

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify after a failed upload the status is failed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
And Check Failed


#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify that when Completed filter is selected Completed status is shown
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Click on Filter and Select Completed

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify that when Rejected filter is selected Rejected status is shown
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Click on Filter and Select Rejected

#Author: Saswat
#date : 18/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:To verify that user is able to search using BulkID
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Search by BulkID
And Check if the bulkid is same or not

