Feature: Pricing Engine Transaction

#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_738 Creation of Discount Rule
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the C2C Service Policy
        And Click On Discount Rule
        And Select USD Currency
        And Click on any service to add discount rule
        Then Logout
	   Given Login into Mobiquity Portal as System admin Checker1
	    When Click on Pricing Engine
	    Then Aprove the created service charge
#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_739 Creation of Taxation Rule
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the C2C Service Policy
        And Click On Taxation rule
        And Select USD Currency
        And Click on any service to add Taxation rule
        Then Logout
	   Given Login into Mobiquity Portal as System admin Checker1
	    When Click on Pricing Engine
	    Then Aprove the created service charge

#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_740 Creation of Commission rule
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
       And Click on the C2C Service Policy
        Then Logout
	   Given Login into Mobiquity Portal as System admin Checker1
	    When Click on Pricing Engine
	    Then Aprove the created service charge



#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_741 Creation of Transaction tax rule

        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the TransactionTax for C2C
        And Select USD Currency
        And Click on any service to add service charge for transaction tax
                Then Logout
	   Given Login into Mobiquity Portal as System admin Checker1
	    When Click on Pricing Engine
	    Then Aprove the created service charge


#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_742 To verify that the transaction will be succesful When both the combination is defined like Service Charge % and fixed and Commission % and fixed
        Given Login into Mobiquity Portal as Channel User
        And Click on Channel to Channel Link and Enter Details
        Then Logout




#Author: Niroop
# Last Updated: 21/03/2023
# Comments :
# Scenario_ID :606  
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @test
Scenario:TC_743 TC_606 To verify that the transaction will be succesful When both the combination is defined like Service Charge % and fixed and Commission % and fixed
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of Distributer and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for C2C transaction