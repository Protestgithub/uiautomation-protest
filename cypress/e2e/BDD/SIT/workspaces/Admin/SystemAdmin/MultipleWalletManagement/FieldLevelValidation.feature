Feature: Account Management


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_92

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that user is able to view the mWallet successfully.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate Multiple Wallet Management and Click on View Wallet


     #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_93

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that user is able to delete the mWallet successfully.
    Given Login into Mobiquity Portal as System admin Maker
    When Click on Multiple Wallet Management > Delete Wallet
    And Select the wallet to be deleted
    Then Click on Confirm wallet button



  
    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_99

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
 

   Scenario:To verify that user is able to get proper error message on screen if user adds new wallet and count reaches to configured new wallet count.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate Multiple Wallet Management and Click on Add Wallet
    Then Enter Wallet Name and click on save button
    And Assert the error message


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : 104

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

  Scenario:To verify that proper error message is being when any special character is entered while creating wallet.
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate Multiple Wallet Management and Click on Add Wallet
  Then Enter Wallet name and click on Save2.
  And Assert error message

