
Feature: Transfer Rule



# Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_14
    #
    # @test
    #TAGS
    #version tags
   @x.09
    # suite tags
    @sanity
    # test case tags
    @test 
    #Prereqisite
    Scenario:TC_257 TC_1914 To verify that System admin should be able to add initiate Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        When Click on Add Transfer Rule button.
        And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level
        Then click on submit button.
        Then Click on confirm button.
        Then Verify initiate success Message

 # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_19
    #
    #TAGS
    #version tags
   @x.09
    # suite tags
    @sanity
    # test case tags
    @test  
    #Prereqisite
    Scenario:TC_259 To verify that System admin should be able to add Approve Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Checker1
        When User clicks on transfer rule approval
        And Select rule and approve
        Then click on submit
        Then Verify Approval success Message


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1896
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prereqisite:initiate Transfer Rule

Scenario:To verify that when user select a paarticular service then available rule for that service are shown in list.
 Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        Then Check for the Transfer rule list


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1898
#TAGS
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prereqisite:initiate Transfer Rule

Scenario:To verify that staus of the existing rule can be view by selecting the specific service.
Then Check the existing rule Status



        
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1911
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prereqisite:initiate Transfer Rule

Scenario:To verify that View link is clickable and its showing the transfer rules details.
When User Click on Transfer Rule.
And Select the Service Name and from details.
And Select the To details for Initiaion
And Select the From & To category.
Then Click on View Btn


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1912
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
#Prereqisite:initiate Transfer Rule

Scenario:To verify that the Edit link is clikable and opens the editing page with existing details.
When User Click on Transfer Rule.
And Select the Service Name and from details.
And Select the To details for Initiaion
And Select the From & To category.
Then Click on Edit link is clikable



#Author:Rakesh
#Last Updated:17-7-23
#Comments
#Test Case_ID : TC_1903
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags

Scenario:To verify that the details that are autofill are the coreect which user have selected on previous pages.
Given Login into Mobiquity Portal as System admin Maker
    When User Click on Transfer Rule.
    And Select the Service Name and from details.
    And Select the To details for Initiaion
    Then Assert the table



#Author:Rakesh
#Last Updated:04-08-2023
#Comments
#Test Case_ID : TC_1916
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
 Scenario:To verify that at the system level, all such transactions where operator is acting as payer are predefined in the system and need not be set up separately
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and Select from details for C2C.
And Select the To details for Initiaion of C2C
And Select the From & To category details for C2C
When Click on Add Transfer Rule button for C2C Service
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
Scenario:TransferRule Approval
Given Login into Mobiquity Portal as System admin Checker1
When User clicks on transfer rule approval
And Select rule and approval for Inverse C2C2
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
@prerequsite
Scenario:To Verify that Channel user is able to do C2C 
Given Login into Mobiquity Portal as Channel User4
And Click on Inverse Channel to Channel Link and Enter Details to add commission amount
Then Assert the Error Message that the Rule is not defined