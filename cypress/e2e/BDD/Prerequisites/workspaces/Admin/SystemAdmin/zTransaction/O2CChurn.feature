Feature: Operator To Channel Initiation for churn


    # Author: Narendra
    # Last Updated:
    # Comments
    # Test Case_ID : 
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanityprerequisites
    # test case tags
    @test
    Scenario:TC_610 To verify that System admin can initiate the O2C successfully if valid details are entered.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details for Churn
        Then Click on submit and Confirm O2C



    # Author:Narendra
    # Last Updated:
    # Comments
    # Test Case_ID : 
    #
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanityprerequisites
    # test case tags
    @test

    Scenario:TC_611 To verify that O2C transfer after initiation for amount transfer should go for Approval 1.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1
        And Assert Initiated O2C for Transaction1
