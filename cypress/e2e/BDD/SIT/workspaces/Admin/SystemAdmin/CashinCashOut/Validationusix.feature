Feature: CashOut Validations





#TAGS
#version tags
@x.09
# suite tags
@prerequisite
# test case
Scenario:Initiation of TCP modification 
       	Given Login into Mobiquity Portal as System admin Maker
  	When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
  	And Click on Edit Button
  	And Click on 2nd Edit Button
  	Then Enter all required amount and count
  	And Click on Next
  	Then Verify Success Message

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :1849
    #TAGS
    #version tags
     @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP modification is initiated but not approved.
	Given Log in with Merchant user credential
	When Click on cash Out
	And Enter required details for cash out
	And Cash Out request is successful should be displayed along with transaction id
	Then Logout

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID 1843
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:TC_569 To verify that transaction will be successful  if TCP modification is initiated but not approved.
	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction



#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :1873
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:Deletion of TCP
    Given Login into Mobiquity Portal as System admin Maker
	When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
	Then Click on TCP delete icon

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :1844
    #TAGS
    #version tags
  @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP deletion is initiated but not approved.
	Given Log in with Merchant user credential
	When Click on cash Out
	And Enter required details for cash out
	And Cash Out request is successful should be displayed along with transaction id
	Then Logout


#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :1875
    #TAGS
    #version tags
    @x.09
    # suite tags
   @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP deletion is initiated but not approved.
	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to User Management and Click on manage user
	And Enter Mobile number of merchant and KYC number in search menu
	And Click on view Details and Click on Wallet Payment History
	Then Verify amount Credited to the user for cashout transaction




