Feature: O2C

    ############################################# Prerna ######################################################



    # Author: Prerna
    # Last Updated:
    # Comments

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


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_161 To verify that if Approval 1 current status should be 'Passed' then , it go for next Approval as 'O2C transfer Approval 2'.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details for Allocation for Approval2
        Then Click on allocation and Submit
        And Click on MyActivity, filter Owner To Channel and get Creation on time

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_162 To verify System admin Checker1 is able to perform Approval1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_163 To verify System admin Checker2 is able to perform Approval2
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_164 To Verify that Channel admin can do O2C Enquiry
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Search by Transaction ID for O2C Allocation and Enquire

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_186
    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_165 To verify that proper error message should be displayed when business user is suspended in the system
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Allocation
        And Enter All the Mandatory Details with Suspended Mobile number
        Then Confirm Suspended Error Message