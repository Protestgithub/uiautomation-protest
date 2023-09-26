Feature: System Admin checker4 creation
# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID : TC_521
# @x.07 @x.09
@prerequisite

Scenario:TC_783 To verify that Master user can initiate add request of System admin if user set the whatever language
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to User Management and click on register
And Click On System Admin and select Single User
And Enter all Maker required Field for the new language
Then Confirmation message is displayed

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID : TC_521
#  @x.07 @x.09
@prerequisite

Scenario:TC_784 To verify that Master user can approve add initiation request of System admin to the changed language
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Checker Approvals and filter by Submitted status
And  User click on submitted user data
And Approve the Users and save loginID with new language
Then User status is approved

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID : TC_521
@Test
# @x.07 @x.09
@prerequisite
Scenario:TC_785 Checking whether we are able to login with created systemadmin crendentials with the changed language
Given Login into Mobiquity Portal as System admin Created by Master with changed language
Then Verify the text
