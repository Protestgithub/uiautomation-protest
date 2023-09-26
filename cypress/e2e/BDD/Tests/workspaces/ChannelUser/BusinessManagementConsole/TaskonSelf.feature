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

Scenario:TC_358 To verify that the business owner able to view self information

Given Log in with corporate user credential
When  Click on user management and Manage users
And Select user type Self in drop down
And Click on search to view self information
And Click on Action icon
#Then Click on User Details
