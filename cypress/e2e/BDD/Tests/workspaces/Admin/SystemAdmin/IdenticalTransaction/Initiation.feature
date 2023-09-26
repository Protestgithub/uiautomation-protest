Feature: Identical Transaction

# Author: Pratikshya
# Last Updated:
# Comments 
# Test Case_ID : TC_998 and TC_975
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_441 To verify that user is able to initiate identical transaction.
Given Login into Mobiquity Portal as System admin Maker
When Click on identical transaction
And Click on service type drop down
And Click on submit button
And Enter time interval value for identical transaction
And Select action on identical transaction
Then Click on save button

Scenario:TC_442 To Perform Cash in
Given Login into Mobiquity Portal as Business user for cash in
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for Cashin
Then Click on Submit and Click on Confirm Button
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for Cashin
Then Click on Submit and Click on Confirm Button for error