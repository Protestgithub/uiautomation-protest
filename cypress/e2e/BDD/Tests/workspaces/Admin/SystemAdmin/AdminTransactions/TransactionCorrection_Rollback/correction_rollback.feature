Feature: Transaction Correction

    ################################### Kalyani  #######################################


    # # Author: Kalyani M
    # # Last Updated:
    # # Comments
    # # Test Case_ID : TC_91
    # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_202 To verify that the Valid User should able to perform Transaction correction
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number
        When User Click on eye button for WalletHistory
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_203 To verify Transaction correction approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Transaction Correction and click on Transaction Approval


    # Author: Kalyani M
    # Last Updated:
    # Comments
    # Test Case_ID : TC_92
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_204 To verify that when the Roll Back Service charge option is selected, then along with service charge, the applicable tax should also be rolled back
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number
        When User Click on eye button for WalletHistory1
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_205 To verify Roll Back transaction approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Transaction Correction and click on Transaction Approval1

    # Author: Kalyani M
    # Last Updated:
    # Comments
    # Test Case_ID : TC_93
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_206 To verify that when the Roll Back Commission option is selected, then along with commission, the applicable tax should also be rolled back
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Mobile number or KYC number
        When User Click on eye button for WalletHistory2
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_207 To verify Roll Back commission approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Transaction Correction and click on Transaction Approval2

