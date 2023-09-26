Feature: WalletManagement



    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_02
    @test
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    #TC_smoke_14
    Scenario:TC_143 To verify that System admin should be able to view/delete/modify the Mwallet successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate Multiple Wallet Management and Click on Modify Wallet
        And Click on Added Wallet and Click on Update
    #And Verify the success message text


    # Author: Narendra
    # Last Updated: /05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_03
    @test
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_144 To verify that System admin is not able to Add wallet with the same name of already existing wallet.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate Multiple Wallet Management and Click on Add Wallet
        And Enter Wallet name and click on Save

# Author: Rajesh
# Comments 
# Scenario_ID : TC_30
# TestCase_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_516 To verify that System admin is able to Add wallet on Deleted wallet name.
Given Login into Mobiquity Portal as System admin Maker
When Click on Delete Wallet
And Navigate Multiple Wallet Management and Click on Add Wallet on deleted wallet name
Then Enter Wallet name and click on save1

# Author: Rajesh
# Comments 
# Scenario_ID : TC_31
# TestCase_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_517 To verify that Two digit numeric number should get generated for each new wallet creation.
Given Login into Mobiquity Portal as System admin Maker
When Navigate Multiple Wallet Management and Click on Add Wallet
#And Enter Wallet name and click on save
Then Check that Success message has number or not
