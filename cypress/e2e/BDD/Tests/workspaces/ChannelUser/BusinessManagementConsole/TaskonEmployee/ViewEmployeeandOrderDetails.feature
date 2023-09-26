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
    @UAT
    # test case tags
    @test


Scenario:TC_355 TC_399 To verify that the business owner able to view user detail information

Given Log in with valid credentials as corporate user
When  Click on user management and Manage users
And Enter Mobile number and KYC number in search menu for Employee
#And Click on search
Then Click on Action icon


# Author: Sudheer
# Last Updated:
# Comments 
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_357 TC_463 To verify that the business owner able to view order details.

Given Log in with valid credentials as corporate user
When  Click on user management and Manage users
And Enter Mobile number and KYC number in search menu for Employee
#And Click on search
And Click on Action icon
Then Click on order details for Employee