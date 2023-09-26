Feature: Service Charge Comission



#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_40,TC_41
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that try to click on save button without fill any mandatory fields
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge
And Click on next button without filling the Mandatory fields


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1301
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that valid user cannot define Service Charge if To field is left blank or invalid in slab entry of Commission Setup.
Given Login into Mobiquity Portal as System admin Maker
When Click on Service Charge
And Enter required fields for Adding ServiceCharge
Then Select the Sender and click on Paying Entity


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_1314
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that user other than network admin is not able to add initiate service charge successfully.
Given Login with corporate user credential
Then Check with ServiceCharge


###################################################################################
#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_38 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that during resume service charge profile there should not be need for an approval
Given Login into Mobiquity Portal as System admin Maker
When Navigate to suspended or resume service charge
And Click on Save Button
Then Assert the Success message



#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_43
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To veirfy that try to select the date less than currect date 
When Click on Service Charge
And Enter all the fields
Then Assert the Error message date less than currect date

