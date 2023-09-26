Feature:Pull From Business

 #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1337

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that head merchant pull from business transaction will not be successful if one head merchant enter his own MSISDN instead of  other user's MSISDN (MSISDN2).
          Given Log in with Merchant user credential for inverse C2C
          When Click On Inverse C2C Transfer
          And Enter merchant MSISDN for Inverse C2C transaction
          Then Verify Success message for Inverse C2C transaction



# Author: Kalyani M
# Last Updated:
# Comments 
# Test Case_ID : Transfer Rule for Inverse C2C
# 
#TAGS
#version tags
@x.09
# suite tags
@Smokeprerequisite

# test case tags
@test

Scenario:TC_536 To verify that System admin should be able to add initiate Transfer Rule successfully for Inverse C2C Commission to Normal
Given Login into Mobiquity Portal as System admin Maker
When User Click on Transfer Rule.
And Select the Service Name and from details for Inverse C2C
And Select the To details for Initiaion for Inverse C2C
And Select the From & To category as Wholesaler
And Click on Add Transfer Rule button for Inverse C2C

# Author: Kalyani M
# Last Updated:
# Comments 
# Test Case_ID : Transfer rule Approval
# 
#TAGS
#version tags
@x.09
# suite tags
@Smokeprerequisite

# test case tags
@test

Scenario:TC_535 To verify that System admin should be able to add Approve Transfer Rule successfully.
Given Login into Mobiquity Portal as System admin Checker1
When User clicks on transfer rule approval
And Select rule and approval for C2C




    #Author: Arpitha
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1337

    #TAGS
    #version tags
@x.09
    # suite tags
    @SIT
    # test case tags
    @test

 Scenario:To verify that Transaction will be successful if transaction performed for different wallet.
          Given Log in with Merchant user credential for inverse C2C
          When Click On Inverse C2C Transfer
          And Enter all details for Inverse C2C transaction
          Then Verify Success message for Inverse C2C transaction    