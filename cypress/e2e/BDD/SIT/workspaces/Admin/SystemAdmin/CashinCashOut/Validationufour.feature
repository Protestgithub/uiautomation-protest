Feature: CashOut Validations



#TAGS
    #version tags
    @x.09
    # suite tags
    @prerequisite
    # test case tags
    @test
Scenario:To verify that system admin is able to Add the service charge.
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge
And Enter all the required fields for Adding ServiceCharge
Then Click on Next and enter the details
And Verify the Sucess message




#TAGS
    #version tags
  @x.09
    # suite tags
    @prerequisite
    # test case tags
    @test
Scenario:To verify that system admin is able to approve the service charge.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to service charge Approval
Then click on Approve



#TAGS
    #version tags
    @x.09
    # suite tags
   @prerequisite
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
# Scenario_ID : 1530
    #TAGS
    #version tags
     @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario: To verify that transaction will be successful  if service charge modification is initiated but not approved.
	Given Log in with Merchant user credential
	When Click on cash Out
	And Enter required details for cash out
	And Cash Out request is successful should be displayed along with transaction id
	Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : 1533
    #TAGS
    #version tags
   @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario: To verify that transaction will be successful  if service charge modification is initiated but not approved.

	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction



    #TAGS
    #version tags
   @x.09
    # suite tags
    @prerequisite
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
# Scenario_ID :1538
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
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
# Scenario_ID :1540
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:Scenario:TC_568 To verify that transaction will be successful  if service charge deletion is initiated but not approved.
	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction




    # Author: Arpitha
    # Last Updated:
    # Comments
    # Test Case_ID : 1567
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    Scenario:TC_572 To verify that transaction will be successful  if user enters multiple of transaction amount defined
	        Given Log in with Merchant user credential
	        When Click on cash Out
	        And Enter required details for cash out
	        And Cash Out request is successful should be displayed along with transaction id
	        Then Logout