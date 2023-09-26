Feature: Security Teardown

    # Author:
    # Last Updated:
    # Comments :
    # Scenario_ID : SecurityProfiles deletion

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @TearDown
    Scenario Outline:TC_292,TC_293,TC_294,TC_295 To verify that System admin is able to Delete Security Profiles
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to Security and click to select security profile
        And Filter by <Profiles>
        Then Verify the Success Message of security
    
    Examples:
    |Profiles|
    |slecting Default|
    |selecting default business admin|
    |selecting default CCA admin|
    |selecting default Distributer|

