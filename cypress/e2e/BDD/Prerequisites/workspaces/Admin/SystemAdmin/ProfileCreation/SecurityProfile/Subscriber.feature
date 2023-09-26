Feature: Security Profiles Creation

    #######################    Profiles Creation ##########################


    ##################################### Security Profile Creation ################################################

    # Author: Chetan.S
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TC_109
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario:TC_51 ,TC_Smoke25 To verify that security profiles can be configured in the system for Subscriber workspaces.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Security and click to select security profile
        And Click on add profile select user type as subscriber and fill the details
        And Fill the details-Subscriber Profile Name
        And Fill the details-PasswordRestrictios
        And Fill the details-PinRestrictions
        And Fill the details-AuthRestrictions
        And Fill the details-loginRestrictions
        Then Click on add and confirm

   