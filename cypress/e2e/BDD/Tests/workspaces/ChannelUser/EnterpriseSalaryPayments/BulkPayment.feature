Feature: Bulk Salary Payment

    Feature Description


# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_366
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_354 To verify that admin is able to initiate bulk upload
Given Log in with valid credentials as corporate user
When Click on enterprise payment
And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload


# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_367
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_355 To verify that admin is able to approve bulk upload through bulk payment approval process.
Given Login into Mobiquity Portal as Employee for corp
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success 
