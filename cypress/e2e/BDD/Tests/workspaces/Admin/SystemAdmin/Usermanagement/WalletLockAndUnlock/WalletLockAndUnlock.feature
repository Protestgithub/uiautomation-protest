Feature: Wallet Lock and Unlock


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_136
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
     @sanity
    # test case tags
    @test

    Scenario:TC_139 To verify that user can view details of all wallets associated with the user along with their corresponding balances and status successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        And Click on view Details and Click on Account info
        Then Check All Wallet Details

    # Author:
    # Last Updated:
    # Comments
    # Scenario_ID :TC_137
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test

   

    Scenario:TC_140,TC_SMOKE4 To verify that Admin user can lock user wallet as sender or receiver or both.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        And Click on view Details and Click on Account info
        And select either Lock outgoing payments or Lock incoming payments or Lock both
        Then Click On lock all


    # Author:Monica
    # Last Updated:
    # Comments
    # Scenario_ID : TC_140
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_141 To Verify that Admin user can unlock user’s wallet as sender or receiver or both.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number and KYC number in search menu1
        And Click on view Details and Click on Account info
        And select either UNLock outgoing payments or UNLock incoming payments or Lock both
        Then Click On UNLock


    # Author:
    # Last Updated:
    # Comments
    # Scenario_ID : TC_142
    #
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_142 To verify that admin user can reset the credentials of Business user and customer's successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Subscriber mobile number and search
        And User Click on eye button
        And Click on view Details and Click on Credentials
        And Click on refresh icon corresponding to the respective authentication factor