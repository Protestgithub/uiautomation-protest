Feature: Creation of System Administrator by Super Administrator

        
    #TAGS
    #version tags
    # @x.07 @x.09 @x.06 @x.04
    # suite tags
    @prerequisite @Smoke
    # test case tags
@Smokeprerequisite

    Scenario: TC_01 TC_Smok27 UMS_1974 To verify that user is able to add system admin user
        Given Create Folder
        Given Login into Mobiquity Portal as Super admin Maker
        When Navigate to User Management and click on register
        And Click On System Admin and select Single User
        And Enter all Maker required Fields for Maker
        And Save LoginID
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
    @prerequisite @Smoke 
    # test case tags
   @Smokeprerequisite

    Scenario: TC_02 TC_Smok28 UMS_1974 To verify that Master user can approve add initiation request of System admin.
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
    @prerequisite @prerequisite
@Smokeprerequisite
    Scenario: TC_03 Checking whether we are able to login with created systemadmin crendentials
        Given Login into Mobiquity Portal as System admin Created by Master

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

    #Scenario: TC_05 Checking whether we are able to login with created systemadmin crendentials
         #Given x.4 Login into Mobiquity Portal as System admin Created by Master



    

