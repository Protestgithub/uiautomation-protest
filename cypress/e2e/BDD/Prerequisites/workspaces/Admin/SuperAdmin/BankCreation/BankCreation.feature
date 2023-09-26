Feature: Bank and Wallet Creation

######################################### Bank Creation ############################################

# # Author: Narendra
# # Last Updated: /05/2022
# # Comments
# # Scenario_ID :
# # TestCase_ID : TC_04
# # Precondition : Application should be working. Super admmin should be active in the system.
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@Smoke
# test case tags
@prerequisite

Scenario: Product_TCID_325 and Product_TCID_327 To verify that User is able to add bank in the system successfully
Given Login into Mobiquity Portal as Super admin Checker 
When Navigate to Bank Master and Click on it
And Enter All the Required Details for Bank