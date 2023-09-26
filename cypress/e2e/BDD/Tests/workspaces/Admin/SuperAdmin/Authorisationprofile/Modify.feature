
Feature: Modification of Authorisation Profile

# # # Author: Saswat
# # # Last Updated: 27/01/2023
# # # Scenario_ID : TC_77 ,TC_78 ,TC_79
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    
Scenario:TC_438 TC_Prerequiste To verify that User is able to modify authorization profile
Given Login into Mobiquity Portal as Super admin Maker
When  Select Authorization profile and add profile
And  Select Any User Role
Then Fill all Details and Create Subscriber authorization profile

    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_438 TC_Prerequiste To verify that User is able to approve modify request of authorization profile
Given Login into Mobiquity Portal as Super admin Checker
Then User approval for modified Authorization profile


# # # Author: Aman Jyoti
# # # Last Updated: 27/01/2023
# # # Scenario_ID : 
# # #
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    
Scenario: TC_439 To verify that User is able to modify authorization profile
Given Login into Mobiquity Portal as Super admin Maker
When Select Authorization profile and apply filter
Then Click on Modify Icon in front of authorization profile to modify  

    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: TC_439 To verify that User is able to approve the modify request of authorization profile
Given Login into Mobiquity Portal as Super admin Checker
Then User approval for modified Authorization profile


# # # Author: Faizan Khan
# # # Scenario_ID : 
# # # Comments :
# # # Last updated : 27/01/2023
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    
Scenario: TC_440 To verify that user is able to delete created authorization profile
Given Login into Mobiquity Portal as Super admin Maker
When Select Authorization profile and apply filter 
Then click on delete icon of created authorization profile AND click on yes

    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
 Scenario: TC_440 To verify that user is able to approve the delete request created authorization profile
Given Login into Mobiquity Portal as Super admin Checker
Then User approval for modified Authorization profile
