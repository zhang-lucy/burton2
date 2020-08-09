/*
 * This is the list of members on the floor. Put the names into the
 * list in the format  "room":"name".
 * Please ensure that the room number is in  the format "241F" and
 * that the items are separated by a comma.
 */
var floorlist = {
  "241F":"Isabella",
  "241D":"Kerry",
  "231A":"Ariana",
  "231B":"Rachel",
  "231C":"Alyssa",
  "231D":"Sharone, Talya, and Keren",
  "232A":"Ksenia",
  "232B":"Hannah",
  "232C":"Kaitlyn",
  "232D":"Suzanne and Marian",
  "233A":"Maya",
  "233B":"Anna",
  "233C":"Richard and Devin",
  "233D":"Stephanie",
  "233F":"Sammi",
  "233G":"Catherine",
  "241B":"Mike D. and George",
  "241C":"Eric and Jared",
  "241G":"Emily",
  "241K":"Justin",
  "251A":"Ido",
  "251B":"Meena",
  "251C":"Jesse",
  "251D":"Mike P and Ian",
  "252A":"Paul",
  "252B":"Adin",
  "252C":"Max P",
  "252D":"Philippe, Tomer, and Adam",
  "253A":"Max",
  "253B":"Ronny",
  "254A":"Greg",
  "254B":"Eryn",
  "254C":"Mariana",
  "254D":"Rachel, Abby, and Carissa",
  "254F":"Sergio and Julian"}

/*
 * DO NOT MODIFY BELOW THIS POINT UNLESS YOU KNOW WHAT YOU'RE DOING
 * this simple object just gets the name from the list and updates
 * the blurb box.
 */
var floormap = {
  init: function(){
    var areas = document.getElementsByTagName('area');
    for (var i = 0; i< areas.length; i++){
      areas[i].addEventListener("mouseover", floormap.displayResident, false)
    }
  },
  displayResident: function(evt){
    var room = evt.target;
    var roomnumber = room.getAttribute("alt");
    floormap.updateRoomDisplay(roomnumber);
  },
  updateRoomDisplay:function(number){
    var resident = floorlist[number.toUpperCase()],
      r= document.getElementById("room"),
      re= document.getElementById("resident"),
      rn=String(number.toUpperCase());
    if (r.firstChild) r.removeChild(r.firstChild);
    if (re.firstChild) re.removeChild(re.firstChild);
    r.appendChild(document.createTextNode(rn));
    re.appendChild(document.createTextNode((resident)?resident:"n/a"));
  }
}
