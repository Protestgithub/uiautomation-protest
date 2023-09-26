Feature:TCP Records View

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that user is able to view TCP records
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
And Assert the Records available
And Search a user and assert the fields

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that clear button in filter is working
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
And Filter and clear