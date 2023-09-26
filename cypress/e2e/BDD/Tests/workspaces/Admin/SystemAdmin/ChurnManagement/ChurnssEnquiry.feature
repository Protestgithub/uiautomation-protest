Feature: Churn Enquiry
    # # Author:Narendra
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :TC_896
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_386 To verify that enquiries can be performed using the unique batch ID being generated when the batch upload for the users is performed.
            Given Login into Mobiquity Portal as System admin Maker
            When Navigate to Churn Management and Click on Churn Enquiry
            And Enter BatchId and click on Submit
            Then Assert Churn BatchId

    # # Author:Narendra
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :TC_903
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_387 To verify that the valid user can enquire about the status of the churning process using the Enquiries module
            Given Login into Mobiquity Portal as System admin Maker
            When Navigate to Churn Management and Click on Churn Enquiry
            And Enter BatchId and click on Submit
            Then Verify the Approved status
