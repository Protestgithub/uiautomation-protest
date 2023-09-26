 Feature: Reconcilation Page
    
    
    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1210
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:To verify that the System admin should able to view Reconciliation screen.
    Given Login into Mobiquity Portal as System admin Maker
    And Click on Reconcilation


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1219

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

  Scenario:To verify Reconciliation on System main wallet
  Given Login into Mobiquity Portal as System admin Maker
  And Select MFS provider, Click on submit button
  Then Check the total amount in the EA account

   #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1216

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that user other than the system user should not be able to view Reconciliation screen
    Given Login into Mobiquity Portal as Super admin Checker
    And admin should not able to view Recounciliation module on web.User other than system admin


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1215
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    
    Scenario:To verify that the Reconciliation screen will contain all the information about the wallet balances
    Given Login into Mobiquity Portal as System admin Maker
    And Select MFS provider, Click on submit button
    And Assert the wallet Balances

    
     #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1218
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify Reconciliation on System Account (B)
    Given Login into Mobiquity Portal as System admin Maker
    And Select MFS provider, Click on submit button
    Then Show the balance of all the accounts


      #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1230
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify Reconciliation on User Distribution (D):Subscriber Balance
 Given Login into Mobiquity Portal as System admin Maker
 And Select MFS provider, Click on submit button
 And Check Subscriber Balance

#   Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1229
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test

 Scenario:To verify Reconciliation on User Distribution (D):Biller and Topup  Balance
 Given Login into Mobiquity Portal as System admin Maker
 And Select MFS provider, Click on submit button
 And Check Business User Balance



#   Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1227
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


    Scenario:To verify Reconciliation on Tax (C) on Commissions
     Given Login into Mobiquity Portal as System admin Maker
     And Select MFS provider, Click on submit button
     And check the tax on commissions
     


    # Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1226
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


    Scenario:To verify Reconciliation on Tax on Service Charges
     Given Login into Mobiquity Portal as System admin Maker
     And Select MFS provider, Click on submit button
     And check the tax on service charges
     


     
    # Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1225
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


    Scenario:To verify Reconciliation on Tax on Transaction Amount
     Given Login into Mobiquity Portal as System admin Maker
     And Select MFS provider, Click on submit button
     And Check the tax on Transaction Amount

    
     
    # Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1224
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


    Scenario:To verify Reconciliation on Deleted Churn Account
     Given Login into Mobiquity Portal as System admin Maker
     And Select MFS provider1, Click on submit button
     And Check the balance in deleted churn account

     
    # Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1223
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify Reconciliation on Churn Account
Given Login into Mobiquity Portal as System admin Maker
And Select MFS provider1, Click on submit button
And Check the total amount in Churn account


   #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1221
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify Reconciliation on International remittance balance
Given Login into Mobiquity Portal as System admin Maker
And Select MFS provider1, Click on submit button
And Check the total amount in the Internation remittance account

#Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1228
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test



 Scenario:To verify Reconciliation on User Distribution (D):Business User Balance
 Given Login into Mobiquity Portal as System admin Maker
 And Select MFS provider1, Click on submit button
 And Check Business User Balance include balance of merchant
