Feature: CashIn Validations


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



#@test
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
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
# Scenario_ID : 1328

    #TAGS
    #version tags
   @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if service charge modification is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : 1345

    #TAGS
    #version tags
     @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if service charge modification is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for cashin transaction



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
# Scenario_ID : 1349

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if service charge deletion is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout

# Author: Arpitha
# Last Updated:
# Comments : Service Charge 
# Scenario_ID : 1429

    #TAGS
    #version tags
     @x.09
    # suite tags
    @SIT
    # test case tags
    @test
Scenario:To verify that transaction will be successful  if service charge deletion is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for cashin transaction


#Author: Arpitha
# Last Updated: 19/01/2023
# Comments :
# Scenario_ID :1651
 
    #TAGS
    #version tags
     @x.09
    # suite tags
    @SIT
    # test case tags
    @test
    

Scenario:TC_616 To Verify that valid user is able to perform Cash In Transaction with default service charge if defined Service charge iS not defined
Given Log in with Merchant user credential
When Click on cash in
And Try to perform cash in when service charge is Inactive
Then Cash In request is successful should be displayed along with the transaction id

