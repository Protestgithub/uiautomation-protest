Feature: Transfer rules Add Suspend Delete

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_20
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test

    Scenario:TC_263,TC_Smoke21 To verify that System admin is able to add O2C Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When User clicks on O2C transfer rules
        And Select Domain Name.
        And Select Category Name.
        And Select MFS Provider,Payment Instrument.
        Then Enter First Approval Limit.
        And Click on submit.
        And Click on confirm.
        Then Verify O2C Transfer rule success Message

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_16
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_264 To verify that System admin should be able to View Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        When User clicks on view option.




    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_18
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_265 To verify that System admin should be able to Suspend Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        When User clicks on edit option.
        And Suspend the status in transfer rule
        Then Click on submit button.
        Then Click on confirm button Suspend Transfer Rule.

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_19
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_266,TC_Smoke22 To verify that System admin should be able to add approves Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Checker1
        When User clicks on transfer rule approval
        And Select rule and approve
        Then click on submit
        Then Verify Approval success Message

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_17
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_267 To verify that System admin should be able to Delete Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Transfer Rule.
        And Select the Service Name and from details.
        And Select the To details for Initiaion
        And Select the From & To category.
        When User clicks on Delete option.
        #Then Verify Delete initiate Message
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_574 To verify that System admin should be able Approve Delete Transfer Rule successfully.
        Given Login into Mobiquity Portal as System admin Checker1
        When User clicks on transfer rule approval
        And Select rule and approve
#Then Verify Delete Approval Message


########################################## Sudheer #######################################################


# Author: Sudheer
# Last Updated:
# Comments
# Test Case_ID : TC_164
#
#@test
#Scenario: Transfer rule Creation for Transfer to Bank
#Given Login into Mobiquity Portal as System admin Maker
#When User Click on Transfer Rule.
#And Select the Service Name and from Details for Transfer to Bank
#And Select the To details for Transfer to Bank
#And Select the From & To category for Transfer to Bank
#When Click on Add Transfer Rule button.
#And Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level 1
#Then Click on submit button.
#Then Click on confirm button.
#Then Verify initiate success Message for Transfer to Bank

# Author: Sudheer
# Last Updated:
# Comments
# Test Case_ID : TC_164
#
#@test
#Scenario: Approval of Transfer rule Creation for Transer Bank

#Given Login into Mobiquity Portal as System admin Checker1
#When User clicks on transfer rule approval
#And Select rule and approve
#Then click on submit
#Then Verify Approval success Message
