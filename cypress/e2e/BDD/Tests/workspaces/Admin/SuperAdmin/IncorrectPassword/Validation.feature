Feature: Validation for Invalid password attempt

# Author: Narendra
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_380 To verify that the User account should get locked after incorrect attempts(no. of attempts configured in the system)
Given Login into Mobiquity portal with invalid credentials
And Assert the User Blocked message

# Author: Narendra
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:Unbarring the user
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to User Management and Click on manage user
And Search by blocked Loginid and Click on Credentials and reset pin
And Logout

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario: Logging in with unbarred user
Then Unbar the locked account from the web