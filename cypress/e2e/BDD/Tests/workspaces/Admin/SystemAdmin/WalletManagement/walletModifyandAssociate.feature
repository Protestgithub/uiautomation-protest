Feature: Wallet Modification and Association

# Author: Rajesh
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_34

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smoke
# test case tags
@test

Scenario:TC_518,TC_Smoke14 To verify that User should be able to view the associated services with the wallet while viewing the wallet
Given Login into Mobiquity Portal as System admin Maker
When Navigate Multiple Wallet Management and Click on View Wallet
Then Check that user is able to view associate service with wallet


# Author: Rajesh
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_33
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_519 To verify that user is able to Modify the Wallet name only.
Given Login into Mobiquity Portal as System admin Maker
When Navigate Multiple Wallet Management and Click on Modify Wallet
Then Check that user is able to Modify the Wallet name


# # Author: Monica D R
# # Last Updated: 13-10-2022
# # Comments 
# # Scenario_ID :
# # 
 #TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smoke
# test case tags
@test

 Scenario:TC_Smoke40 To verify that the user is able to associate new wallet with MFS Provider.
 Given Login into Mobiquity Portal as Super admin Checker
 When Navigate to MFS provider Wallet Type Master and click modify delete Wallet
 And Select the MFS that needs to be Associated Or Deassociated
 Then Associate MFS
