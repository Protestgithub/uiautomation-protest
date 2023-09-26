Feature: Bank Deletion


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_96
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
@Smokeprerequisite
Scenario: Product_TCID_326 To verify that User is able to Delete bank in the system successfully.
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to Bank Master and Click on Modify service
And Select the Bank
Then Verify the sucess message of deleted bank