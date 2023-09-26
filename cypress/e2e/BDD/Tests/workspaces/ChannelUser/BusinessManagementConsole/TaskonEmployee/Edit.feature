Feature: Business Management Console

    Feature Description

# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
@UAT

Scenario:TC_356 TC_420 To verify that the business owner able to  modify user detail information

Given Log in with valid credentials as corporate user
When  Click on user management and Manage users
And Enter Mobile number and KYC number in search menu for Employee
#And Click on search
And Click on Action icon
Then Click on edit button