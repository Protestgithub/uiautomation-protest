Feature: DashBoard BulkOperations


#Author: Prerna
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

Scenario:To verify that if the status is uploaded, view details button should be clickable and after opening the details user should be able to submit from there
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
When Navigate to Bulk Operations
And Filter by Uploaded status
And Click on view details of first record
And Submit for approval from inside view details

#Author: Prerna
#date : 19/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test

Scenario:To verify that if the status is uploaded, view details button  should be clickable and user should be able to cancel upload from there and status should change to cancelled
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
When Navigate to Bulk Operations
And Filter by Uploaded status
And Click on view details of first record
And store the bulk id of first record 
And cancel from inside view details
When Navigate to Bulk Operations
And search with stored bulkid, check the status


#Author: Prerna
#date : 19/05/23
#Last Update: 
#Comments
# test case_ID:

#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test

Scenario:To verify if status is uploaded, user should be able to submit from dashboard and status changed to submitted    
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
When Navigate to Bulk Operations
And Filter by Uploaded status
And store the bulk id of first record from records 
And Submit from dashboard
When Navigate to Bulk Operations
And search with stored bulkid, check the status


#Author: Prerna
#date : 19/05/23
#Last Update: 
#Comments
# test case_ID:
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test

Scenario:To verify if status is uploaded, user should be able to cancel from dashboard and status changed to cancelled    
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed
And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
When Navigate to Bulk Operations
And Filter by Uploaded status
And store the bulk id of first record from records
And Cancel from dashboard
When Navigate to Bulk Operations
And search with stored bulkid, check the status
