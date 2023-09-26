Feature: Stock Reimbursement  
  
    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1337

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To Verify that, Proper error message would be shown over there If user enter invalid MSISDN.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter Invalid MSISDN
        Then Assert Error Message




    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1339

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To Verify that, Proper error message should be shown over there if requesting user enter the invalid details of provider user.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter Invalid User Type
        Then Assert Error Message of invalid user type

    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1340

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To Verify that, User is able to see success transaction and initiated transaction details in stock reimbursement status.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Admin Transaction and Click on reimbursement
And Enter all the Reimbursement Information


 #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1510

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Reimbursement will not be successful if msisdn contains alphabets.
           Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter Invalid MSISDN for reimbursement
        Then Assert Error Message of msisdn



    # Author: Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC-1233
    #TAGS
    #version tags
    @x.09
    #suite tags
   #@SIT
    # test case tags
    @test
    Scenario:To Verify that, user should be not able to perform the reimbursement service if he/she enter special charaters into amount field.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Admin Transaction and Click on reimbursement
        And Enter all the Reimbursement Information for special charaters into refrence number