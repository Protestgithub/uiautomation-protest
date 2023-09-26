Feature: ServiceCharge CashOut 9

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
      #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:Creation of Discount Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the Cash out Service Policy
        #And Click On Discount Rule
        #And Click on any service to add discount rule
        #Then Logout
	    #Given Login into Mobiquity Portal as another System admin Checker1 after logout
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
      #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario: Creation of Taxation Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the Cash out Service Policy
        #And Click On Taxation rule
        #And Click on any service to add Taxation rule
	    #Then Logout
	    #Given Login into Mobiquity Portal as another System admin Checker1 after logout
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
     #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario: Creation of Commission Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on commission
        #And Click on commission and select the service you want to add commission profile for for taxation rule
	    #Then Logout
	    #Given Login into Mobiquity Portal as another System admin Checker1 after logout
    	#When Click on Pricing Engine
    	#Then Aprove the created service charge

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
      #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario: Creation of Transaction Tax Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the TransactionTax
        #And Click on any service to add service charge.

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
      #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_558 To verify that tax will be deducted from main wallet when Shift base employee is doing any transaction When Multiple Commission is define (% and fixed). And % and fixed both the Service Charges are defined.
    #Given Log in with Merchant user credential
	#When Click on cash Out
	#And Enter required details for cash out
	#And Cash Out request is successful should be displayed along with transaction id
	#Then Logout

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :815
      #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_558 To verify that tax will be deducted from main wallet when Shift base employee is doing any transaction When Multiple Commission is define (% and fixed). And % and fixed both the Service Charges are defined.
    #Given Login into Mobiquity Portal as System admin Maker
	#When Navigate to User Management and Click on manage user
	#And Enter Mobile number of merchant and KYC number in search menu
	#And Click on view Details and Click on Wallet Payment History
	#Then Verify amount Credited to the user for cashout transaction

