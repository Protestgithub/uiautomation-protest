Feature: UserManagement

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_431
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify proper error message should display if provided firstName, DOB is valid and lastName is empty/invalid
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Adminstrator and click on BusinessAdmin
And Enter the valid Detail for firstName and Invalid detail for lastName


 # # Author: Rakesh 
# # # # Last Updated: 
# # # # Comments :
# # # # Scenario_ID : TC_464
# # # #
# #TAGS
# #version tags
# @x.6 @x.7
# #suite tags
    Scenario:To verify user is able to approve successfully after uploading the physical verification document
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Adminstrator and click on Customer care Admin
        And Enter all the details for Customercare Admin
        And Enter Customer Care Admin Profile Details And Upload the file
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Customer care Admin Mobile Number and Write Created on time
# #TAGS
# #version tags
# @x.6 @x.7
# #suite tags

    Scenario: Approval for created Customer Care Admin
        Given Login into Mobiquity Portal as System admin Checker1
        Then Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for CCA
        And Approve the Users for Admin Creation
        Then User status is approved