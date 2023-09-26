Feature: O2C for churn


    # Author: Prerna
    # Last Updated:
    # Comments

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @prerequisite @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_608 To verify that System admin can initiate the O2C allocation successfully if valid details are entered.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details for Allocation for Churn
        Then Click on allocation and Submit
        And Click on MyActivity, filter Owner To Channel and get Creation on time


    ############################################# Prerna ######################################################
    # Author: Prerna
    # Last Updated:

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_609 To verify that System admin checker is able to approve the O2C allocation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes
        Then Confirm the Success Message for O2C Approval1
