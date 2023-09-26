Feature: Transfer To Bank

    This feature creates order details for customer and Business Admin


    # Author: Sudheer Baraker
    # Last Updated:
    # Comments
    # Test Case_ID : TC_130_Business admin
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
    Scenario:TC_72 To verify that Channel User is able to transfer wallet to bank
        Given Login into Mobiquity Portal as Channel User
        When Navigate to Transfer to Bank
        And Enter all the information for Bank to Wallet transfer
        Then Click on Transfer Button

