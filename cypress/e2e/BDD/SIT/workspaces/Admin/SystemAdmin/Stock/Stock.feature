Feature: Stock

  
    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1753

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered amount is more than the Available Stock.
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details



    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1755

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


  
 Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered transfered amount containing more than 4 digits after decimal number
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details1



    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1756

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered transfered amount is 096.0909
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to admin transaction
 And enter all the details2


   #Author: Arpitha
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

 
Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered transfered amount is 367.44
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details3



  
   #Author: Arpitha
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

   

  Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered transfered amount is 13.99
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to admin transaction
  And enter all the details4




  #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1759

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


Scenario:To verify that Channel / Network admin cannot initiate the O2C if amount is decimal number
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details5


   
