Feature: TCP Creation E2E

###################################### TCP Creation ###############################################
# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked

# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: To check if the values in View TCP the credit and debit limit values are same as in the created instrument TCP
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Enter profile name of instrument TCP
And Click on view details, and check whether User details are present
And verify credit and debit limit values are same as in the created instrument TCP