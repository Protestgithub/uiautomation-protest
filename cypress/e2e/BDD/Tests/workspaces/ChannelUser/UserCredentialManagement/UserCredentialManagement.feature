Feature: UserCredentialManagement

# Author: Pratikshya Suar
# Last Updated: 
# Comments 
# Scenario_ID :
# TC_1938
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_507 To verify that Business User is able to set new password for itself or child user
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
#And Click on view Details and Click on Account info
And goto credencials submenu
And Reset password via email

# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# @UAT
# # test case tags
# @test
# Scenario:To login as an Merchant
# Given Login again into Mobiquity Portal as Merchant after password reset

# Author: Rajesh 
# Last Updated:
# Comments
# Scenario_ID :
#
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_508 To verify that PIN Reset message will be display on Credentials Management screen
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in search menu1
And Click on view Details and Click on credentials
Then PIN Reset message will be display on screen



# Author: Rajesh 
# Last Updated:
# Comments
# Scenario_ID :
#
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_509 To verify that User should be able to check the bank account which is link to bank
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of business user and KYC number in search menu1
And Click on view Details and Click on Account info
Then Click on bank account


# Author: Rajesh 
# Last Updated:
# Comments
# Scenario_ID :
#
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_510 To verify that reset button will clear search keyword. 
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
Then Enter LoginId and click on reset