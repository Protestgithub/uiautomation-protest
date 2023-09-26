Feature:  Wallet Payment Transactions of business user when O2C intiated
    ######################################### Sudheer ##################################################


    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_130
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_177 To verify that Admin user can check all the Order Details of a customer/ business users successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile number and KYC number in search menu for customerbusiness users
        And  Click on view Details
        Then Click on order details for customerbusiness users





    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_132
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_178 To verify that all the wallet transactions are displayed in statement screen sucessfully.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu
        And  Click on view Details
        And Click on Wallet Payment History
        And Click on expand button
        Then Click on wallet view Details
    
    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_133
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_179 To verify that user can able to view all the wallet transactions by entering valid transaction id.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu
        And  Click on view Details
        And Click on Wallet Payment History for valid transaction with id
        And Click on expand button on valid transaction with id
        Then Click on view Details for wallet transactions with id

    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_134
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_180 To verify that user can able to fetch the Statement based on the transaction type (success, fail etc.)
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu
        And  Click on view Details
        And Click on Wallet Payment History for transaction type
        And Click on filter and Select status type and Select apply
        And Click on expand button for transaction type
        Then Click on view Details for transaction

    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_135
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_181 To verify that user can able to fetch the Statement based on the Date range.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu
        And  Click on view Details
        And Click on Wallet Payment History based on the Date
        And Click on filter
        And Select start date and end date and  Click apply
        And Click on expand button based on the Date
        Then Click on view Details based on the Date range


