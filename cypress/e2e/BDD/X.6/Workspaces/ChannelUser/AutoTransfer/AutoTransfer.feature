
Feature: Auto Transfer To Bank


# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID : 418
#TAGS
#version tags
@x.04 @x.06 @x.07
# suite tags
@UATHP
# test case tags
@test


Scenario:To verify Frequency screen is having all listed details -Start Date,Repeat,Time,CANCEL BUTTON and NEXT BUTTON
Given Log in with valid credentials as corporate user
When Navigate to Banking Services And click on Auto Transfer to Bank
And click on Setup Button 
And Assert the Start Date,Repeat,Time,Cancel Button and Next Button
