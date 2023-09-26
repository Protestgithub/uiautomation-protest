Feature: Authentication Validations



# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:To verify that user will be forced to change periodically their password and it is controlled by the system preference DYS_AFTER_CHANGE_PWD which is a modifiable parameter.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to Security and click to select security profile
    And Click on add profile select user type as BusinessAdmin and fill the details
    Then Verify user will be forced to change password periodically
        
# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that lower hierarchy user should not able to reset the password of Upper hierarchy user.
    Given Log in with Merchant user credential
    When Navigate to User Management and Click on Manage Users
    And Select the user type from drop down and type the mobile Number and click on search
    Then Verify Lower hierarchy cannot reset password of Upper hierarchy

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario:"To verify that following general rules apply to user’s PIN (applicable for both mPIN and tPIN): 
PIN Should not be sequential i.e. no two consecutive digits should be sequential for example PIN like 2379, 9862 are not allowed.
PIN Should not consist of any duplicate number i.e. there should not be any repetitive number in the PIN for example PIN like 1139, 2452 are not allowed.
PIN Length of the PIN should be made configurable, as per ISO 9564 guidelines of PIN Code management, the length of PIN should not be less than 4 digits and more than 12 digits (although upto 6 digits is ideal from usability perspective).
 All mobiquity money users or customers will have same length of PIN ( as per value defined in the configurable preference PIN_LENGTH)
o PIN_MIN_LENGTH and PIN_MAX_LENGTH would not be allowed to be modified but this will be displayed on preferences screen. These two values would be set in factory settings.
o Due to security reasons, value of DEFAULT_PIN and DEFAULT_PASSWORD will not be displayed on preferences screen. However, value of these preferences can be modified."