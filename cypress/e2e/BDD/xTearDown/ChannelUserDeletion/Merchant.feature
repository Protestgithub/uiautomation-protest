Feature: Deletion of Merchant Details

    Feature Description


#Author : Prerna
# TC : 108 (Part1: modification)
#TAGS
@TearDown


@Smokeprerequisite
#Author : Prerna
# TC : 109 (Part1: deletion)
Scenario: TC_362 To verify Business User is able to delete the user of lower hierarchy
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage Users
Then Select the user type from drop down and type the mobile Number and click on search
Then Business User is able to Delete the User


#Author : Prerna
#TAGS
# TC : 109 (Part2: approval by system admin)
@Smokeprerequisite
@TearDown
Scenario:TC_362 To verify System admin is able to approve deletion of merchant by head merchant
Given Login into Mobiquity Portal as System admin Checker1
Then Navigate to Approvals, click on filter, type Delete User in workflow and apply
Then Click on first Record, check mobile number and approve