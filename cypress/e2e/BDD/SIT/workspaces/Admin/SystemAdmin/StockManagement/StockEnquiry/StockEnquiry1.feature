Feature: Stock

  
    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1609

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Channel / Network admin cannot initiate stock if entered amount is more than the Available Stock.
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details



    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1069

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


  
 Scenario:To verify that Channel / Network admin cannot initiate the stock if entered transfered amount containing more than 4 digits after decimal 
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details1



    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1711

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Channel / Network admin cannot initiate the stock if entered transfered amount is 786.0009
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details2


   #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1757

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 
Scenario:To verify that Channel / Network admin cannot initiate the stock if entered transfered amount is 786.90
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details3



  
   #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1758

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

   

  Scenario:To verify that Channel / Network admin cannot initiate the stock if entered transfered amount is 10.99
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to admin transaction
  And enter all the details4




  #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1759

    #TAGS
    #version tagss
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


Scenario:To verify that Channel / Network admin cannot initiate the stock if entered transfered amount is 10.09
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details5