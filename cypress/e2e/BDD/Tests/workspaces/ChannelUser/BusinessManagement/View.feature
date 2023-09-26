Feature: View Details


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


Scenario:TC_447 TC_399 To verify that the business owner able to view user detail information

Given Log in with valid credentials as corporate user
When  Click on user management and Manage users
And Select employee type  in drop down
And Enter Mobile number and KYC number in search menu for Employee1
Then Click on Action icon

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


Scenario:TC_448 TC_411 To verify that the business owner able to view order details.

Given Log in with corporate user credential
When  Click on user management and Manage users
And Select employee type  in drop down
And Enter Mobile number and KYC number in search menu for Employee1
And Click on Action icon
Then Click on order details for Employee


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


Scenario:TC_449 TC_507 To verify that the business owner able to view self information

Given Log in with corporate user credential
When  Click on user management and Manage users
And Select user type Self in drop down
And Click on search to view self information
And Click on Action icon

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
    
Scenario:TC_450 TC_359 To verify Business User is able view the user details of employee or hierarchy
Given Login with valid credentials as Head merchant
When Navigate to User Management and Click on manage Users    
Then Select the user type from drop down and type the mobile Number and click on search
And User Click on eye button 


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_452
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_619 To verify that the business owner able to view wallet Statement information.
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type Self in drop down
And Click on search to view self information
And User Click on eye button
Then Click on Wallet Payment History and check for Transaction details

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_463
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_620 To verify that the business owner able to view order details.
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type Self in drop down
And Click on search to view self information
And User Click on eye button
Then Click on Order Details

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_464
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_621 To verify that Business owner able to  filter the order using order date,service type,status
Given Login with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type Self in drop down
And Click on search to view self information
And User Click on eye button
Then Click on Order Details and filter by status

