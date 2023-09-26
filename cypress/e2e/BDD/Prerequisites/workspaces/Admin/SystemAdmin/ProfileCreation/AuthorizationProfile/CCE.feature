Feature: Auth Profile Creation for CCE

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
  Scenario: TC_12 To verify that system admin should be able to add CustomercareAdmin authorization profile
    # # #Administrator -- CustomercareAdmin
    Given Login into Mobiquity Portal as System admin Maker
    When  Select Authorization profile and add profile
    And  select CustomercareAdmin user type and select user role
    Then Fill all Details and Create CustomercareAdmin authorization profile

  #TAGS
  #version tags
  @x.06 @x.07 @x.09
  # suite tags
  @sanity
  # test case tags
  @prerequisite
  Scenario:TC_13 Approval of added CCA profile
    Given Login into Mobiquity Portal as System admin Checker1
    Then User approval for Authorization profile



