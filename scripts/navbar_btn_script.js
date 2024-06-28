
/** Date: Wed-5-June-2024 */
/**
 * This function does everything needed
 * when the DOM's body is resized past
 * a certain width -- to remove the nav items
 * and make it so that only when the 
 * topbar button is clicked, those nav items will
 * be displayed in another form.
 * 
 */
// var templateContainerElement = document.getElementById("topbar-template").content;
// var htmlContentCopy = document.importNode(templateContainerElement, true);

var g_NavItems;
var cssChangeClassName = "resized";
var removed = false;

function topbar_onResize()
{
    var bodyElement = document.querySelector("body");
    var bodyWidth = bodyElement.offsetWidth;
    if (bodyWidth <= 768 && removed == false){
        //  If not empty
        if (document.getElementById("topbar_nav_item") != null){
            //  Get the top bar nav items container and store them
            g_NavItems = document.getElementById("topbar_nav_item").outerHTML;
    
            //  then remove it from the DOM.
            document.getElementById("topbar_nav_item").remove();
            
            //  Finally, unhide the topbar toggle button
            document.getElementById("topbar-btn").classList.remove("hidden");
            //  and define the resized  class
            document.getElementById("topbar-content").classList.add(cssChangeClassName);

            //  If the toggle button is clicked to show the nav-items
            //  that is, the open class no more exists.
            if (document.getElementById("topbar-btn").classList.contains("open") != true){
                addTopbarNavItems();    //  Add them;
            }
            removed = true;
        }
    }
    else if (bodyWidth > 768){
        if (document.getElementById("topbar_nav_item") == null){
            //  then re-add it
            document.getElementById("topbar-content").innerHTML += g_NavItems;
            //  Finally, hide the topbar toggle button
            document.getElementById("topbar-btn").classList.add("hidden");
            //  Remove the resized class
            document.getElementById("topbar-content").classList.remove(cssChangeClassName);
            
            removed = false;
        }
        else if (document.getElementById("topbar-btn").classList.contains("open") != true){
            document.getElementById("topbar-btn").classList.add("hidden");
            document.getElementById("topbar-content").classList.remove(cssChangeClassName);
            removed = false;
        }
    }

    //  DONE. When the topbar open button is clicked
    //  this `addNavItems` runs
}

function addTopbarNavItems()
{
    //  Get nav items' container element
    var navItemsParent = document.getElementById("topbar-content");
    //  append the child
    navItemsParent.innerHTML += g_NavItems;
    //  Add class resized to change CSS styling
    document.getElementById("topbar-content").classList.add(cssChangeClassName);
}
function removeTopbarNavItems()
{
    var navItems = document.getElementById("topbar_nav_item");
    //  Remove it
    navItems.remove();
    //  Don't Remove styling class
    // document.getElementById("topbar-content").classList.remove(cssChangeClassName);
}

/** Date: Mon-3-Jun-2024 */
function btn_toggleTopbar()
{
    var iconsTemplateElement = document.getElementById("topbar_icons-template").content;
    var htmlContentCopy = document.importNode(iconsTemplateElement, true);

    var iconElementContainer = document.getElementById("topbar-btn");

    var open_icon = htmlContentCopy.getElementById("topbar-open_icon");
    var close_icon = htmlContentCopy.getElementById("topbar-close_icon");

    //  If the icon element is clicked when the default open-icon is on
    //  replace with close icon
    if (iconElementContainer.classList.contains("open")){
        iconElementContainer.classList.toggle("open");
        iconElementContainer.innerHTML = close_icon.outerHTML;
        addTopbarNavItems();

    }
    else{
        iconElementContainer.classList.toggle("open");
        iconElementContainer.innerHTML = open_icon.outerHTML; 
        removeTopbarNavItems();   
    }
    // console.log("resized");

}

function load_topbar_btn()
{
    var iconsTemplateElement = document.getElementById("topbar_icons-template").content;
    var htmlContentCopy = document.importNode(iconsTemplateElement, true);

    var iconElement = htmlContentCopy.getElementById("topbar-open_icon").outerHTML;
    // console.log(iconElement);
    document.getElementById("topbar-btn").innerHTML = iconElement;
}
/*######################################################*/

// function
function main()
{
    load_topbar_btn();
    topbar_onResize();
}

main();