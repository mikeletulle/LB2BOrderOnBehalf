public without sharing class IsLoggedInAs {
    
    @AuraEnabled(cacheable=true)
    public static List<SetupAuditTrail> getLoggedAsDetails() {
        List<SetupAuditTrail> sat = [
            SELECT CreatedById,Display
            FROM SetupAuditTrail
            WHERE Action = 'suNetworkAdminLogin'
            ORDER BY CreatedDate
        ];

        return sat;

    }
    
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getLoggedAsDetailsV2() {
    
        Map<String, Object> detailsMap = new Map<String, Object>();

        List<SetupAuditTrail> sat = [
            SELECT CreatedById,Display
            FROM SetupAuditTrail
            WHERE Action = 'suNetworkAdminLogin'
            ORDER BY CreatedDate
        ];
        detailsMap.put('SetupAuditTrail', sat);

        User oUser = [select id,Name FROM User Where id =: userInfo.getUserId()];
        
        detailsMap.put('user', oUser);

        return detailsMap;

    }
}
