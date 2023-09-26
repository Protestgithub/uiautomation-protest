Feature: TransferRule Approval Rejection

# Author: Narendra
# Last Updated:
# Comments 
# Test Case_ID : 
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@sanity
# test case tags
@test
Scenario:TC_407 To verify that System admin should be able to reject modified initiated Transfer Rule successfully.
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and from details.
And Select the To details for Initiaion
And Select the From & To category.
When User clicks on edit option.
Then Click on submit button.
Then Click on confirm button.
Then Verify Modify success Message
When User clicks on transfer rule approval for Rejection
And Select rule and Reject
Then Verify Reject success Message

# Author: Rakesh
# Last Updated:
# Comments 
# Test Case_ID : TC_1927
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_408 To verify that System admin should be able to Reject Suspend Transfer Rule successfully.
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and from details.
And Select the To details for Initiaion
And Select the From & To category.
When User clicks on edit option.
And Suspend the status in transfer rule
Then Click on submit button.
Then Click on confirm button Suspend Transfer Rule.
When User clicks on transfer rule approval for Rejection
And Select rule and Reject
Then Verify Reject success Message






# Author: Niroop H N 
# Last Updated:
# Comments 
# Test Case_ID : TC_576
# TC Number as Per Product Cases:TC_1864
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_498 To verify that active network admin can reject deletion of the initiated Transfer Rules between the Domains for particular MFS provider.
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        When User clicks on Delete option.
        Then Verify Delete initiate Message
        When User clicks on transfer rule approval for Rejection
        And Select rule and Reject
        Then Verify Reject success Message
