Feature: Pricing Engine


#Author:Rakesh
#Last Updated:10-7-23
#Comments
#Test Case_ID : TC_1287
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: TC_1287 To verify that if user will discard the draft or submit for approval will not be able to the see policy as it exists currently
Given Login into Mobiquity Portal as System admin Maker
     When Click on Pricing Engine
     And Click on the Service Policy
     Then Select the Drafted Service and Click on Delete
      


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1311
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 

Scenario:To verify that the Transaction will not be successful in case latest service charge for the corresponding transaction is in suspended state.
Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter Suspended user details for CashIn
        Then Click on Submit and Click on Confirm Button2 and check the error message


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_70
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:TC_70 To verify that If latest service charge is suspended then application will display the error as service charge is suspended rather than employing the previous version of service charge on that service
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        Then Set Status Active or Inactive and Assert the success message

###############################################################################################


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_65
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that When creating multiple Details for a commission rule with the same payer and payee
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on commission
And Enter the Details for New Comission Rule
And Enter the Details with same payer and payee for the new Comission rule
Then Logout
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that When creating multiple Details for a commission rule with the same payer and payee
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on commission
And Enter the Details for new Comission Rule1
And Enter the Details with same payer and payee for the new Comission rule
Then Logout



# Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID :
    #TAGS
    #version tags
 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario: TC_Smoke30 To verify that System admin should be able to add initiate service charge through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on any service to add service charge.
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created service charge
        
        
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1305
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that After saving the modified service charge will get saved successfully and success message should get display.
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Select the Service and Modify it
Then Assert the Succes Message
