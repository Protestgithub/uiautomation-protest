Feature: Category Management

    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_852

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify Space, hyphen and underscore special characters will be allowed in name of category.
    Given Login into Mobiquity Portal as System admin Maker
    And Navigate to category Management and click on add category
    Then Enter all the mandatory details
    Then Select Domain and Parent Category
    And click on Submit and confirm



    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_866

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that the pop-up message will show on the screen to the user of created successfully category
    Given Login into Mobiquity Portal as System admin Maker
    And Navigate to category Management and click on add category
    Then Enter category name and category Code
     And click on Submit and confirm
     And Assert the Action message


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_868

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify thatchannel admin is able to create category with a code i.e created by other net admin or channel admin
    Given Login into Mobiquity Portal as System admin Maker
    And Navigate to category Management and click on add category
    Then Enter all the mandatory details
    Then Select Domain and Parent Category1
    And click on Submit