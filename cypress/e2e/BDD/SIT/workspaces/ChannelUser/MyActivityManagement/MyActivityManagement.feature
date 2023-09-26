Feature: User Management System>> My Activity Management

    #######################   User Management System>> My Activity Management ##########################


# Author: Sudheer Baraker
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:To verify that Status column shall display the statuses as: completed (approval is completed and record is processed), Pending approval, processing (Approved but record is being processed), rejected (record is rejected by approver), cancelled (record is cancelled after uploaded and processing stage).
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as AtmMachine
And Enter all the required business user details Creation for AtmMachine user role
And Save AtmMachine LoginID
And Enter AtmMachine KYC Details
And Enter AtmMachine Profile Details
Then Confirmation message displayed
When Click on My Activity Management

