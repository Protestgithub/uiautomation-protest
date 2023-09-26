Feature: ForgotPassword

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_490 & TC_491 & TC_492
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags   
Scenario:To verify that on clicking on forgot password, user is directed to the page where user is asked to enter email Id or phone number
Given Login into Mobiquity Portal as SystemAdmin and check for Forgot Password
When Click on Forgot password
And Enter the EmailID and click on verify
Then assert the security question page