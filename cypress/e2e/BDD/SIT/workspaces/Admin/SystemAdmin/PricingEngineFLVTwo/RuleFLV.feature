Feature: Pricing Engine Rule Creation

    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_1095
        #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_1095 To verify that try to create new rule without fill any mandatory fields
       Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Fill all details except mandatory fields
        #Then Assert the error message

    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_1096
        #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_1096 To verify that try to select end date before start date
               Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Select end date before that you have selected in start date
        Then assert date error message

    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_1098
        #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_1098 To verify that before discard a policy a confirmation message will show on the screen to the user
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
         And Click on any service to add service charge to discard draft
         Then verify the confirmation message for discard draft

# Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_914
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_ 907 To verify that there is any functionallity to the user in the poilcy view of any of the sections (i.e. Charge Rules, Tax Rules for a Service Charge Policy; Commission Rules, Waive Rules, and Tax Rule for a Commission Policy) as well as the search results. 
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy