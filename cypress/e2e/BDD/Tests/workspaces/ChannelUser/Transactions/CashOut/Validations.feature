Feature: CashOut Validations


# Author: Rakesh
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : TC_37

#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that system admin is able to Add the service charge.
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge
And Enter all the required fields for Adding ServiceCharge
Then Click on Next and enter the details
And Verify the Sucess message



# Author: Rakesh
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : Tc_47

#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that system admin is able to approve the service charge.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to service charge Approval
Then click on Approve

# Author: Rakesh
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : TC_49

#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:Service Charge modification
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Modify or Delete service charge
        And Select the Service Charge Profile
        And click on Approve to Modify
        Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : 841
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_567 To verify that transaction will be successful  if service charge modification is initiated but not approved.
	Given Log in with Merchant user credential
	When Click on cash Out
	And Enter required details for cash out
	And Cash Out request is successful should be displayed along with transaction id
	Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : 841
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_567 To verify that transaction will be successful  if service charge modification is initiated but not approved.

	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction


# Author: Rakesh
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : TC_45

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:Deletion of Service Charge Profile
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Modify or Delete service charge
        And Select the Service Charge Profile and Click on Delete
        And click on Approve for Deletion
        Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID :842
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_568 To verify that transaction will be successful  if service charge deletion is initiated but not approved.

	Given Log in with Merchant user credential
	When Click on cash Out
	And Enter required details for cash out
	And Cash Out request is successful should be displayed along with transaction id
	Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID :842
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:Scenario:TC_568 To verify that transaction will be successful  if service charge deletion is initiated but not approved.
	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction




