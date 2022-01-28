/**
 * Created by ffeix on 01/14/2021.
 *
 */
({
    doInit: function(component, event, helper) {

        console.group('%c isLoggedInAs', 'background: #76b72a; color: #ffffff');
        var cookieString = "; " + document.cookie;
        var parts = cookieString.split("; " + "RRetURL" + "=");
        if (parts.length === 2) {
            console.log('On Behalf session detected');

            helper.getAuditTrail(component);
            
        }
        else {
            console.log('Regular session');
            //Advance to next flow screen
            var navigate = component.get("v.navigateFlow");
            navigate("NEXT");
        }

        console.groupEnd();
    }
})
