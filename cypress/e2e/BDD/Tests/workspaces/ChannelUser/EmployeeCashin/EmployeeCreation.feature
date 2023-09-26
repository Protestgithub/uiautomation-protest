Feature: Employee Cashin

# Author: Rajesh
# Last Updated:
# Comments :
# Scenario_ID : 

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test


Scenario:TC_511 To Verify that the Distibuter user can initiate the creation of employee user.
Given Login into Mobiquity Portal as Business admin User4
When Navigate to User Management and Click on register
And Select User type as Business and Select user role Employee
And Enter all the Employee Details for Cashin
Then Confirmation message is displayed


#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_586 To Verify that the Distibuter user can Approve the creation of employee user.
Given Login into Mobiquity Portal as System admin Checker1
     When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved


# Author: Rajesh
# Last Updated: 
# Comments 
# Scenario_ID :
# TC_02
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_512 To verify that Employer's wallet can be used by employee for all transactions.
Given Login into Mobiquity Portal as Business admin User4
When Navigate to Manage User and Copy the Self Wallet Amount
