Feature: Identical Transaction

   
# Author: Sudheer
# Last Updated:16/01/2023
# Comments 
# Test Case_ID :

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_359 TC_985 To verify that user able to click on delete button

Given Login into Mobiquity Portal as System admin Maker
When Click on identical transaction
And Click on service type drop drop
And Click on submit button
And Enter time interval value
And Select action on identical transaction
Then Click on delete button