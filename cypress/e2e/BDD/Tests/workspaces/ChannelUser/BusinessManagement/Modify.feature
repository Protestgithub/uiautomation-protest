Feature: Modify Business user Details

    Feature Description

# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_444 TC_420 To verify that the business owner able to  modify user detail information

Given Log in with corporate user credential
When  Navigate to User Management and Click on Manage Users
And Select employee type  in drop down
And Enter Mobile number and KYC number in search menu for Employee
And Click on Action icon
Then Click on edit button for employee record

# # # Author:Sudheer
# # # Last Updated:
# # # Comments :
# # # Scenario_ID :
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_444 TC_420 To verify System admin is able to approve modification of employee by System admin 
Given Login into Mobiquity Portal as System admin Checker1 
Then Navigate to Checker Approvals and filter by Modified status
And User click on submitted user data
And Approve the Users
Then User status is approved




# # # Author:Prerna
# # # Last Updated:
# # # Comments :
# # # Scenario_ID :
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_445 TC_361 To verify Business User is able edit the user details of employee or hierarchy
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage Users
Then Select the user type from drop down and type the mobile Number and click on search 
And User Click on eye button 
Then Click on Edit User button 
And Click Next button four times 
And Confirm the edit details Of the User

# # # Author:Prerna
# # # Last Updated:
# # # Comments :
# # # Scenario_ID :
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_446 TC_361 To verify System admin is able to approve modification by head merchant on merchant details
Given Login into Mobiquity Portal as System admin Checker1 
Then Navigate to Checker Approvals and filter by Modified status
And User click on submitted user data
And Approve the Users
Then User status is approved




