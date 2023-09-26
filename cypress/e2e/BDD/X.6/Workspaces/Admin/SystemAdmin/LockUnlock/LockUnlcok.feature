Feature: LockUnlock Wallets


  
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :439
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @FV
    # test case tags
    @test


    Scenario:To verify one can lock USD for both incoming and outgoing payments
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to Manage User, and search Business Admin
    And Enter the Mobile Number in search menu
    When User Click on eye button
    And Click on Account Info and Click on Wallet to see the bank account details
    And click on LockUnlock wallets
    And click on YES button for LockUnlock


    
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :440
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @FV
    # test case tags
    @test


Scenario:To verify i button for incoming payments should display a proper message.
Given Login into Mobiquity Portal as System admin Maker
    When Navigate to Manage User, and search Business Admin
    And Enter the Mobile Number in search menu
    When User Click on eye button
    And Click on Account Info and Click on Wallet to see the bank account details
    And click on LockUnlock wallets1



        
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :441
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @FV
    # test case tags
    @test

Scenario:To verify after locking a wallet for outgoing payment status for that wallet should be displayed as locked with description as Outgoing Payments
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Manage User, and search Business Admin
And Enter the Mobile Number in search menu
When User Click on eye button
And Click on Account Info and Click on Wallet to see the bank account details
And Assert the Locked status



# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :441
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07
    # suite tags
    @FV
    # test case tags
    @test

Scenario:To verify after locking a wallet for outgoing payment status for that wallet should be displayed as locked with description as Incoming Payments
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Manage User, and search Business Admin
And Enter the Mobile Number in search menu
When User Click on eye button
And Click on Account Info and Click on Wallet to see the bank account details
And Assert the Locked status for incoming Payments

