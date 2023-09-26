Feature: Category Creation

# Author: Narendra
# Last Updated:
# Comments 
# Test Case_ID : 
# 
    #TAGS
    #version tags
    @x.07 @x.09 @x.06
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

Scenario:TCP_335 ,TC_Smoke20 To verify that Business admin should be able to add Category in the system.
Given Login into Mobiquity Portal as Business admin Maker
When Click Category Management in BA
And Select Add Category1.
And Enter Category Code and Category Name for BA
And Select Domain and Parent Category for BA
Then Click on Submit & confirm button.


# Author: Narendra
# Last Updated:
# Comments 
# Test Case_ID : 
# 
    #TAGS
    #version tags
    @x.07 @x.09 @x.06
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

Scenario:TC_336 To verify that only System admin will be able to approve/reject the initiated category By Business Admin
Given Login into Mobiquity Portal as System admin Checker1
When Click Add category approval1.
And Select Category approval for BA
Then Select the category that needs to be approved
