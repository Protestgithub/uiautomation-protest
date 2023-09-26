Feature: Operator to Channel for Channel User


        Bulk initiate of Operator to Channel transfer

# # Author: Arpitha C
# # Last Updated:27/06/2022
# # Comments 
# # Test Case_ID :88 
# # 
##TAGS
##version tags
@x.04 @x.06
## suite tags
#
## test case tags
@x.04Smokeprerequisite

 Scenario:TC_537 To verify that system should perform O2C transaction for Business User.

 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Operator to channel and click on O2C transfer initiate
 And Enter All the Mandatory Details for bulkpayout of business user
 Then Click on submit and Confirm2 for bulk
 And logout the user for Bulk



##TAGS
##version tags
@x.04 @x.06
## suite tags
#
## test case tags
@x.04Smokeprerequisite
 Scenario:TC_538 To verify that system is able to approve
 Given Login into Mobiquity Portal as System admin Checker1
 When Navigate to Operator to channel and click on O2C transfer Approval1
 And logout the user for Bulk