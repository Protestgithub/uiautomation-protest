Feature: Domain,Category and Grade Creation





##################################### Domain Creation ################################################


# Author: Likith R
# Last Updated:
# Comments 
# Test Case_ID : TC_08
# 
#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_27 To verify that System admin should be able to add domain in the system.
Given Login into Mobiquity Portal as System admin Maker
When User Click on Domain Management >> Add Domain
And Enter Domain Name and Domain Code.
Then Click on submit button for add domain

##################################### Category Creation ################################################


# Author: Likith R
# Last Updated:
# Comments 
# Test Case_ID : TC_09

#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_28 To verify that System admin should be able to add Category in the system.
Given Login into Mobiquity Portal as System admin Maker
And Click Category Management.
Then Select Add Category.
And Enter Category Code and Category Name.
Then Select Domain and Parent Category.
And Click on Submit & confirm button.

# Author: Likith R
# Last Updated:
# Comments 
# Test Case_ID : TC_10 & TC_176

#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_29 To verify that only System admin will be able to approve/reject the initiated category.
Given Login into Mobiquity Portal as System admin Checker1
And Click Add category approval.
Then Select Category approval.
Then Select the category that needs to be approved
