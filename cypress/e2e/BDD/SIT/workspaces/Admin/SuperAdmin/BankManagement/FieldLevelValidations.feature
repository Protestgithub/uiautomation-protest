Feature: Bank Management Field level validation

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

Scenario:To verify that user is able to get proper error message  when pool account number is already associated with another bank.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Required Details
Then Assert the Error message if the Pool account number is already exist And  priority value


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_334

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that user is able to get proper error message when bank name is duplicate.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Required Details for Bank
Then Assert the Error message if the Bank Name is already exist




#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_330

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that while adding bank, If pool account number is specified then pool a/c type and CBS type are mandatory to specify otherwise not.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Details without PoolAccountNo and check CBS type
Then Check that Pool Acc type and CBS type is not Mandatory field

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_335

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that user is able to get proper error message if user adds bank on web without entering Pool A/C type and CBS type field.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Details without Pool acc Type and CBS Type
Then Assert the Error message that Pool type and CBS type is Mandatory


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_333

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that user is able to get prorper error message  when priority value is not entered.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Details without PriorityValue
Then Assert the Error Message that PriorityValue is Mandatory


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_336

#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that user is able to get prorper error message if user adds bank on web without entering Pool A/C no and Pool account type.
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter the Details without PoolAccountNo
Then Assert the error message that PoolAccountNo is mandatory




#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_338
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that superadmin is able to add Bank successfully with name of existing deleted bank.
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to Bank Master and Click on Modify service
And Select the Bank
Then Verify the sucess message of deleted bank


#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: Creation of Bank 
Given Login into Mobiquity Portal as Super admin Checker
When Navigate to Bank Master and Click on it
And Enter All the Required Details for creation of Bank 