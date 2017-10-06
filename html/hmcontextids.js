﻿var hmContextIds = new Array();
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
hmContextIds["20170820"]="project-management.htm";
hmContextIds["20170821"]="license_monitoring.htm";
hmContextIds["20170822"]="interface-tips.htm";
hmContextIds["17"]="installation-and-deployment.htm";
hmContextIds["22"]="using-the-web-gui.htm";
hmContextIds["21"]="my-projects.htm";
hmContextIds["20"]="managing-user-profile.htm";
hmContextIds["19"]="managing-notifications.htm";
hmContextIds["20170823"]="exporting-files-to-revizto.htm";
hmContextIds["12"]="from-revit.htm";
hmContextIds["14"]="from-navisworks.htm";
hmContextIds["18"]="from-autocad_archicad.htm";
hmContextIds["10"]="issue-lifecycle.htm";
hmContextIds["15"]="faq.htm";
hmContextIds["16"]="troubleshooting.htm";