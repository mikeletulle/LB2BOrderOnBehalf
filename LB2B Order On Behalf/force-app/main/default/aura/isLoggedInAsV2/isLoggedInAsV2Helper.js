/**
 * Created by ffeix on 01/14/2021.
 */
({
    getAuditTrail: function(component) {
        console.log('inside getAuditTrail');

        var action = component.get("c.getLoggedAsDetailsV2");
        var userId = $A.get( "$SObjectType.CurrentUser" );
        console.log('userId = %O', userId);

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var returnValue = response.getReturnValue();
                
                console.log('returnValue = %O', returnValue);
                /**
                 * 
                 * returnValue = 
                 *  0:
                 *      Action: "suNetworkAdminLogin"
                 *      CreatedById: "00509000000JUGQAA4"
                 *      Display: "Logged in using Login-As access for Chris Cloud"
                 *      Field1: "Chris Cloud"
                 *      Field2: "Franck Feix"
                 *      Field3: "chris@lb2bonbehalf.build"
                 *      Field4: "/"
                 *      Id: "0Ym09000000nT1LCAU"
                 *      __proto__: Object
                 *  1: {CreatedById: "00509000000JUGQAA4", Id: "0Ym09000000nTKmCAM", Action: "suNetworkAdminLogin", Field1: "Chris Cloud", Field2: "Franck Feix", …}
                 */

                var name = returnValue.user.Name

                returnValue.SetupAuditTrail.forEach(line => {
                    if(line.Display.includes(name)) {
                        component.set('v.scrUser', line.Field2);
                        component.set('v.display', line.Display);
                        component.set('v.reelUserID', line.CreatedById);
                    }
                });

                var navigate = component.get("v.navigateFlow");
                navigate("NEXT");

            }
            else {
                console.log('Failed with state: ' + state);
            }
        });

        $A.enqueueAction(action);
    }
})



