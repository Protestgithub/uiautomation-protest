Feature: Ability to download & share receipts - Consumer portal


# # Author: Arpitha
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : TC_517
#TAGS
#version tags
@x.6 @x.7
#suite tags
@test
Scenario:To verify appropriate error should be displayed on providing wrong/invalid OTP while validating entered mobile number.
Given Login into Consumer Portal to register
And enter the details for mobile otp verification
Then asert the test message of otp

# # Author: Arpitha
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : TC_515
#TAGS
#version tags
@x.6 @x.7
#suite tags
@test
Scenario: To verify appropriate error should be displayed when Last name field values are not provided and it is configured as mandatory.
Given Login into Consumer Portal
#And Enter all details except Last Name field
#Then assert the error message last name

# # Author: Arpitha
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : TC_516
#TAGS
#version tags
@x.6 @x.7
#suite tags
@test
Scenario:To verify appropriate error should be displayed on providing wrong/invalid email in email ID field.
Given Login into Consumer Portal
#And Enter invalid email ID
#Then assert error message for email id


