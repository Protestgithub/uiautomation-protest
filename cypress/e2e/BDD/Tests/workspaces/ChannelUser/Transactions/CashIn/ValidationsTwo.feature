Feature: CashIn Validations


# # # Author: Aditya
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : TC_24
# # # 
# # @prerequisite

#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@UAT
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
# Scenario_ID :730
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP modification is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :730
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP modification is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for cashin transaction

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :731
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:Deletion of TCP
	Given Login into Mobiquity Portal as System admin Maker
	When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
	Then Click on TCP delete icon

#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :731
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP deletion is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout


#Author: Arpitha
# Last Updated: 22/03/2023
# Comments :
# Scenario_ID :731
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if TCP deletion is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for cashin transaction

