Feature: User Details Validation

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_1
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_412 To verify that Employer's wallet can be view by employer.
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type as Other
And Enter Mobile number and KYC number in search menu
And User Click on eye button
Then Click on Account Info of User


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_5
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_413 To verify that Employee can keep a track of only his activities
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type as Self and Search
And Click on eye button

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_347
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_414 To verify that Employer see the wallet type, currency, balance and status
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type as self
And User Click on eye button
Then Click on Account Info of User
And Verify the Balance of Employer

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_154
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_415 To Verify that the user account number will be display in encrypted form except last 3 digits.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in search menu
And User Click on eye button
Then Click on Account Info