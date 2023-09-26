Feature: Inverse C2C Validation

# Author: Rakesh
# Last Updated:
# Comments :
# Scenario_ID : TC_1176
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_420 To verify that system admin can able to add authorization profile
        ### Business ###
Given Login into Mobiquity Portal as System admin Maker
When Select Authorization profile and add profile
And select Business user type and select user role Head Merchant
Then Fill all Details and Create Business authorization profile

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_421 Approval of added profile
Given Login into Mobiquity Portal as System admin Checker1
Then Approve the Business authorization user

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_422 Login as modified headMerchant
Given Login with corporate user credential
When Check with Inverse C2C transaction 
