
/**
 * Date: Sun-2-June-2024 -- Mon-3-June-2024
 * 
 * I put the icon svg elements in the template element.
 * Then I was trying to read their HTML. But because they were
 * in a template element, they were not part of the DOM.
 * Because of this, I could not read their innerHTML.
 * 
 * Date: Thurs-6-June-2024
 * Had a small issue: the theme state stopped saving properly.
 * This was because of some checking conditions; especially
 * that I checked the value from `localStorage` as a boolean
 * rather than as a String.
 * It is fixed now!
 */

var iconsTemplateElement = document.getElementById("topbar_icons-template").content;
var htmlContentCopy = document.importNode(iconsTemplateElement, true);


function switchToDarkTheme()
{
    document.body.classList.replace("lightBG", "darkBG");
    // if (document.body.classList.contains("lightBG")){
    //     document.body.classList.remove("lightBG");
    // }
    //  Change Icon
    var iconElement = htmlContentCopy.getElementById("theme_icon-sun").outerHTML;
    document.getElementById("theme_btn").innerHTML = iconElement;
    localStorage.setItem("dark_theme", true);
    // console.log("Switched to dark! " + localStorage.getItem("dark_theme"));
}

function switchToLightTheme()
{
    // document.body.classList.add("lightBG");
    document.body.classList.replace("darkBG","lightBG");
    // if (document.body.classList.contains("darkBG")){
    //     document.body.classList.remove("darkBG");
    // }
    //  Change Icon
    var iconElement = htmlContentCopy.getElementById("theme_icon-moon").outerHTML;
    document.getElementById("theme_btn").innerHTML = iconElement;
    localStorage.setItem("dark_theme", false);
    // console.log("Switched to light! " + localStorage.getItem("dark_theme"));
}

//  Hook
function btn_toggleTheme()
{
    //  If currently light theme
    if (document.body.classList.contains("lightBG") && localStorage.getItem("dark_theme")){
        document.body.classList.remove("lightBG");  //  switch off
        document.body.classList.add("darkBG");   //  switch on
        //  Change Icon
        var iconElement = htmlContentCopy.getElementById("theme_icon-sun").outerHTML;
        document.getElementById("theme_btn").innerHTML = iconElement;
        localStorage.setItem("dark_theme", true);
    }
    else    //  Else, it's dark theme, so change it
    {
        document.body.classList.remove("darkBG");   //    switch off
        document.body.classList.add("lightBG");  //  switch on
        //  Change Icon
        var iconElement = htmlContentCopy.getElementById("theme_icon-moon").outerHTML;
        document.getElementById("theme_btn").innerHTML = iconElement;
        localStorage.setItem("dark_theme", false);
    }
    // console.log("Toggled! " + localStorage.getItem("dark_theme"));
}

function loadIcon()
{
    // console.log(localStorage.getItem("dark_theme"));
    /*for (var i=0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        console.log("Key: " + key + ", Val: " + String(localStorage.getItem(key)));
    }*/
    if (localStorage.getItem("dark_theme") == "true") //  If true
    {
        switchToDarkTheme();
    }
    else if (localStorage.getItem("dark_theme") == "false")
    {
        switchToLightTheme();
    }
    else
    {    
        switchToLightTheme();
    }
}

function main()
{
    loadIcon();
}

main();