Feature: Creation of System Administrator by Super Administrator

        
    #TAGS
    #version tags
    # @x.07 @x.09 @x.06 @x.04
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
    Scenario: TC_04 UMS_1996 To verify that user is able to add system admin checker1
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And Enter all Maker required Fields for Maker
        And Save LoginID1
        And Enter all Profile Details
        Then Confirmation message displayed


    # Author: Kalyani M
    # Last Updated:
    # Comments    :
    # Test Case_ID : TC_41_sysadmin
    #

    #TAGS
    #version tags
    # @x.04 @x.07 @x.09 @x.06
    # suite tags
    
    # test case tags
    @prerequisite
@Smokeprerequisite
    Scenario: TC_05 UMS_1974 To verify that Master user can approve add initiation request of System admin checker1.
        Given Login into Mobiquity Portal as Super admin Checker
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Approve the Users
        Then User status is approved

        #TAGS
    #version tags
    # @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
@Smokeprerequisite
    Scenario: TC_06 Checking whether we are able to login with created systemadmin checker1 crendentials
        Given Login into Mobiquity Portal as System admin Checker1 Created by Master



# Author: Kalyani M
    # Last Updated:
    # Comments    :
    # Test Case_ID : TC_41_sysadmin
    #
    #TAGS
    #version tags
    #@x.04 @x.06
    # suite tags
    
    # test case tags
    #@prerequisite

    #Scenario: TC_11 Checking whether we are able to login with created systemadmin checker1 crendentials
        #Given x.4 Login into Mobiquity Portal as System admin Checker1 Created by Master




    