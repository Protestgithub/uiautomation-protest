Feature: Category Rejection

# Author: Rakesh
# Last Updated:
# Comments 
# Test Case_ID : TC_859
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_385 To verfiy that system admin is able to reject the category request
Given Login into Mobiquity Portal as System admin Checker1
And Click Category Management.
Then Select Add Category.
And Enter Category Code and Category Name for category
Then Select Domain and Parent Category for Rejection
And Click on Submit & confirm button.
And Click Add category approval.
Then Select the Category for rejction
Then Select the category and Reject