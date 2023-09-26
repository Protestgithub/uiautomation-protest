Feature: Subscriber Deletion for Banking Activation


  # # # Author:Aparna Aras
    # # # Last Updated:
    # # # Comments :Subscriber Deletion
    # # # Scenario_ID :Pre Requisit

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smokeprerequisite
# test case tags
@TearDown
Scenario:TC_299 To verify that valid SystemAdmin/businsess User is able to Delete the Subscriber creation.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter the Mobile number you want to delete and Click on Search
        And Click on delete icon for Subscriber
        Then Enter the Reason and Initiate to Delete
        And Navigate to My Activity and Apply required filters1
        And Assert Created Subscriber Mobile Number and Write Created on time to Delete the Subscriber creation
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smokeprerequisite
# test case tags
@TearDown
Scenario:TC_300 To verify that the deleted subscriber is approved successfully
        Given Login into Mobiquity Portal as System admin Checker
        #When Navigate to Approval Management and Click on Approvals
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for subRegistration
        And User click on approve delete request
        #Then Verify Sucess Message       
