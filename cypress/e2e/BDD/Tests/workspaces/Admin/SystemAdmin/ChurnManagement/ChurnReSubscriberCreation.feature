Feature: Subscriber creation for Churned MSISDN

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID : TC_879
    # TAGS
    # version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @sanity
    # test case tags
    @test 
    
Scenario:TC_388 To verify that channel user is able to register subscriber again using previously churn MSISDN of existing user.
Given Login into Mobiquity Portal as System admin Maker
# When Navigate to User Management and click on register
# And Select User type as Subscriber and click on subscribers for initiate of Creation
# And Enter all the required subscriber details of churned user
# And Enter KYC Details
# And Enter Subscriber Profile Details
# Then Confirmation message displayed
# When Navigate to My Activity and Apply required filters
# Then Assert Created Subscriber Mobile Number and Write Created on time for Churn Management

# #Approval
#     #TAGS
#     #version tags
#     @x.04 @x.07 @x.09 @x.06
#     # suite tags
#     @sanity
#     # test case tags
#     @test 
# Scenario:TC_389 To approve initiated subscriber
#         Given Login into Mobiquity Portal as System admin Checker1
#         When Navigate to Checker Approvals and filter by Submitted status
#         And User click on Subscriber submitted user data for Churn
#         And Approve the Users for Admin Creation
#         Then User status is approved
