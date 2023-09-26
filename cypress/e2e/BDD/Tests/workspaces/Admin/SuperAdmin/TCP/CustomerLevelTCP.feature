Feature: Customer level TCP view



# # Author: Kalyani M
# # Last Updated:
# # Comments : View
# # Test Case_ID : TC_25
# #
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite

Scenario:TC_78 To verify that master is able to View customer level TCP..
Given Login into Mobiquity Portal as Super admin Maker
When  Navigate to Transfer Control Profile to View Details


# # Author: Kalyani M
# # Last Updated:
# # Comments : Edit
# # Test Case_ID : TC_25
# #
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite

 Scenario:TC_82 To verify that master is able to edit customer level TCP..
 Given Login into Mobiquity Portal as Super admin Maker
 When  Navigate to Transfer Control Profile to Edit Details
 Then Verify Success Message for Edit

 
# # Author: Kalyani M
# # Last Updated:
# # Comments : Edit
# # Test Case_ID : TC_25
# #
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite


Scenario:TC_84 To verify Approval of Edit Customer Level TCP
 Given Login into Mobiquity Portal as Super admin Checker
 When  Navigate to Transfer Control Profile
 Then Approve the TCP2
 Then Verify the Modification Request message

# # Author: Kalyani M
# # Last Updated:
# # Comments : Deletion
# # Test Case_ID : TC_25
# #
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite

 Scenario:TC_83 To verify that master is able to delete customer level TCP if any user is not associated with it.
 Given Login into Mobiquity Portal as Super admin Maker
 When  Navigate to Transfer Control Profile to Delete Details
 Then Verify Success Message for TCP deletion

# Author: Rajesh
# Last Updated:
# Comments : View
# Test Case_ID : 
#
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@UAT
# test case tags
@prerequisite
Scenario:TC_523 To verify that superadmin should be able to Copy details of an existing Customer level TCP. 
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to Transfer Control Profile
Then Click on copy and enter all details
