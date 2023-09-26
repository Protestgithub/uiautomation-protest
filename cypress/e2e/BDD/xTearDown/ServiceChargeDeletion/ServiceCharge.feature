Feature: Pricing Engine Teardown

    # # Author:
    # # Last Updated:
    # # Comments :
    # # Scenario_ID :

    # #TAGS
    # #version tags
    # @x.04 @x.06 @x.07 @x.09
    # # suite tags
    
    # # test case tags
    # @TearDown

    # Scenario:TC_296 To verify that System admin is able to Delete service charge
    #     Given Login into Mobiquity Portal as System admin Maker
    #     When Click on Pricing Engine
    #     And Click on the Service Policy
    #     And Delete Cash in service policy
        
        
    
    # Author: Rakesh
    # Last Updated:
    # Comments : Service Charge 
    # Scenario_ID : TC_45
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown

    Scenario:TC_617 To verify that system admin can delete the service charge
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to Modify or Delete service charge
    And Select the Service Charge Profile and Click on Delete
    Then click on Approve for Deletion

