/**
 * Date of Redo: Sat-22-June-2024
 * 
 * Briefing:
 * Redo: Used Markdown for Projects rather than JSON
 * 
 */


//  The alternative for imports
var navItemsScript = new NavItemsScript();
var loadProjectDetailsFuncRef = (callerId)=>{
    loadProjectDetails(callerId);
    // console.log("called!");
};


/**
 * Briefing:
 * Acts as a store for every content loaded into the element
 * of id `home_html`
 */
var localStoreKey = "recentHomeContent";


function main()
{
    //  First load the home page, topbar, navbar templates
    //  into actual DOM
    readHTMLTemplate();
    
    //  For Nav Items Click response
    navItemsScript.registerNavbarItemsClickEvent();
}

/**
 * This function loads all contents from the template which have
 * an id that has the corresponding keyword in it.
 * 
 * But in the case of keeping track of the changing of content
 * in element id `home_html`, I would check the localStorage
 * to see if the `g_recentContent` already had a value...
 * which will be used to populate this element.
 */


function readHTMLTemplate()
{
    var keywords = ["topbar", "footbar", "home"];
    var loadTargetElements = document.getElementsByClassName("load-target");
    var loadSourceTemplate = document.getElementsByClassName("load-source");

    //  For every target
    for (var i=0; i < loadTargetElements.length; i++){
        //  Get each's id
        var id = loadTargetElements[i].id;
        //  For every keyword
        for (var j=0; j < keywords.length; j++){
            //  Check if keyword is in that target
            if (id.includes(keywords[j])){
                //  For every source element to load from into target
                for (var k=0; k < loadSourceTemplate.length; k++){
                    if (loadTargetElements[i].id === "home_html"){
                        
                        if (localStorage.getItem(localStoreKey).length > 0 || localStorage.getItem(localStoreKey) != undefined){
                            loadTargetElements[i].innerHTML = localStorage.getItem(localStoreKey);
                            navItemsScript.registerNavbarItemsClickEvent();
                            //  If the element loaded has id 'projects'
                            if (loadTargetElements[i].firstElementChild.id == "projects-content"){
                                navItemsScript.loadContent_v2("projects");
                            }
                        }
                        break;  //  If it's finished loading
                        
                    }
                    //  If that source element has the keyword too
                    //  and The current target element is not "home_html"
                    if (loadSourceTemplate[k].id.includes(keywords[j])){
                        var templateContentCopy = document.importNode(loadSourceTemplate[k].content, true);
                        loadTargetElements[i].appendChild(templateContentCopy);
                        break;  //  Or if the appropriate target element is found
                    }
                }
            }
        }
    }
}


main();