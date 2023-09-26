
Feature: BusinessAuthProfile Teardown 

# Author: 
# Last Updated:
# Comments : 
# Scenario_ID : 

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
Scenario:TC_288 To verify that system admin should be able to Delete BusinessUser authorization profile

      #Business -- Distributor
      Given Login into Mobiquity Portal as System admin Maker
      When Select Authorization profile
      And Click on filters and select distributer
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
Scenario:TC_289 To Approve the Deleted Distributor
      Given Login into Mobiquity Portal as System admin Checker1
      When Navigate to Checker Approvals and filter by Submitted status 
      And User click on submitted user data for Distributor
      And User click on approve delete request
      Then Verify Sucess Message for Authorization profile