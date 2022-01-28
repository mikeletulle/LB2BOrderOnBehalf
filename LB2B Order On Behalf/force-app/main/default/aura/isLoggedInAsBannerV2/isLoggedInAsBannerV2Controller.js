/**
 * Created by ffeix on 01/14/2021.
 *
 */
({
    doInit: function(component, event, helper) {

        console.group('%c isLoggedInAsBannerV2', 'background: #76b72a; color: #ffffff');
        var cookieString = "; " + document.cookie;
        var parts = cookieString.split("; " + "RRetURL" + "=");
        if (parts.length === 2) {
            console.log('On Behalf session detected');

            helper.getAuditTrail(component);
            
        }
        else console.log('Regular session');

        console.groupEnd();
    }
})
