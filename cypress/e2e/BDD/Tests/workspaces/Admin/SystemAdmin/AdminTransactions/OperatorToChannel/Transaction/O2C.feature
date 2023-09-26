Feature: Operator To Channel Initiation

    ############################################# Likith ######################################################

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_83
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test
    Scenario:TC_166,TC_SMOKE9 To verify that System admin can initiate the O2C successfully if valid details are entered.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        Then Click on submit and Confirm O2C



    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_86
    #
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04Smoke
    # test case tags
    @test
    
    Scenario:TC_167,TC_SMOKE10 To verify that O2C transfer after initiation for amount transfer should go for Approval 1.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1
        And Assert Initiated O2C for Transaction1

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_85
    #
    #TAGS
    #version tags
 @x.04 @x.06
    # suite tags
    @x.04sanity
    # test case tags
    @test

    Scenario:TC_168 To Verify that Channel admin can do O2C Enquiry.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And enter user mobile number and search
        When User Click on eye button
        And click wallet Payment history.
        And Enter TransactionID and check


    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_22
    #
    #TAGS
    #version tags
   @x.04 @x.06
    # suite tags
   @x.04sanity
    # test case tags
    @test

    Scenario:TC_169 To verify that the O2C transaction should go for approval 1 only if transaction amount is less than the O2C limit.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        Then Click on submit and Confirm O2C

    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
   @x.04sanity
    # test case tags
    @test
    Scenario:TC_170 To verify System Admin is able to perform O2C transaction approval 1
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1
        And Assert Initiated O2C for Transaction1


    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_21
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @x.04sanityprerequisites
    # test case tags
    @test

    Scenario:TC_171 To verify that the O2C transaction initiated and Approved to perform Transaction correction
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        Then Click on submit and Confirm O2C
        And Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID1
        And Assert Initiated O2C for Transaction2



    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_21
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
   @x.04sanityprerequisites
    # test case tags
    @test

    Scenario:TC_172 To verify that the O2C transaction initiated and Approved to view all the wallet transactions
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details
        Then Click on submit and Confirm O2C
        And Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID2
        And Assert Initiated O2C for Transaction3

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_87
    #
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
   @x.04sanity
    # test case tags
   # @test

    Scenario:TC_173 To set the o2c First Approval Limit
        Given Login into Mobiquity Portal as System admin Maker
        When User clicks on O2C transfer rules
        And Select Wholesaler Domain Name.
        And Select Wholesaler Category Name.
        Then Get First Approval Limit Value
        And Click on submit.
        And Click on confirm.
    

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_87
    #
    #
    #TAGS
    #version tags
   @x.04 @x.06
    # suite tags
    @x.04sanity
    # test case tags
   # @test

    Scenario:TC_174 To verify that if Approval 1 current status should be 'Passed' then , it go for next Approval as 'O2C transfer Approval 2'.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Operator to channel and click on O2C transfer initiate
        And Enter All the Mandatory Details for Approval2
        Then Click on submit and Confirm O2C
        And Logout

        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID3
        And Logout

        Given Login into Mobiquity Portal as System admin Checker2
        When Navigate to Operator to channel and click on O2C transfer Approval2

