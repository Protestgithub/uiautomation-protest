Feature: Search and View Business User

# Author:  Niroop H N
# Last Updated:
# Comments    :
# Test Case_ID : 133
# TC Number as Per Product Cases:522
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_494 To verify that the business owner able to view Account Information. 
#refer Administrative Management 
Given Login into Mobiquity Portal as Channel User4
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in search menu4
And Click on view Details and Click on Account info
Then Click on order details for Employee 

# Author:  Niroop H N
# Last Updated:
# Comments    :
# Test Case_ID : 115 and 124 and 131
#              :444a nd 477 and 519,484
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_495 To verify that employer able to search hierarchy users and view 
Given Login with valid credentials as Head merchant
When Navigate to Manage User, and search Business Admin 
And Select Hierarchy in user type drop down And view user
And Click on view Details
And Click on Edit Information info
And Enter all the details to change profile details


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID : TC_527
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_521 To verify that the business owner able to view self Credentails information

Given Log in with corporate user credential
When Navigate to User Management and Click on manage user
And Select user type Self in drop down
And Click on search to view self information
And Click on Action icon
Then Click on Credentials and assert
