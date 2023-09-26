Feature: Pricing Engine


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID :TC_66
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that tax is slotted and the tax will go into separate wallets
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on commission
And Click on any service to add service charge for Commission wallet
 Then Logout

 #version tags
@x.09
# suite tags
@SIT
# test case tags
@test

 Scenario:To verify that tax is slotted and the tax will go into separate wallets
Given Login into Mobiquity Portal as System admin Checker
When Click on Pricing Engine
 Then Approve the created service charge commission O2C


#Author:Rakesh
#Last Updated:30-7-23
#Comments
#Test Case_ID : TC_1301 & TC_1302
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that valid user cannot define Service Charge if To field is left blank or invalid in slab entry of Commission Setup.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Service Policy
Then Click on any service to add service charge and enter the Slab Amount


#Author:Rakesh
#Last Updated:30-7-23
#Comments
#Test Case_ID : TC_81
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that Service charge can be paid to Service Provider only
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Service Policy
Then Click on any service to add service charge and check for the Service Provider



