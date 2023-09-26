Feature: Auth Profile Creation for Business User

  #######################   Authorization Profile Creation ##########################

  # # # Author: Sudheer Baraker
  # # # Last Updated: 17/05/2022
  # # # Comments :
  # # # Scenario_ID : TC_149
  # # #
  #TAGS
  #version tags
  @x.04 @x.06 @x.07 @x.09
  # suite tags
  @sanity
  # test case tags
  @prerequisite
  Scenario: TC_14 To verify that system admin should be able to add Business User authorization profile

    #Business -- Distributor
    Given Login into Mobiquity Portal as System admin Maker
    When Select Authorization profile and add profile
    And  select Distributor user type and select user role
    Then Fill all Details and Create Distributor authorization profile

  #TAGS
  #version tags
  @x.06 @x.07 @x.09
  # suite tags
  @sanity
  # test case tags
  @prerequisite
  Scenario: TC_15 Approval of added Business User profile
    Given Login into Mobiquity Portal as System admin Checker1
    Then User approval for Authorization profile

