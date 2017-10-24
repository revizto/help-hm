var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["1"]="introduction.htm";
hmContextIds["11"]="sysreqs.htm";
hmContextIds["13"]="abbreviations.htm";
hmContextIds["20170824"]="role-guides.htm";
hmContextIds["20170825"]="license-owner.htm";
hmContextIds["20170826"]="project-manager.htm";
hmContextIds["20170827"]="content-author.htm";
hmContextIds["20170828"]="reviewer.htm";
hmContextIds["20170817"]="licensing.htm";
hmContextIds["20170818"]="activation.htm";
hmContextIds["20170819"]="manage-users.htm";
hmContextIds["27"]="manage-users.htm#license_roles";
hmContextIds["20170820"]="project-management.htm";
hmContextIds["28"]="project-management.htm#project_access_level";
hmContextIds["20170821"]="license_monitoring.htm";
hmContextIds["20170822"]="interface-tips.htm";
hmContextIds["17"]="installation-and-deployment.htm";
hmContextIds["67"]="installation-and-deployment.htm#proxy";
hmContextIds["22"]="using-the-web-gui.htm";
hmContextIds["21"]="my-projects.htm";
hmContextIds["20"]="managing-user-profile.htm";
hmContextIds["19"]="managing-notifications.htm";
hmContextIds["20170823"]="exporting-files-to-revizto.htm";
hmContextIds["68"]="exporting-files-to-revizto.htm#export_scheduler";
hmContextIds["12"]="from-revit.htm";
hmContextIds["53"]="from-revit.htm#sheet_export_revit";
hmContextIds["14"]="from-navisworks.htm";
hmContextIds["18"]="from-autocad_archicad.htm";
hmContextIds["36"]="rhinoceros-for-windows.htm";
hmContextIds["37"]="sketchup.htm";
hmContextIds["23"]="project-management2.htm";
hmContextIds["24"]="creating-a-project.htm";
hmContextIds["25"]="creating-and-managing-project-.htm";
hmContextIds["34"]="managing-project-access-rights.htm";
hmContextIds["10"]="issue-lifecycle.htm";
hmContextIds["51"]="issue-lifecycle.htm#new_3d_issue";
hmContextIds["26"]="collaborator-reports.htm";
hmContextIds["31"]="version-control.htm";
hmContextIds["29"]="revizto-application.htm";
hmContextIds["47"]="gui-overview.htm";
hmContextIds["48"]="browsing-modes.htm";
hmContextIds["52"]="browsing-modes.htm#hot_keys";
hmContextIds["35"]="model-elements-and-controls.htm";
hmContextIds["50"]="model-elements-and-controls.htm#viewpoints";
hmContextIds["61"]="model-elements-and-controls.htm#section";
hmContextIds["42"]="model-elements-and-controls.htm#example_1";
hmContextIds["49"]="2d-elements-and-controls.htm";
hmContextIds["54"]="2d-elements-and-controls.htm#image_overlay";
hmContextIds["66"]="2d-elements-and-controls.htm#versioning";
hmContextIds["30"]="view-modes.htm";
hmContextIds["43"]="preferences.htm";
hmContextIds["63"]="preferences.htm#navigation";
hmContextIds["62"]="preferences.htm#graphics";
hmContextIds["64"]="preferences.htm#camera";
hmContextIds["33"]="project-optimization.htm";
hmContextIds["32"]="export-from-revizto.htm";
hmContextIds["44"]="local-profile-management.htm";
hmContextIds["60"]="scene-editor.htm";
hmContextIds["57"]="additional-revizto-components.htm";
hmContextIds["56"]="vive-viewer.htm";
hmContextIds["55"]="oculus-viewer.htm";
hmContextIds["58"]="shared-location-ipad-connector.htm";
hmContextIds["65"]="revizto-console.htm";
hmContextIds["15"]="faq.htm";
hmContextIds["45"]="faq.htm#turn_off_upd";
hmContextIds["69"]="faq.htm#appending";
hmContextIds["16"]="troubleshooting.htm";
hmContextIds["46"]="troubleshooting.htm#working_folder";
