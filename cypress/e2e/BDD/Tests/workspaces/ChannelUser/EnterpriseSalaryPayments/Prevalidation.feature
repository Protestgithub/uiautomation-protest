Feature: EnterprisePayment



#     # # # Author:Arpitha
#     # # # Last Updated:
#     # # # Comments :
#     # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_340 TC_1067 To verify that availability of the user (payee) will be checked on according to combination of KYC ID and MSISDN or MSISDN and Name
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template with selecting checkbox
And Upload the template
And Click on Enterprise Payment Submit
Then Check availability of the user combination of KYC ID and Name



#     # # # Author:Arpitha
#     # # # Last Updated:
#     # # # Comments :
#     # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_341 TC_1068 To verify that pre-validation step will be executed only if static template level validations are successful.
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template without selecting checkbox
And Upload the template
And Click on Enterprise Payment Submit
Then Check if static template level validations are successful


 # # # Author:Arpitha
    # # # Last Updated:
    # # # Comments :
    # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_347 TC_1070 To verify that admin user is able to check progress of the bulk upload on the dashboard.
		Given Log in with valid credentials as corporate user	
		When Click on enterprise payment
		And Click On Enterprise Dashboard
		Then Verify Success Count

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: TC_353 TC_1072 To verify that initiator is able to see batches initiated by him.
Given Log in with valid credentials of corporate user2
When Click on enterprise payment
And Click On Enterprise Dashboard

#Author: Arpitha
 #Last Updated:07/03/2023
 #Comments :
 #Scenario_ID : 1074
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_433 To verify that if any record during prevalidation step fails then entire batch will fail.
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
And Enter data in template and upload>Submit
And Click On Enterprise Dashboard
# Then Verify Failed Count


