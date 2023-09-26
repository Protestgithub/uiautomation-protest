Feature: Grade Management


    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_13
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_612 To verify that master can not modify the grade code only the name of the grade can be modified
        Given Login into Mobiquity Portal as Super admin Checker
        When Click on User Profile Management >> Modify Grade
        And Do required changes.
        And Click on Modify.
        And Click on confirm button for grade

# Author: Likith R
# Last Updated:
# Comments
# Test Case_ID : TC_177
#
# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# 
# # test case tags
# @test

#Scenario:To verify that master can delete grade successfully
#Given Login into Mobiquity Portal as Super admin Checker
#When Click on User Profile Management >> Delete Grade


# Author: Niroop H N
# Last Updated:
# Comments 
# Test Case_ID : TC_268
#              :953
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@UAT
# test case tags
@prerequisite
Scenario:TC_485 To verify that Superadmin can modify the  grade name.
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Modify Grade
And Select and modify Grade name