
Feature: Reject Transfer rule

# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID : TC_1924
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario: TC_443 To verify that active network admin can reject  the add initiated Transfer Rules between the same domains.
 Given Login into Mobiquity Portal as System admin Maker
 When User Click on Transfer Rule.
 And Select the Service Name and from details.
 And Select the To details for Initiaion
 And Select the From & To category.
 When Click on Add Transfer Rule button.
 And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level
 Then click on submit button.
 Then Click on confirm button.
 Then Verify initiate success Message



# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_573 Reject Initiation
 Given Login into Mobiquity Portal as System admin Checker1
 When User clicks on transfer rule approval
 And Select rule and reject
 #Then click on submit
 Then Verify Approval success Message for Rejection


