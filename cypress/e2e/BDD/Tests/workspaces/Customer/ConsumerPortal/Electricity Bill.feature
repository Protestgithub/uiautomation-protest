Feature: Electricity Bill Payment


# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_001
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags


Scenario: To verify user shall be able to select electricity board,Enter consumer id then select a payment mode and entering correct pin select 
should be able to proceed with bill payment and on successful transaction 

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details1
#TAGS
#version tags
@x.09
Scenario:To verify user should  be able to enable auto pay check box
When Check the AutoPay checkbox
#TAGS
#version tags
@x.09
Scenario:To verify user can click on auto pay info icon and proper auto pay related information must get display in that pop up
Then Check AutoPay information 
#TAGS
#version tags
@x.09
Scenario:To verify user shall be able to click on verify button after entering PIN Or OTP
And Enter Pin and click on Verify
#TAGS
#version tags
@x.09
Scenario: To verify that upon clicking on Copy transaction id the displayed transaction id should get copied
When Copy Transaction Id
#TAGS
#version tags
@x.09
Scenario:To verify selected board and amount present in consumer details must be visible in payment successful page
Then Check details on successpage
#Then Logout from portal



# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_002
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags


Scenario: To verify when user selects on Bank account as payment mode then respective bank  associated along with their account no to that user must get displayed

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select bank
And Enter Pin and Verify the electric bill transaction with bank
#Then Logout from portal


# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_003
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify user shall be able to add a new card(debit/credit) through add new card icon without saved card option and must be allowed to continue the payment
 

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select card
And Enter Pin and Verify the electric bill transaction with bank
#Then Logout from portal

# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_004
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify that upon clicking on download receipt in transaction success page the transaction receipt should get downloaded

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details
And Enter Pin and Verify the electric bill transaction for download receipt
#TAGS
#version tags
@x.09
Scenario: To verify that upon clicking on view history user should be able to see all fields,headers and recent transaction in view history pattern
Then Check View History
#Then Logout from portal

# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_005
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags




Scenario: To verify that User should be redirected to the cancel transaction page by clicking the cross icon on review and confirm page

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select bank
And Click on Cancel transaction
#TAGS
#version tags
@x.09
Scenario:To verify that when user click on Yes button on confirm page for cancel transaction User will redirect to  electricity bill page
Then Click on Yes
#Then Logout from portal

# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_006
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify after Successfull Electric Bill payment user should be able to click on Make Another transaction 

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details
And Enter Pin and Verify the electric bill transaction and click on Make Another Transaction
#Then Logout from portal



# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_008
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify user shall be able click on  save card button  after entering all card details and that card must get dispalyed when performing another transaction
To verify when user selects debit/credit card as payment mode saved card details should get display
Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select card with save card
And Enter Pin and Verify the electric bill transaction with bank
#Then Logout from portal


# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_007
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario:To verify in add card page when click on cross icon add card pop up gets closed

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select card with save card
And Click on Cross Icon

# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_009
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags


Scenario: To verify that User having authority for electricity bill,will be able to see Electricity bill Icon.

Given Login into Consumer Portal
When Check whether Electricity Bill is visible or not
And Click on Electricity Bill


# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_009
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario:To verify that when user click on No button on confirm page for cancel transaction User will be redirect to review and confirm page

Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and fill details and select bank
And Click on Cancel transaction
Then Click on No

# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_003
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify user shall not be able to proceed to payment unless all card details are entered in add new card Page


Given Login into Consumer Portal
#When Check whether Electricity Bill is visible or not
And Click on Electricity Bill
Then Select Board Name and submit withougiving all details


# # Author: Kalyani
# # Last Updated: 
# # Comments 
# # Scenario_ID : X.09_ConsumerPortal_ElectricBillPay_009
# # TestCase_ID : 
#version tags
@x.09
# suite tags

# test case tags

Scenario: To verify user shall be able to do electricity bill in French Language.

Given Login into Consumer Portal
When Click on French language
And Click on Electricity Bill
Then Select Board Name and fill details
And Enter Pin and Verify the electric bill transaction for french language