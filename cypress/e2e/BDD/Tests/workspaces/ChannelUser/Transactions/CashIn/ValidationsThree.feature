Feature: CashIn Validations

# Author: Arpitha
    # Last Updated:
    # Comments
    # Test Case_ID : 732
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:Modification of Transfer rule
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details for cash in.
        And Select the To details for Initiaion for cash in
        And Select the From & To category for cash in.
        When User clicks on edit option.
        Then Click on submit button.
        Then Click on confirm button.
        Then Verify Modify success Message
	    Then Logout
# Author: Arpitha
    # Last Updated:
    # Comments
    # Test Case_ID : 732
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:To verify that transaction will be successful  if Transfer rule modification is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout

# Author: Arpitha
    # Last Updated:
    # Comments
    # Test Case_ID : 732
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:To verify that transaction will be successful  if Transfer rule modification is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user


# Author: Arpitha 
    # Last Updated:
    # Comments
    # Test Case_ID : 733
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:Deletion of transfer rule
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
         And Select the Service Name and from details for cash in.
        And Select the To details for Initiaion for cash in
        And Select the From & To category for cash in.
        When User clicks on Delete option.
        #Then Verify Delete initiate Message
        Then Logout

# Author: Arpitha 
    # Last Updated:
    # Comments
    # Test Case_ID : 733
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:Approval of transfer rule deletion
        Given Login into Mobiquity Portal as System admin Checker1
        When User clicks on transfer rule approval
        And Select rule and approve
	    #Then Verify Delete Approval Message
	    Then Logout

# Author: Arpitha 
    # Last Updated:
    # Comments
    # Test Case_ID : 733
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:    TC_566 To verify that transaction will be successful  if Transfer rule  deletion is initiated but not approved.
        Given Log in with Merchant user credential
        When Click on cash in
        And Enter required details and amount of 10.01
        And Cash In request is successful should be displayed along with the transaction id
        Then Logout

# Author: Arpitha 
    # Last Updated:
    # Comments
    # Test Case_ID : 733
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:    TC_566 To verify that transaction will be successful  if Transfer rule  deletion is initiated but not approved.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on manage user
        And Enter Mobile number of merchant and KYC number in search menu
        And Click on view Details and Click on Wallet Payment History
        Then Verify amount Credited to the user for cashin transaction
