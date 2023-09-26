Feature: Stock Validation
    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1667
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_360 Verify that error message is diaplyed if transaction id entered is in format other than numeric value
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Stock Enquiry
        And Enter non numeric Incorrect Transaction Id
        Then Verify Non numeric Incorrect transactionID error message



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1667
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_361 To Verify that if user want to intiate stock then, the user must have an amount equal to the stock creation in the bank
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock initiation
        Then User must have an amount equal to the stock creation in the bank

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1667
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_362 To Verify that, User can be used IND02 - Breakage (Unclaimed Money) wallet  for stock withdrawal. 
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock Withdrawal
        And Enter all required details for INDTAX02 wallet
        Then Click on submit and confirm for withdrawal
        And Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Stock Management and click on Stock withdrawal Approval1
        And Select Initiated withdrawal and approve



    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1667
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_363 To Verify that , If user has no money in IND01 main wallet then he/she will not be able to initiate the stock windrwal
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock Withdrawal
        And Enter all withdrawal details with Amount greater than Available balance
        Then Assert Insufficient Balance




    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1667
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_613 To Verify that, Each DFS Provider will have separate Tax Wallets.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock Withdrawal
        And Verify DFS must have separate tax wallet

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test

    Scenario:TC_614 To verify that Network Admin can not set the Stock Limit when approval  Limit-1 is left blank.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Click on Stock Limit
        And Set Approval limit without any value
        Then Confirm valid limit error message


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :1601
    # TestCase_ID :
    #
    #TAGS
    #version tags
    @x.04 @x.06
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_615 To verify that Network Admin cannot set the 'Stock Transfer 'Limit For EA if entered amount containing more than 10 digits before decimal    
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Stock Management and Stock Transfer to EA
        And User Select MFS Provider
        And User Should Enter Reference number
        And Enter amount containing more than 10 digits before decimal
        And User Click on Submit button
        Then  Assert decimal Error message

    



