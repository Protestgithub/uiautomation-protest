 Feature: Grade Management


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_331 ,TC_332

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test


Scenario:To verify that maximum number of creating grades for particular category 
Given Login into Mobiquity Portal as Super admin Checker
When Click on User Profile Management >> Add Grade
And click on add and select the domain and category
Then click on add more grades


 #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_956

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


 Scenario:To verify that proper validation message should be displayed for the mandatory fields.
 Given Login into Mobiquity Portal as Super admin Checker
 When Click on User Profile Management >> Add Grade
 And click on add
 Then assert error msg



  #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_955

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that proper error message should be displayed  when special character is entered in grade code.
    Given Login into Mobiquity Portal as Super admin Checker
    When Click on User Profile Management >> Add Grade
    And Select the domai and category
    Then click on grade save button
