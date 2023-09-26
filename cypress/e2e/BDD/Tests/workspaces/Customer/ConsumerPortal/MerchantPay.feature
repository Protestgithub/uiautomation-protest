Feature: Mearchent Pay

# # Author: Niroop H N
# # Last Updated: 05-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: To verify user shall be able to select Phone number,amount,remarks then select a payment mode and entering correct pin hould be able to proceed with merchant payment.
Given Login into Consumer Portal as Customer
#And change Language French
When Click on pay Mearchent And Fill all the details
And Enter the Pin and verify
#And Asserting the paymet sheet

#To verify that after successful or failed transaction on clicking view history transaction should be visible in view history list.
# # Author: Niroop H N
# # Last Updated: 05-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: To verify user shall be able to select Phone number,amount,remarks then select a payment mode and entering correct pin hould be able to proceed with merchant payment.
Given Login into Consumer Portal as Customer
And change Language French
When Click on pay Mearchent And Fill all the details
#And Enter the Pin and verify transaction
And Enter the Pin and verify
#Then click on Done Button    


# # Author: Niroop H N
# # Last Updated: 05-06-23
# # Comments 
# # Scenario_ID : 19 & 25
# # TestCase_ID : 
@test


Scenario: To verify that after successful or failed transaction on clicking view history transaction should be visible in view history list.
Given Login into Consumer Portal as Customer
When Click on pay Mearchent And Fill all the details
And Enter the Pin and verify
Then click on Payament History and order detail

# # Author: Niroop H N
# # Last Updated: 05-06-23
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test

Scenario: Change Languge.
Given Login into Consumer Portal as Customer
And change Language French
When Click on pay Mearchent And Fill all the details
And Enter the Pin and verify
Then click on Done Button  