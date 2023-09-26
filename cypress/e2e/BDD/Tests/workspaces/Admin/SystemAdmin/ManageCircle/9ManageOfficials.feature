Feature: Search Manage Circle


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_039
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario:Verify the manage officials section in the manage circle module, <chairperson> (change the chairperson and show details of current chairperson) <secretaries> (Remove and add secreateries).
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to manage circle page
        And Click Manage Circle and search the valid circle Number
        And View the Circle details and click on manage officials tab
        Then Verify Manage officials section

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_039
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify chairperson change history
        Then Verify the chairperson change history


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_040
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the chairperson details
        Then Verify the chairperson details


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_041
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test
    Scenario: click on the chairperson, click on the �change chairperson� button, open a the member list which is a member of circle, click to choose a member on the right side a green tick is appear, click on change button opened a OTP verification pop up message f...
        Then Verify the change chairperson popup


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_042
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Enter the OTP and click on the verify button, open a second pop up message(verify the OTP) for new chairperson mobile number.
        Then Verify existing chairperson mobile number

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_043
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: To Verify new chairperson mobile number
        Then Verify new chairperson mobile number


    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_044
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Verify the Secreataries details
        Then Verify the Secreataries details


        

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_045
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario:Click on the secretaries, click on the add secretries button, open a member list, click on the member shows a green tick on the member and click on the �add� button to display a message 2 secretaries added successfully.
        Then Add secreataries and verify success message

    # Author: Narendra
    # Last Updated:
    # Comments
    # Scenario_ID :
    # TestCase_ID : X.09_SavingCircles_046
    #TAGS
    #version tags
    @x.09
    # suite tags
    @Sanity @Smoke @UAT
    # test case tags
    @test

    Scenario: Chairperson is try to remove circle without making another member as a chairperson, displayed a error �can not remove circle�
