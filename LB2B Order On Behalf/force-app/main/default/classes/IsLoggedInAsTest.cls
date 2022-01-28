@IsTest
public with sharing class IsLoggedInAsTest {
    public IsLoggedInAsTest() {

    }

    @IsTest
    /*
        Test the method
    */
    public static void testCode1() {

        System.debug('begin testCode1()');

        Test.startTest();

        List<SetupAuditTrail> sat = IsLoggedInAs.getLoggedAsDetails();

        Test.stopTest();

    }
    @IsTest
    /*
        Test the method
    */
    public static void testCode2() {

        System.debug('begin testCode1()');

        Test.startTest();

        Map<String, Object> detailsMap = IsLoggedInAs.getLoggedAsDetailsV2();

        Test.stopTest();

    }
}
