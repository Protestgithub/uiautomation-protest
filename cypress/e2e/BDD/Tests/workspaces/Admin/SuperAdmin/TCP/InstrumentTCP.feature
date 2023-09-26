Feature: Transfer Control Profile error message and customer level TCP view



# Author: Kalyani M
# Last Updated:
# Comments : Error Message_provider
# Test Case_ID : TC_24
# 
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite

Scenario:TC_76 To verify the error message when Provider is empty.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
And  Click on Add New Button1
And  Click on Create Button1
Then Verify Error Message for Provider

# Author: Kalyani M
# Last Updated:
# Comments : Error Message_Domain
# Test Case_ID : TC_24
# 
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite

Scenario:TC_77 To verify the error message when Domain is empty.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
And  Click on Add New Button1
And  Click on Create Button1
Then Verify Error Message for Domain


# # # Author: Kalyani M
# # # Last Updated:
# # # Comments Error MEssage
# # # Test Case_ID : TC_24
# # # 
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@sanity
# test case tags
@prerequisite
 Scenario:TC_79 To verify the error message when instrument level TCP added with same Profile Name.
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
 And  Click on Add New Button1
 Then Enter required Fields for error message
 And  Click on Create Button1
 Then Verify Error Message


# # # # Author: Kalyani M
# # # # Last Updated:
# # # # Comments 
# # # # Test Case_ID : TC_26
# # # #
# #TAGS
# #version tags
# @x.04 @x.07 @x.09 @x.06
# # suite tags
# @sanity
# # test case tags
# @prerequisite
# Scenario:TC_80 To verify that the instrument level TCP cannot be deleted if any user is associated with it.
# Given Login into Mobiquity Portal as System admin Maker
# When  Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
# Then Click on delete icon
# Then Verify Error Message for deletion

# # # # Author: Kalyani M
# # # # Last Updated:
# # # # Comments 
# # # # Test Case_ID : TC_26
# # # #
# #TAGS
# #version tags
# @x.04 @x.07 @x.09 @x.06
# # suite tags
# @sanity
# # test case tags
# @prerequisite
# Scenario:TC_81 To verify that the instrument level TCP cannot be deleted if any user is associated with it.
# Given Login into Mobiquity Portal as System admin Checker1
# Then Click on Instrument Level TCP
# Then Verify the deletion Request message