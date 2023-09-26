Feature: Operator To Channel Validation Message Verification

    ############################################# Narendra ###################################################

    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_186
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanity
    # test case tags
    @test

    Scenario:TC_175 To verify that proper error message should be displayed when business user is suspended in the system
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        And Click on submit and Confirm
        Then Confirm the Error message

    # Author: Narendra
    # Last Updated: 27/04/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_165
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanity
    # test case tags
    @test

    Scenario:TC_176 To verify that proper error message should be displayed when amount field contains any invalid character
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory details and type Invalid Character in Transfer amount
        And Click on submit and Confirm Error Message

# Author: Narendra
# Last Updated: 27/04/2022
# Comments
# Scenario_ID :
# TestCase_ID : TC_166
# #TAGS
# #version tags
# @x.04 @x.06
# # suite tags
# @sanity
# # test case tags
# @test
# Scenario: To verify that proper error message should be displayed when no stock is present in the IND01 wallet.
# Given Login into Mobiquity Portal as System admin Maker
# When Navigate to Operator to channel and click on O2C transfer initiate
# And Enter All the Details
# And Click on submit and Confirm

# Author: Rajesh
# Last Updated:
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_1007
#TAGS
#version tags
@x.04
# suite tags
@UAT
# test case tags
@test

Scenario:TC_506 To verify that User other than Valid user can't approve the initiated O2C Successfully.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Approvals
And Click on filter, type Owner to channel in workflow and apply
And User clicks O2C data
Then Assert the error message