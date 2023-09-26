Feature: CashIn Validation

#Author: Arpitha
# Last Updated: 19/01/2023
# Comments :
# Scenario_ID :651
 
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    

Scenario:TC_616 To Verify that valid user is able to perform Cash In Transaction with default service charge if defined Service charge is suspended.
Given Log in with Merchant user credential
When Click on cash in
And Try to perform cash in when service charge is Inactive
Then Cash In request is successful should be displayed along with the transaction id
