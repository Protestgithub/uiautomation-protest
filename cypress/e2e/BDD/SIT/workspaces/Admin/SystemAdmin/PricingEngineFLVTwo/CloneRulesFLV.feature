Feature: Clone Rules

    
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
        Then Verify different functionalities charge rule,discount rule,taxation rule exits
        And Click on commission
        Then Verify different functionalities Commission rule,taxation rule exits

    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_913
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags


    Scenario:TC_913 Creation and Cloning of a rule
      

        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on any service to add service charge.
        Then Logout
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on Existing Service Policy Rule edit and save
       Then clone the edited Service Policy Rule


    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_913
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags


    Scenario:TC_913 To verify that before delete the clone rule the confirmation message will show on the screen to the user
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click On Delete icon
        Then Assert the delete Message

    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_919
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

      
    Scenario:TC_919 To verify that after click on cross button the confirmation message willl be remove from the screen
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click On Delete icon
        And Click on Close button
        Then Assert delete message is not visible
    
    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_915
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_915 To verify that if user click on cancel button then, the clone will not be deleted
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click On Delete icon
        And Click on Cancel Button
        Then Verify Clone Rule is not deleted

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

    Scenario:TC_914 To verify that if user click on "Ok" button the copy of created rule will be delete
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click On Delete icon
        And Click on Okay Button
        Then Verify Clone Rule is deleted


    # Author:Arpitha
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : 
    #TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

    Scenario:TC_ 907 To verify that there is any functionallity to the user in the poilcy view of any of the sections for a Commission Policy as well as the search results. 
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy