Feature: View Business User Details

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_470
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
# test case tags
@test
@UAT
Scenario:TC_622 To verify that Business owner able to see wallets- wallet type, currency.
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage user
And Select user type as Hierarchy and Search
And User Click on eye button
Then Check for the wallets


# Author: Rakesh 
# Last Updated:
# Comments : 
# Scenario_ID : TC_517
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
# test case tags
@test
@UAT
Scenario:TC_623 To verify that Business owner able to use filter on Date, status.
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage user
And Select the user type as self
And User Click on eye button
Then Click on Order Details and filter by status

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_472
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
# test case tags
@test
@UAT
Scenario:TC_624 To verify that the business owner able to view Credentials.
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage user
And Select user type as Hierarchy and Search
And User Click on eye button
Then Check for the Credential information and Assert the Pin & Password