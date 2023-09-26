Feature: Ambiguous profile

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_97
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_145 To verify that System admin should able to see all Ambiguous Transactions from third party.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Ambiguous Order Transaction >> Download Ambiguous Order
        And Select Ambiguous Type and party type and party name
        Then Click on Download button.


    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_98
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_146 To verify that the Valid User should be able to upload all Ambiguous Transactions and able to settle them from third party.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Ambiguous Order Transaction >> Bulk settlement initiation
        And Select operation name
        And Click on Download template and enter remark
        Then Upload file
