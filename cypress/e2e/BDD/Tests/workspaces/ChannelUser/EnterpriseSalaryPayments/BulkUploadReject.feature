Feature: Bulk Reject

# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :1377
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_434 To verify that system admin can reject the initiated modification of users in bulk.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout
And Upload a .csv file with valid details
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Click on BulkPayout tool
And Click on Bulk Payout Approval link.
And Select initiated service.
And Click on Reject button.
And Click on BulkPayout tool
# And Click on Bulk Payout Dashboard
# And Click on number of entries
# Then Verify Batch Id



# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID : 1364
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test


Scenario:TC_435 To verify that the user can reject the bulk payout initiated for any service.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data for Bulk Payout
And Upload a .csv file with valid details
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Click on BulkPayout tool
And Click on Bulk Payout Approval link.
And Select initiated service.
And Click on Reject button.
# And Click on BulkPayout tool
# And Click on Bulk Payout Dashboard
# And Click on number of entries
# Then Verify Batch Id
#Then Verify success



# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :1347
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_436 To Verify that, System user can edit the commission amount information (As per their validation based on transaction and commission reports). 
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then Edit the commission amount information
And Upload a .csv file with valid details
Then Logout
Given Login into Mobiquity Portal as System admin Checker1
When Click on BulkPayout tool
And Click on Bulk Payout Approval link.
And Select initiated service.
And Click on Approve button.
And Click on BulkPayout tool
And Click on Bulk Payout Dashboard
And Click on number of entries
Then Verify Batch Id
