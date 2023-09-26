Feature: Pricing Engine Transaction 2




#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :734 


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_548 To Verify that valid user  is able to perform Cash In Transaction.
            Given Log in with Merchant user credential
            When Click on cash in
            And Enter required details and amount of 10.01
            And Cash In request is successful should be displayed along with the transaction id
            Then Logout

#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :734 


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_722 Check amount credited in business user wallet
            Given Login into Mobiquity Portal as System admin Maker
            When Navigate to User Management and Click on manage user
            And Enter Mobile number of merchant and KYC number in search menu
            And Click on view Details and Click on Wallet Payment History
            Then Verify amount Credited to the user for cashin transaction


#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :758 
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_549 To Verify that valid user  is able to perform Cash In Transaction.
            Given Log in with Merchant user credential
            When Click on cash in
            And Enter required details for cashin transaction
            And Cash In request is successful should be displayed along with the transaction id
            Then Logout
#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :758 
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_723 Check amount credited in business user wallet
            Given Login into Mobiquity Portal as System admin Maker
            When Navigate to User Management and Click on manage user
            And Enter Mobile number of merchant and KYC number in search menu
            And Click on view Details and Click on Wallet Payment History
            Then Verify amount Credited to the user for cashin transaction