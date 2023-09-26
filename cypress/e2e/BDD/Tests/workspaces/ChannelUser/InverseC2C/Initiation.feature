Feature: Inverse C2C Initiation




# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID :Tc-543
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_591 To verify that user is able to transaction the money 
Given Log in with Merchant user credential
When Click On Inverse C2C Transfer
And Enter all details for Inverse C2C transaction
Then Verify Success message for Inverse C2C transaction

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC-544

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_592 To verify that time exact showing in the history according to the transaction
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in Search menu
And Click on view Details and Click on Wallet Payment History

