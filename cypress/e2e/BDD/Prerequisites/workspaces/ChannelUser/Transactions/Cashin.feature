Feature:Cashin

    #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @prerequisite @UAT
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
    @prerequisite @UAT
    # test case tags
    @test
    Scenario:TC_160 To verify that System admin checker is able to approve the O2C allocation
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to approvals
        And Click on filter, type Owner to channel in workflow and apply
        And User clicks O2C data
        And Approve and Yes
        Then Confirm the Success Message for O2C Approval1

            #TAGS
    #version tags
    @x.07 @x.09
    # suite tags
    @prerequisite @sanity
    # test case tags
    @test
    Scenario:TC_163 To verify System admin Checker2 is able to perform Approval2
        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to approvals
        And User click on submitted user data
        And Approve the Users for Admin Creation

    ########################### Cashin ########################

    # # # # Author:Narendra
    # # # # Last Updated:
    # # # # Comments :
    # # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @prerequisite @Smoke 
    # test case tags
    #@test
    Scenario:TC_69,TC_Smoke11 To verify that Channel User is able to Perform Cash in for Subscriber1
        Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter all Mandatory details for CashIn
        Then Click on Submit and Click on Confirm Button

    # ########################### Cashin ########################

    # # # # Author:Narendra
    # # # # Last Updated:
    # # # # Comments :
    # # # # Scenario_ID :Pre Requisit
    # #TAGS
    # #version tags
    @x.04 @x.06
    # # suite tags
    @x.04sanityprerequisites
    # # test case tags
     @test
     Scenario: To verify that Business admin is able to Perform Cash in for Subscriber1
         Given x.4 Login into Mobiquity Portal as Business User3
         When Navigate to Cash in or Cash out and Click on Cash in
         And Enter all Mandatory details for CashIn
         Then Click on Submit and Click on Confirm Button

    # # # Author:Narendra
    # # # Last Updated:
    # # # Comments :
    # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
   @prerequisite  @Smoke
    # test case tags
    @test

    Scenario:TC_70 ,TC_Smoke16 To verify that Channel User is able to Perform Cash in for Subscriber2
        Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter all Mandatory details for CashIn
        Then Click on Submit and Click on Confirm Button1

    # # # Author:Narendra
    # # # Last Updated:
    # # # Comments :
    # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
   @prerequisite @Smoke
    # test case tags
    @test
    Scenario:TC_71  TC_SMOKE36 To verify that Channel User is able to Perform Cash in for Subscriber3
        Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter all Mandatory details for CashIn
        Then Click on Submit and Click on Confirm Button2
