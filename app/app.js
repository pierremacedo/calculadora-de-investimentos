import { Application } from '@nativescript/core';
const application = require("@nativescript/core/application");
const frameModule = require("@nativescript/core/ui/frame");
const createads = require("./functions.js").createads;


Application.run({ moduleName: 'app-root' })

if (application.android) {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, backEvent);
}
function backEvent(args) {
    const currentPage = frameModule.Frame.topmost().currentPage;
    if (currentPage && currentPage.exports && typeof currentPage.exports.backEvent === "function") {
         currentPage.exports.backEvent(args);
   }
}

createads();