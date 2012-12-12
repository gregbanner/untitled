/*
	oooo    oooo                        .o8                                          .o8              oooo                               .                             .            
	`888   .8P'                        "888                                         "888              `888                             .o8                           .o8            
	 888  d8'     .ooooo.  oooo    ooo  888oooo.   .ooooo.   .oooo.   oooo d8b  .oooo888      .oooo.o  888 .oo.    .ooooo.  oooo d8b .o888oo  .ooooo.  oooo  oooo  .o888oo  .oooo.o 
	 88888[      d88' `88b  `88.  .8'   d88' `88b d88' `88b `P  )88b  `888""8P d88' `888     d88(  "8  888P"Y88b  d88' `88b `888""8P   888   d88' `"Y8 `888  `888    888   d88(  "8 
	 888`88b.    888ooo888   `88..8'    888   888 888   888  .oP"888   888     888   888     `"Y88b.   888   888  888   888  888       888   888        888   888    888   `"Y88b.  
	 888  `88b.  888    .o    `888'     888   888 888   888 d8(  888   888     888   888     o.  )88b  888   888  888   888  888       888 . 888   .o8  888   888    888 . o.  )88b 
	o888o  o888o `Y8bod8P'     .8'      `Y8bod8P' `Y8bod8P' `Y888""8o d888b    `Y8bod88P"    8""888P' o888o o888o `Y8bod8P' d888b      "888" `Y8bod8P'  `V88V"V8P'   "888" 8""888P' 
	                       .o..P'                                                                                                                                                   
	                       `Y8P'                                                                                                                                                    
*/
var parent = window.location.pathname === "/render.html" ? window.parent : this;
var os = navigator.platform.toUpperCase().indexOf('MAC') !== -1 ? "MAC" : "WIN";

window.onkeydown = function(e) {


	var code = e.keyCode,
		character = String.fromCharCode(code);

    if( code == 27 ) { //Esc
		$("#alerts .close").click();
	} else if( ( e.ctrlKey && e.altKey && character == "S" ) || ( e.ctrlKey && character == "S" ) || ( e.metaKey && character == "S" ) ) {
		parent.app.save();
		return false;
	} else if( ( e.ctrlKey && e.altKey && character == "N" ) ) {
		parent.app.reset();
		return false;
	} else if( ( e.ctrlKey && e.altKey && e.keyCode == 9 ) ) {
		if( e.shiftKey ) {
			parent.app.editors.prev();
		} else {
			parent.app.editors.next();
		}
		return false;
	}
};

/*
	ooo        ooooo   .oooooo.   ooooo     ooo  .oooooo..o oooooooooooo 
	`88.       .888'  d8P'  `Y8b  `888'     `8' d8P'    `Y8 `888'     `8 
	 888b     d'888  888      888  888       8  Y88bo.       888         
	 8 Y88. .P  888  888      888  888       8   `"Y8888o.   888oooo8    
	 8  `888'   888  888      888  888       8       `"Y88b  888    "    
	 8    Y     888  `88b    d88'  `88.    .8'  oo     .d8P  888       o 
	o8o        o888o  `Y8bood8P'     `YbodP'    8""88888P'  o888ooooood8 
*/

document.onclick = function(e) {
	try {
		parent.app.mouse.click();
	} catch(err){}
};	