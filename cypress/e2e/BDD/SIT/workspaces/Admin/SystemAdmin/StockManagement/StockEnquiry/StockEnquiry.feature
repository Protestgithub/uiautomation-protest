Feature: Stock Enquiry

# Author: Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : TC_
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:TC_1782 To Verify that ,After initiated the stock user is able to see the stock success data in stock enquiry
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on Stock Balance Enquiry
#And Select currency and Select Stock Account

# Author:Arpitha
# Last Updated: 
# Comments 
# Scenario_ID : 
# TestCase_ID : 
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

Scenario:TC_458 To verify that all the requests will displayed on the Approval Managemnt
Given Login into Mobiquity Portal as System admin Checker2
When Navigate to approvals
#Then Click on approval management




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

   

  Scenario:To verify that Channel / Network admin cannot initiate the Stock if invalid msisdn is entered
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


Scenario:To verify that Channel / Network admin cannot initiate the Stock if suspended mobile number is entered
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details5



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

   

  Scenario:To verify that Channel / Network admin cannot initiate the O2C if entered transfered amount is 10.99
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to admin transaction
  And enter all the details4




  #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_113

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


Scenario:To verify that Channel / Network admin cannot initiate the stock if deleted msisdn is entered
Given Login into Mobiquity Portal as System admin Maker
When Navigate to admin transaction
And enter all the details5