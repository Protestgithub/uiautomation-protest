Feature:ServiceChargePricing Service Policy


    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_39
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_237 To verify that user can easily create a duplicate service charge by clicking on the clone option from the available service charge.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on Existing Service Policy Rule edit and save
        Then clone the edited Service Policy Rule with other service Policy


    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_34
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_238 To verify that user should be able to set the status of the service policy as active or inactive..
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        Then Set Status Active or Inactive




    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_35
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_239 Search for Rules To verify that user is able to search for rules from anywhere in the Pricing Engine.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Search Tab & Search by Rule Name
        Then Verify Search results should give the list of rule name with Condition,status,Validity,rule & Policytype

    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_36
    #TAGS
    # #version tags
    # @x.04 @x.06 @x.07 @x.09
    # # suite tags
    # 
    # # test case tags
    # @test
    #Scenario:To verify that user is able to view the previous versions of the policy.

    #Given Login into Mobiquity Portal as System admin Maker
    #When Click on Pricing Engine
    #And Click on the Service Policy
    #And Click on any service to add service charge.
    #Then Logout
    #Given Login into Mobiquity Portal as System admin Maker
    #When Click on Pricing Engine
    #And Click on the Service Policy
    #Then Click on View Previous Version Link, Enter available Ver no and Proceed to View the details

    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_37
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_240 To verify that if the user has saved any policy as draft he should be able to view the saved draft.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on add new rule buttton,add New service charge and save the policy as draft
        Then  Check if user is able to view the saved draft



    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_38
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_241 To verify that user should be able to reject the policy pending for approval.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_522 To verify that user is able to quick to find relevant rule that they want to modify or clone through Search functionality
Given Login into Mobiquity Portal as System admin Maker
When Click on Pricing Engine
And Click on the Search field
And Click on Clone
