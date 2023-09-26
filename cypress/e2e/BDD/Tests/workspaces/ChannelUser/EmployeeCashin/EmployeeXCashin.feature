Feature: Employee Cashin

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_159 To verify that System admin can initiate the O2C allocation successfully if valid details are entered.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details for Allocation
        Then Click on allocation and Submit
        And Click on MyActivity, filter Owner To Channel and get Creation on time


    ############################################# Prerna ######################################################
    # Author: Prerna
    # Last Updated:

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_160 To verify that System admin checker is able to approve the O2C allocation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes
        Then Confirm the Success Message for O2C Approval1



# Author: Rajesh
# Last Updated: 
# Comments 
# Scenario_ID :
# TC_02
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_587 Perform Cashin
Given Login into Mobiquity Portal as Employee After Logout
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for CashIn
Then Click on Submit and Click on Confirm Button1

# Author: Rajesh
# Last Updated: 
# Comments 
# Scenario_ID :
# TC_02
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_588 To verify that Employer's wallet can be used by employee for all transactions.
Given Login into Mobiquity Portal as Business admin User4 After Logout
When Navigate to Manage User and Copy the Self Wallet Amount after CashIn
# Then Compare that CashIn amount is deducted or not


