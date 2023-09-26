
Feature: Transfer Rule

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1880
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that for a selected category, the values in the corresponding dropdown values would get populated.
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and from details.
And Select the To details for Initiaion
And Select the From & To category.
And Check for the Drop down values
When Click on Add Transfer Rule button.


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1868
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that the Transfer Type – There are two values in the drop down : Transfer , Sale
Then Check for the Transfer Type options

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1869
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that for the direct transfer there are two Radio buttons: YES, NO
Then check for the  direct transfer Radio buttons


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1870
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that - Controlled Transfer Level by default will be selected as System
Then check for the Controlled Transfer Level

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1906
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that the Minimum Transfer Amount, Maximum Transfer Amount, Transfer Amount Multiple Of, these fields are non mandatory

Then Check for the Min Transfer MAx Transfer and Transfer Amount

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1907
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that at the tranfer rule detail page Minimum Transfer Amount should not accept alphanumeric values.

Given Login into Mobiquity Portal as System admin Maker
 When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
         When Click on Add Transfer Rule button.
        And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level
And Enter the Values for Minimum Transfer Amount
Then Assert the error Message for Min Transfer

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1908
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that at the tranfer rule detail page Maximum Transfer Amount should not accept alphanumeric values.
 When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
         When Click on Add Transfer Rule button.
         And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level
And Enter the Values for Maximum Transfer Amount
Then Assert the error Message for Max Transfer

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1909
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that at the tranfer rule detail page Transfer Amount Multiple Of should not accept alphanumeric values.
 When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
         When Click on Add Transfer Rule button.
         And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level
And Enter the Values for Transfer Amount Multiple Of
Then Assert the error Message for Transfer Amount Multiple Of

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1904
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that Reset button is clickable and reset the entered values.
Then Click on Reset button and view details


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1905
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that Back button is clickable and navigates to previuos page.
 When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
Then Click on Back button to see previuos page


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1881
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that during approval, mobiquity would pick all the pending cases (for creation, modification or deletion) and show the same to the user for approval.
When User clicks on transfer rule approval
Then Check for the Approval list



