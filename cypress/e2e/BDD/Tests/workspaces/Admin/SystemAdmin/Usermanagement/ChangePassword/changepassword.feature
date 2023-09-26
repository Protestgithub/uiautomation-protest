Feature:Change Password

# Author: Rakesh SV
# Last Updated:
# Comments    : 
# Test Case_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smoke 


Scenario: TC_Smoke39 To verify that user should be able to change his/her password by entering his/her old password successfully.
Given Login into Mobiquity Portal as System admin Checker3
When Navigate to Profile icon and Click on Profile icon
And Click On Setting and click on Change Password
And Enter Old password and Enter New Password and Confirm New Password
Then Click on the change Password Button
Given Login into Mobiquity Portal as System admin with newly created Password

