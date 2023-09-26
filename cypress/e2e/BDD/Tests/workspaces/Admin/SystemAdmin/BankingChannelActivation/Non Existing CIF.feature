Feature: BankingActivation for Non Existing CIF

This feature includes Banking Activation of Subscribers


    # Author: CHetan S
    # Last Updated:21/06/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_158

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@test
    Scenario:TC_211 To verify that System Admin is able to activate mobile banking using MSISDN if CIF number does not exist.
        Given Login into Mobiquity Portal as System admin Maker
#         When Navigate to Banking Channel Activation and click
#         And Enter the Full KYC mobile number and search for the user
#         And Click on next and activate mobile Banking


#     # Author: CHetan S
#     # Last Updated:21/06/2022
#     # Comments
#     # Scenario_ID :
#     # TestCase_ID : TC_159

# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# 
# # test case tags
# @test
#  Scenario:TC_212 To verify that System Admin is able to activate internet banking using MSISDN if CIF number does not exist.
#         Given Login into Mobiquity Portal as System admin Maker
#         When Navigate to Banking Channel Activation and click
#         And Enter the Full KYC mobile number and search for the user
#         And Click on next and activate internet Banking


#     # Author: CHetan S
#     # Last Updated:21/06/2022
#     # Comments
#     # Scenario_ID :
#     # TestCase_ID : TC_160

# #TAGS
# #version tags
# @x.04 @x.06 @x.07 @x.09
# # suite tags
# 
# # test case tags
# @test
#         Scenario:TC_213 To verify that message should be displayed to bank admin if mobile number/user does not exist then process should terminated.
#         Given Login into Mobiquity Portal as System admin Maker
#         When Navigate to Banking Channel Activation and click
#         And Enter the mobile or CIF number which is not registered and search for the user
#         Then verify admin is able to see the Message mobile or CIF number does not exist in the system
