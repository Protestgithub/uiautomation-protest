Feature: Profile
# # Author: Niroop H N
# # Last Updated: 26-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: To verify user shall be able to select Phone number,amount,remarks then select a payment mode and entering correct pin hould be able to proceed with merchant payment.
Given Login into Consumer Portal as Customer
When Click on Profile
And Assert all the required fields are present
And Update KYC details

# # Author: Niroop H N
# # Last Updated: 26-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: Limits & Threshold.
Given Login into Consumer Portal as Customer
When Click on Profile
And Assert all the required fields are present
And checking on Threshold and Limits



# # Author: Niroop H N
# # Last Updated: 26-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: To verify user shall be able to select Phone number,amount,remarks then select a payment mode and entering correct pin hould be able to proceed with merchant payment.
Given Login into Consumer Portal as Customer
When Click on Profile
And Assert all the required fields are present
And Currency