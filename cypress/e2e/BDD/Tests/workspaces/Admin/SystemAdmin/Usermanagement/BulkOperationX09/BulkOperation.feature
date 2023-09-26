Feature: Bulk Operations



# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify that User should be able to successfully uploaded the CSV file for User Registration.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed

And Select User type as Customer
And Download a blank .csv file for Multiple Users template1
And Upload the downloaded file for bulk user creation1
And Proceed the Uploaded file and Assert the response1
And Confirm the Register and Assert the success message
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify that the initiated Bulk Registration should be successfully Approve.
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Approvals and filter by Submitted status for SystemAdmin BulkOperation
And User click on System admin submitted Bulk user data
#And Approve the Users
Then Bulk User status is approved



# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify Download template button and Download Sample File should be visible and clickable
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type to Proceed

And Select User type as Customer
#And Download a blank .csv file for Multiple Users template1
And Download a blank .csv Sample File for Multiple Users
#Then Logout



# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify that Admin is able to modify data of the Registered user
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type Modify to Proceed

And Select User type as Customer
And Download a blank .csv file for Multiple Users View Details template
And Upload the downloaded file to View Details of bulk user
And Proceed the Uploaded file for Modification and Assert the response
And Download the Uploaded successfully file for Modification
And Proceed the Uploaded file for Modification and Assert the response1
And Upload the downloaded file for bulk user Modification
And Proceed the Uploaded file for Modification and Assert the response2
And Confirm the Register and Assert the success message
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify that the initiated Bulk Modification should be successfully Approved.
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Approvals and filter by Submitted status for SystemAdmin Modified BulkOperation
And User click on System admin submitted Modified Bulk user data
#And Approve the Users
Then Bulk User status is approved





# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    
    # test case tags
    @test


Scenario:To verify that Admin is able to Download the Failed file during modify data of the Registered user
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Bulk Operations
And Select Module and Service type Modify to Proceed

And Select User type as Customer
And Download a blank .csv file for Multiple Users View Details template >> Failed case
And Upload the downloaded file to View Details of bulk user
And Proceed the Uploaded file for Modification and Assert the response
And Download the Failed status file for check the reason and try to click Proceed
#Then Logout
