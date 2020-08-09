// When the user scrolls down 170px from the top of the document, 
// fade in smaller navigation bar
window.onscroll = function() {scrollFunction()};


var y, h, nav, navmob, sb, logo, hoverPath;
var hmob = 180;

document.body.onload = function () {
    
    console.log("1 loaded");
    nav = document.getElementById("side-box");
    sb = document.getElementsByClassName("sidebar-item");
    
    var title = document.getElementsByTagName("title")[0].innerHTML;

    if (title == "B2 - about") { 
        document.getElementById('sb-about').classList = "active";
    }
    else if (title == "B2 - people") {
        document.getElementById('sb-people').classList = "active";
    }
    else if (title == "B2 - suites") { 
        document.getElementById('sb-suites').classList = "active";
    }
    else if (title == "B2 - calendar") {
        document.getElementById('sb-calendar').classList = "active";
    }
    else if (title == "B2 - kosher") {
        document.getElementById('sb-kosher').classList = "active";
    }
    // else if (title == "B2 - name") {
    //     document.getElementById('sb-name').classList = "active";
    // }


    // navmob = document.getElementById("top");
    h = nav.offsetHeight;
    y = h - hmob;


}





var extra = 30;

function scrollFunction() {
    if (window.innerWidth < 1030) {
        nav = document.getElementById("side-box");
        h = nav.offsetHeight;
        y = h - hmob;
        h = h - extra
        
        console.log("CLASSES: "+nav.classList);
        let scroll = document.documentElement.scrollTop;
        console.log("y="+hmob);
        console.log("scroll="+scroll);

        if (scroll > h) {
            document.getElementById('mobile-nav').style.opacity = '1';
            console.log(document.getElementById('mobile-nav'));       
        }
        if (scroll < h) {
            document.getElementById('mobile-nav').style.opacity = '0';
        }
    }    
}

