Feature: Pricing Engine Transaction

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_654 Creation of Discount Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the Service Policy
        #And Click On Discount Rule
        #And Select USD Currency
        #And Click on any service to add discount rule
        #Then Logout
	   #Given Login into Mobiquity Portal as System admin Checker1
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge
#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_655 Creation of Taxation Rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the Service Policy
        #And Click On Taxation rule
        #And Select USD Currency
        #And Click on any service to add Taxation rule
        #Then Logout
	   #Given Login into Mobiquity Portal as System admin Checker1
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge

#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_656 Creation of Commission rule
        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on commission
        #And Click on commission and select the service you want to add commission profile for for taxation rule
        #Then Logout
	   #Given Login into Mobiquity Portal as System admin Checker1
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge



#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_657 Creation of Transaction tax rule

        #Given Login into Mobiquity Portal as System admin Maker
        #When Click on Pricing Engine
        #And Click on the TransactionTax
        #And Select USD Currency
        #And Click on any service to add service charge for transaction tax
        #Then Logout
	   #Given Login into Mobiquity Portal as System admin Checker1
	    #When Click on Pricing Engine
	    #Then Aprove the created service charge


#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
    #@UAT
    #test case tags
    #@test
#Scenario:TC_541 To verify that the transaction will be succesful When both the combination is defined like Service Charge % and fixed and Commission % and fixed
        #Given Log in with Merchant user credential
        #When Click on cash in
        #And Enter required details for cashin transaction
        #And Cash In request is successful should be displayed along with the transaction id
        #Then Logout




#Author: Arpitha
#Last Updated: 21/03/2023
#Comments :
#Scenario_ID :665
    #TAGS
    #version tags
    #@x.04 @x.06 @x.07
    #suite tags
     #@UAT
    #test case tags
    #@test
#Scenario:TC_558 To verify that the transaction will be succesful When both the combination is defined like Service Charge % and fixed and Commission % and fixed
        #Given Login into Mobiquity Portal as System admin Maker
        #When Navigate to User Management and Click on manage user
        #And Enter Mobile number of merchant and KYC number in search menu
        #And Click on view Details and Click on Wallet Payment History
        #Then Verify amount Credited to the user for cashin transaction

