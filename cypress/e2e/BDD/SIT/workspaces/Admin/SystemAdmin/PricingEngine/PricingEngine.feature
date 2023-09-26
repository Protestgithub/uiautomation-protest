Feature: Pricing Engine

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1300
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that through search option user can get additionaly get an overview of the set of the rules that have been created in the system
Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Search by applying search condition
        Then Assert the search by condition list  


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
@Prerequsite
Scenario:Pricing Engine Initiation
 Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on CASH IN service to add service charge.
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created service charge


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : Tc_61 ,TC_1288
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
Scenario:Tc_61 To verify that there should not be any service charge for one amount slab
#Given Login into Mobiquity Portal as System admin Maker
Given Login into Mobiquity Portal as System admin Checker1
 When Click on Pricing Engine
 And Click on Search and Search with the Rule Name
 Then without Slab click on save Draft  and Assert the Error Message




#Author:Rakesh
#Last Updated:10-7-23
#Comments
#Test Case_ID : TC_1293
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:TC_1293 To verify that User has the option to search for rules from anywhere in the Pricing Engine
Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Search and Search with the Rule Name
        Then Assert the Service Rule

##############################################
#Author:Rakesh
#Last Updated:10-7-23
#Comments
#Test Case_ID : TC_30 & TC_1291
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_30 To verify that instead of doing all the required changes in a single session the user can work on the changes over a time period
#Given Login into Mobiquity Portal as System admin Maker
Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
         And Click on the Service Policy
     And Select the Drafted Service and Edit it
        Then Click on Save Draft and Assert Success message

##################################################

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_63
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

@Prerequsite
Scenario: To verify that System admin is able to Delete Service Charge
Given Login into Mobiquity Portal as System admin Maker
     When Click on Pricing Engine
     And Click on Search and Seacrh for the Rule Name Service2
     Then Delete the ServicePolicy and Assert Success Message

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_63
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_63 To verify that if the paying entity and crediting entity does not exist in the system then, the transaction will complete without that particular service charge or commision payout
Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter all Mandatory details for CashIn
        Then Click on Submit and Click on Confirm Button2 and check the error message



#Author:Rakesh
#Last Updated:10-7-23
#Comments
#Test Case_ID : TC_1282
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 

Scenario:TC_1282To verift that with the new pricing engine, is it now possible to contniously save the changes done to a policy so,that user will not loose progress in case of network connectivity issues or timeout. 
 Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on CASH IN service to add service charge and Save Draft
       Then Assert the Succes Message of pricing engine Draft


#Author:Rakesh
#Last Updated:10-7-23
#Comments
#Test Case_ID : TC_1286
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
 Scenario:TC_1286 To verify that The users who have saved drafts are always shown an indicator message that they are working a saved draft. 
Given Login into Mobiquity Portal as System admin Maker
 When Click on Pricing Engine
 And Click on the Service Policy
 Then Assert the Message on a Saved Draft




