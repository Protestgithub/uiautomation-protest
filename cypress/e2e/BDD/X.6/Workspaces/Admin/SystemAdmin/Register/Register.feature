Feature: Bank Account

    
 
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :407
# 
#TAGS
#version tags
 @x.09
 # suite tags
 @FV
 # test case tags
 @test


Scenario:To verify during business user registration through User Management Register , Bank Account tab should also be shown
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Business and Select user role as AtmMachine
And click on Next Button1




# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :408
# 
#TAGS
#version tags
 @x.09
 # suite tags
 @FV
# test case tags
@test


    Scenario:To verify Addition of bank account will have a separate tab. This tab will be available post profile tab.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to User Management and Click on register
    And Select User type as Business and Select user role as AtmMachine
    And click on Next Button1
    And Assert the Bank Account text


    
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :410
# 
#TAGS
    #version tags
    @x.09
    # suite tags
    @FV
    # test case tags
    @test


    Scenario:To verify Bank Name Drop down should have proper title
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to User Management and Click on register
    And Select User type as Business and Select user role as AtmMachine
    And click on Next Button1
    And Assert Bank Name


   
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :411
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags  
    @FV
    # test case tags
    @test


Scenario:To verify Account Number should be a text field and editable
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Business and Select user role as AtmMachine
And click on Next Button1
And Enter The Account Number