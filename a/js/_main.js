/*
	 .oooooo..o               .       .    o8o                                  
	d8P'    `Y8             .o8     .o8    `"'                                  
	Y88bo.       .ooooo.  .o888oo .o888oo oooo  ooo. .oo.    .oooooooo  .oooo.o 
	 `"Y8888o.  d88' `88b   888     888   `888  `888P"Y88b  888' `88b  d88(  "8 
	     `"Y88b 888ooo888   888     888    888   888   888  888   888  `"Y88b.  
	oo     .d8P 888    .o   888 .   888 .  888   888   888  `88bod8P'  o.  )88b 
	8""88888P'  `Y8bod8P'   "888"   "888" o888o o888o o888o `8oooooo.  8""888P' 
	                                                        d"     YD           
	                                                        "Y88888P'           
*/

var salvador = {
	clientId: "d43a901f7e2623f7e3bc",
	css: "/* CSS goes here */\n",
	gist: null,
	html: "<!-- HTML goes here -->\n",
	editor: {
		setShowPrintMargin: false
	},
	recentProjects: 5,
	user: null,
	theme: "ace/theme/textmate"
};

var salvadorCode = {
	css: null,
	html: null
};

var settings = {
	//generated by http://online-generator.com/name-generator/project-name-generator.php
	projectNames: ["Helpless Vulture", "Rebel Eyelid", "Disappointed Aimless Weeknight", "Strong Endless Hammer", "Husky Hammer", "Pure Dinosaur", "Maroon Crystal", "Harsh Parachute", "Screaming Scorpion", "Liquid Eagle", "Scarlet Moose", "Lost Brave Xylophone", "Dreadful Sliding Lion", "Brutal Harp", "Rapid Neutron", "Postal Freaky", "Star Homeless", "Risky Alpha", "Meaningful Microphone", "Tidy Plastic", "Outstanding Insane Dog", "Shiny Emerald", "Brave Compass", "Rare Oyster", "Solid Lama", "Elastic Coffin", "Brave Postal", "Rare Pineapple", "Intense Doorstop", "Albatross Persistent", "Cosmic Aberrant", "Risky Gloomy Doorstop", "Intense Waterbird", "Eternal Wrench", "Lost Balcony", "Green Breeze", "Green Viper", "Olive Gloomy Panther", "Dreadful Winter", "Gloomy Drill", "Steady Cobra", "Nocturnal Dog", "Vital Serpent", "Western Toothbrush", "Torpedo Lucky", "Random Donut", "Winter Tidy", "Steep Windshield", "Alarm Tasty", "Rocky Yellow Foot", "Helpless Temple", "Proton White", "Forgotten Lucky Longitude", "Postal Helpless", "Finger Confidential", "Intensive Mountain", "Dancing Creek", "Lucky Warehouse", "Rusty Laser", "Insane Gamma", "Accidentally Tea", "Modern Eastern Door", "Red Beam", "Eastern Sledgehammer", "Red Waffle", "Straw Mountain", "Hollow Wild Venus", "Tidy Smoke", "Quality Venom", "Black Mustard", "Intensive Lion", "Timely Electron", "Knife Minimum", "Full Fist", "Raw Sound", "Helpless Alarm", "Late Navy Smoke", "Brown Doorstop", "Lost Waterbird", "Golden Scattered Omega", "Eternal Late Waterbird", "Tainted Space", "Cheerful Alarm", "Rich Wrench", "Fierce Electrical", "Alien Crystal", "Northernmost Viper", "Intensive Morning", "Everyday Eternal Parachute", "Solid Obscure", "Nervous Sun", "Moving Pottery", "Ghastly Poseidon", "Tasty Unique Balcony", "Oyster Random", "Surreal Yard", "Temporary Wrench", "Remote Official Galaxy", "Mysterious Mountain", "Steady Eyelid", "Meaningful Viper", "Morbid Tuna", "Boiling Beta", "Eternal Hideous Mustard", "Pink Viper", "Teal Zeus", "Dirty Obscure", "Abandoned Skunk", "Beta Rusty", "Next Artificial", "Early Eagle", "Needless Freaky Swallow", "Grotesque Foot", "Stony Crystal", "Eternal Screwdriver", "Golden Hammer", "Solid Avenue", "Accidentally Eastern", "Strong Tire", "Steady Moose", "Coffin Silly", "Scarlet Tuba", "Lucky Morning", "Eagle Tainted", "Eastern Dinosaur", "Moving Scarecrow", "Skilled Lion", "Frozen Essential Backpack", "Stony Empty Cat", "Arm Lonesome", "Supersonic Barbershop", "Steep Alpha", "Appropriate Roadrunner", "Tiger Rebel", "Epsilon Dirty", "Icy Street", "Homeless Weather", "Electron Steep", "Elastic Albatross", "Parachute Permanent", "Serious Star", "Next Strawberry Coffin", "Cold Viper", "White Scarecrow", "Intense Temple", "Comic Stormy", "Stormy Cosmic", "Flying Gamma", "Dancing Kangaroo", "Minimum Roadrunner", "Shiny Homeless Drill", "Coffin Mysterious", "Surreal Screwdriver", "Plastic Brutal", "Serious Summer", "Moose Reborn", "Dreadful Ivory Jupiter", "Discarded Backpack", "Lonesome Moose", "Lonesome Backpack", "Venom Silly", "Permanent Hammer", "Furious Skunk", "Dinosaur Vital"]
};

/*
	  .oooooo.     o8o      .   oooo                     .o8       
	 d8P'  `Y8b    `"'    .o8   `888                    "888       
	888           oooo  .o888oo  888 .oo.   oooo  oooo   888oooo.  
	888           `888    888    888P"Y88b  `888  `888   d88' `88b 
	888     ooooo  888    888    888   888   888   888   888   888 
	`88.    .88'   888    888 .  888   888   888   888   888   888 
	 `Y8bood8P'   o888o   "888" o888o o888o  `V88V"V8P'  `Y8bod8P' 
*/
var github = {
	gist: {
		get: function( gistID, callback ) {
			github.request({
				success: function( response ){
					var found = 0;
					var items = 0;
					console.log( salvadorCode );
					$.each(salvadorCode, function(k, v) {
						if( response.files["salvador."+k] ) {
							salvadorCode[k] = response.files["salvador."+k].content;
							found++;
						} else {
							//caut printre toate fisierele primul care este compatibil
							$.each(response.files, function(n, c) {
								if( n.indexOf("." + k) > 0 ) {
									salvadorCode[k] = response.files[n].content;
									found++;
									return false;
								}
							});
						}

						items++;
					});

					if( found < items ) {
						var alertData = {
							closeable: true,
							reportBug: true,
							strong: "Warning!",
							title: "We've loaded defaults where code was missing",
							buttons: {
								button1: {
									text: "OK",
									class: "btn-warning",
									onclick: function(e) {
										e.preventDefault();
										$("#alerts .close").click();
									}
								}
							}
						}

						app.alert( alertData );
					}
					salvador.gist = response;
					$("#project-name").val( response.description.replace("#salvador ",  "") );
					$(window).trigger("salvadorCode");
					if( callback )
						callback();
				},
				data: null,
				errorAlert: {
					closeable: false,
					parentClass: "alert-error",
					strong: "Oh snap!",
					title: "There was a problem loading your gist.",
					buttons: {
						button1: {
							class: "btn-danger",
							onclick: function(e) {
								e.preventDefault();
								window.location.reload();
							},
							text: "Try again"
						},
						button2: {
							onclick: function(e) {
								e.preventDefault();
								app.reset();
							},
							text: "Create new gist"
						}
					}
				},
				notFoundAlert: {
					closeable: false,
					parentClass: "alert-error",
					strong: "Oh snap!",
					title: "It looks like your gist has been removed.",
					buttons: {
						button1: {
							class: "btn-danger",
							onclick: function(e) {
								e.preventDefault();
								app.reset();
							},
							text: "Create new gist"
						}
					}
				},
				method: "GET",
				noToken: true,
				path: "/gists/" + gistID
			});
		},
		fork: function() {

		},
		getAll: function() {
			//gists
			github.request({
				method: "GET",
				path: "/gists",
				success: function( response ){
					console.log('se ajunge si aici traitiar', response);
					var $recentProjects = $("#recent-projects");
					$('<li class="title project clearfix row">Recent projects</li>').appendTo($recentProjects);
					
					var nr = salvador.recentProjects;
					var i = 0;
					while( nr && i<response.length){
						if(response[i].description.indexOf("#salvador") >= 0) {
							$('<li class="project clearfix row"><div class="pull-left"><a class="name" href="/gist/' + response[i].id + '" target="_blank">' + response[i].description + '</a><span class="edited">Edited on ' + response[i].updated_at + '</span></div><a href="/gist/' + response[i].id + '" target="_blank" class="btn btn-small pull-right"><i class="icon-chevron-right"></i></a></li>')
								.appendTo($recentProjects);
							nr--;
						}
						i++;
					}
					if( nr < salvador.recentProjects )
						$('<li class="project clearfix row"><a class="btn btn-inverse" href="/user/' + salvador.user.login + '" id="all-projects" target="_blank">View all projects</a></li>')
							.appendTo($recentProjects);

				},
				errorAlert: {
					closeable: true,
					parentClass: "alert-error",
					strong: "Oh snap!",
					title: "There was a problem loading your gists.",
					buttons: {
						button1: {
							class: "btn-danger",
							onclick: function(e) {
								e.preventDefault();
								$("#alerts .close").click();
							},
							text: "Try again later"
						}
					}
				}
			});
		},
		new: function() {
			if( salvador.user ) {
				//if user is logged in
				$(window).unbind( "userLoggedIn.newWaitLogin" );

				var randomProjectName = salvador.projectNames[Math.floor(Math.random() * salvador.projectNames.length)];
				//var description = prompt("Enter a cool name for your project", randomProjectName );

				var description = $("#project-name").val();
				if( description ) {
					description = "#salvador " + description;
				} else {
					description = "#salvador " + randomProjectName;
					$("#project-name").val( randomProjectName );
					
				}

					request = {
						path: "/gists",
						method: "POST",
						success: function( data ) {
							window.location.href = "/gist/" + data.id;
						},
						data: {
							"description": description,
							"public": true,
							"files": {}
						}
					}
					$.each(salvadorCode, function(k, v) {
						request.data.files["salvador." + k ] = { 
							"content": v
						}
					});

					github.request( request );
				
			} else {
				$(window).bind( "userLoggedIn.newWaitLogin", github.gist.new );
				github.user.login()
			}
		},
		save: function( e ) {
			if(!salvador.gist) {
				github.gist.new();
			} else if( salvador.user ) {
				//user logged in
				$(window).unbind( "userLoggedIn.saveWaitLogin" );

				if(salvador.gist) {
					//save
					if( salvador.gist.user.id == salvador.user.id ) {
						//this gist is mine
						request = {
							path: salvador.gist ? "/gists/" + salvador.gist.id : "/gists",
							method: "POST",
							success: function(e) {
								//gist saved
							},
							errorMsg: "There was a problem saving your code. Please try again later.",	
							data: {
								"description": "#salvador " + $("#project-name").val(),
								"public": true,
								"files": {}
							}
						}

						$.each(salvadorCode, function(k, v) {
							request.data.files["salvador." + k ] = { 
								"content": v
							}
						});

						github.request( request );
					} else {
						//fork
						github.gist.fork();
					}
				} else {
					//new
					github.gist.new();
				}
			} else {
				console.log("nu sunt logat");
				$(window).bind( "userLoggedIn.saveWaitLogin", github.gist.save );
				github.user.login();
			}
		}
	},
	user: {
		get: function() {
			var request = {
				path: "/user",
				method: "GET",
				success: function( data ){
					salvador.user = data;
					github.user.showProfile();
					$(window).trigger( "salvador" );
					$(window).trigger( "userLoggedIn" );
				}
			};
			github.request( request );

		},
		login: function( data ) {
			if( !data ) {
				//if it's not a callback
				if( salvador.access_a ) {
					if( !salvador.user ) {
						github.user.get();
					}
				} else {
					githubLoginWindow = open('https://github.com' + 
						'/login/oauth/authorize' + 
						'?client_id=' + salvador.clientId +
						'&scope=user,gist', 'githubLogin', 'width=960, height=600, left=' + (document.documentElement.offsetWidth - 960)/2 + ', top=0');
					githubLoginWindow.focus();
					
				}
			} else {
				salvador.access_token = data;
				localStorage.setItem("salvador", JSON.stringify( salvador ));
				github.user.get();
			}
		},
		showProfile: function() {
			$("#settings-profile .profile")
				.find(".user")
					.html( salvador.user.login )
					.end()
				.find(".avatar img")
					.attr( "src", salvador.user.avatar_url )
					.end()
				.find("a")
					.attr( "href", "http://gist.github.com/mine" );

			$("#logout").click(function(e){
				e.preventDefault();
				github.user.logout();
			});
			$("#settings-login").hide();
			$("#settings-profile").show();
		},
		logout: function( data ) {
			delete salvador.user;
			delete salvador.access_token;
			localStorage.setItem("salvador", JSON.stringify( salvador ));
			github.user.showLogin();
			app.reset();
		},
		showLogin: function() {
			$("#settings-login").show();
			$("#settings-profile").hide();
			$("#login").click( function(e){
				e.preventDefault();
				github.user.login();
			} )
		}

	},
	request: function( request ) {

		$("#preloader")
			.removeClass("progress success error")
			.addClass("progress");

		$.ajax({
	        url: 'https://api.github.com' + request.path + ( request.noToken ? '' : ( '?access_token=' + salvador.access_token ) ),
	        type: request.method,
	        dataType: request.dataType ? request.dataType : "json",
	        data: ( request.data ? JSON.stringify( request.data ) : '' ),
	        headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
	    })
	    .success( function(data, textStatus ){
	    	//make the preloader green
	    	$("#preloader").toggleClass("progress success");
	    	if( request.success ) {
	    		request.success( data );
	    	}
	    })
		.error( function(jqXHR, textStatus, errorThrown){
			console.log( jqXHR, textStatus, errorThrown );

			$("#preloader").toggleClass("progress error");
			
			if( errorThrown == "Not Found" ) {
				//call the alert with the notFoundAlert object
				app.alert( request.notFoundAlert, jqXHR.responseText, errorThrown );
			} else {
				//call the alert with the errorAlert object
				app.alert( request.errorAlert, jqXHR.responseText, errorThrown );
			}
		});
	}
}

/*
	ooooo                                      oooo   .oooooo..o     .                                                     
	`888'                                      `888  d8P'    `Y8   .o8                                                     
	 888          .ooooo.   .ooooo.   .oooo.    888  Y88bo.      .o888oo  .ooooo.  oooo d8b  .oooo.    .oooooooo  .ooooo.  
	 888         d88' `88b d88' `"Y8 `P  )88b   888   `"Y8888o.    888   d88' `88b `888""8P `P  )88b  888' `88b  d88' `88b 
	 888         888   888 888        .oP"888   888       `"Y88b   888   888   888  888      .oP"888  888   888  888ooo888 
	 888       o 888   888 888   .o8 d8(  888   888  oo     .d8P   888 . 888   888  888     d8(  888  `88bod8P'  888    .o 
	o888ooooood8 `Y8bod8P' `Y8bod8P' `Y888""8o o888o 8""88888P'    "888" `Y8bod8P' d888b    `Y888""8o `8oooooo.  `Y8bod8P' 
	                                                                                                  d"     YD            
	                                                                                                  "Y88888P'
*/
$(window).bind("salvador", function(e){
	//salvador object changed. Save it in localStorage
	localStorage.setItem("salvador", JSON.stringify( salvador ));
});

$(window).bind("salvadorCode", function(e){
	//salvadorCode object changed. Save it in localStorage
	localStorage.setItem("salvadorCode", JSON.stringify( salvadorCode ));
});

/*
	      .o.                             
	     .888.                            
	    .8"888.     oo.ooooo.  oo.ooooo.  
	   .8' `888.     888' `88b  888' `88b 
	  .88ooo8888.    888   888  888   888 
	 .8'     `888.   888   888  888   888 
	o88o     o8888o  888bod8P'  888bod8P' 
	                 888        888       
	                o888o      o888o      	                                      
*/

var app = {
	alert: function( data, responseText, errorThrown ){
		/*
			closeable: boolean
			parentClass: String
			reportBug: true
			strong: String
			title: String
			buttons: either json or array
				button
					text: String
					class: String
					href: String
					onclick: function

		*/
		if( data.closeable )
			var closeBtn = $('<button type="button" class="close" data-dismiss="alert">×</button>');

		var title = $("<h4>" + ( data.strong ? "<strong>" + data.strong + " </strong>" : "" ) + ( data.title ? data.title : "" ) + "</h4>");
		
		if( responseText || errorThrown || data.reportBug) {
			s = jQuery.extend({}, salvador);
			if( s.access_token )
				s.access_token = true
			else
				s.access_token = false
			s.projectNames = true;
			s = escape(JSON.stringify(s));
			
			if( !data.buttons )
				data.buttons = {}

			data.buttons.bugBtn = {
				text: "Report a bug",
				href: "mailto:salvador@gmail.com?Subject=Bug&Body=%0A%0A----%0A"
						+ "URL: " + window.location.href + "%0A"
						+ "responseText: " + ( responseText ? escape(JSON.stringify(responseText)) : "" ) + "%0A"
						+ "errorThrown: " + ( errorThrown ? escape(JSON.stringify(errorThrown)) : "" ) + "%0A"
						+ "data: " + s + "%0A%0A"
			}
		}

		if( data.buttons ) {
			var buttonContainer = $('<div class="buttons"></div>');
			$.each( data.buttons, function(k, v) {
				if( v.text )
					$('<a class="btn ' + ( v.class ? v.class: "" ) + '" href="' + ( v.href ? v.href : "#" ) + '">' + v.text + '</a>')
						.click( function(e){
							if(v.onclick)
								v.onclick(e);
						})
						.appendTo(buttonContainer);
			});
		}

		var alert = $('<div id="' + ( data.id ? data.id: "" ) + '" class="alert clearfix fade in generatedAlert ' + ( data.parentClass ? data.parentClass: "" ) + '">')
			.append(closeBtn ? closeBtn : null)
			.append(title)
			.append(buttonContainer ? buttonContainer : null)
			.appendTo("#alerts");
	},
	init: function(){

		//get settings
		salvador = $.extend( salvador, JSON.parse( localStorage.getItem("salvador") ) );
		$(window).trigger("salvador");

		isGist = window.location.href.indexOf( '/gist/' );
		isUser = window.location.href.indexOf( '/user/' );

		if( salvador.user ) {
			github.user.showProfile();
		} else {
			github.user.showLogin();
		}

		/*
				  .o           .oooooo.     o8o               .   
				o888          d8P'  `Y8b    `"'             .o8   
				 888         888           oooo   .oooo.o .o888oo 
				 888         888           `888  d88(  "8   888   
				 888         888     ooooo  888  `"Y88b.    888   
				 888  .o.    `88.    .88'   888  o.  )88b   888 . 
				o888o Y8P     `Y8bood8P'   o888o 8""888P'   "888" 
		*/
		if( isGist > -1 ) {
			gistID = window.location.href.substr( window.location.href.indexOf('/gist/') + 6 );

			if( !salvador.gist ) {
				github.gist.get( gistID, app.initEditors );
			} else {
				if( salvador.gist.id !== gistID ) {
					github.gist.get( gistID, app.initEditors );
				} else {
					app.initEditors();
				}
			}

			if( salvador.gist ) {
				if( salvador.gist.id !== gistID || !salvador.gist.id ) {
					github.gist.get( gistID, app.initEditors );
				}
			} else {
				//app.initEditors();
			}
		}
		/*
				  .oooo.          ooooo     ooo                             
				.dP""Y88b         `888'     `8'                             
				      ]8P'         888       8   .oooo.o  .ooooo.  oooo d8b 
				    .d8P'          888       8  d88(  "8 d88' `88b `888""8P 
				  .dP'             888       8  `"Y88b.  888ooo888  888     
				.oP     .o .o.     `88.    .8'  o.  )88b 888    .o  888     
				8888888888 Y8P       `YbodP'    8""888P' `Y8bod8P' d888b    
		*/
		else if( isUser > -1) {
			user = salvador.gist = window.location.href.substr( window.location.href.indexOf('/user/') + 6 );
		}

		/*
				  .oooo.                .o     .oooo.         .o   
				.dP""Y88b             .d88    d8P'`Y8b      .d88   
				      ]8P'          .d'888   888    888   .d'888   
				    <88b.         .d'  888   888    888 .d'  888   
				     `88b.        88ooo888oo 888    888 88ooo888oo 
				o.   .88P  .o.         888   `88b  d88'      888   
				`8bd88P'   Y8P        o888o   `Y8bd8P'      o888o  
		*/
		else if( window.location.pathname !=="/" ) {

		}

		/*
				      .o          ooooo   ooooo                                                                                 
				    .d88          `888'   `888'                                                                                 
				  .d'888           888     888   .ooooo.  ooo. .oo.  .oo.    .ooooo.  oo.ooooo.   .oooo.    .oooooooo  .ooooo.  
				.d'  888           888ooooo888  d88' `88b `888P"Y88bP"Y88b  d88' `88b  888' `88b `P  )88b  888' `88b  d88' `88b 
				88ooo888oo         888     888  888   888  888   888   888  888ooo888  888   888  .oP"888  888   888  888ooo888 
				     888   .o.     888     888  888   888  888   888   888  888    .o  888   888 d8(  888  `88bod8P'  888    .o 
				    o888o  Y8P    o888o   o888o `Y8bod8P' o888o o888o o888o `Y8bod8P'  888bod8P' `Y888""8o `8oooooo.  `Y8bod8P' 
				                                                                       888                 d"     YD            
				                                                                      o888o                "Y88888P'            
		*/
		else {
			if( salvador.gist ){
				window.location = "/gist/" + salvador.gist.id;
			} else {
				app.initEditors();
			}
		}		
	},
	initEditors: function() {
		
		salvadorCode = $.extend( salvadorCode, JSON.parse( localStorage.getItem("salvadorCode") ) );

		$.each(salvadorCode, function(k, v) {
			salvadorCode[k] = salvadorCode[k] ? salvadorCode[k] : salvador[k]
		});

		$(window).trigger("salvadorCode");


		$("#editors .editor").each(function(i){
			mode = $(this).attr("rel");
			name = "ace" + mode.toUpperCase();
			app[name] = ace.edit(name);
			app[name].setTheme( salvador.theme );
			app[name].getSession().setMode("ace/mode/" + mode);
			app[name].setShowPrintMargin( salvador.setShowPrintMargin );
			app[name].setValue( salvadorCode[mode], 1 );

			app[name].on("change", function(e){
				$.each(salvadorCode, function(k, v) {
					salvadorCode[k] = app[ "ace" + k.toUpperCase() ].getValue();
				});
				$(window).trigger("salvadorCode");
			});
		});

		$("body").addClass("loaded");
	},
	reset: function() {
		localStorage.removeItem("salvador");
		localStorage.removeItem("salvadorCode");
		window.location.href = "/";
	}
};
app.init();

/*
	  .oooooo.    .o88o.  .o88o. oooo   o8o                        
	 d8P'  `Y8b   888 `"  888 `" `888   `"'                        
	888      888 o888oo  o888oo   888  oooo  ooo. .oo.    .ooooo.  
	888      888  888     888     888  `888  `888P"Y88b  d88' `88b 
	888      888  888     888     888   888   888   888  888ooo888 
	`88b    d88'  888     888     888   888   888   888  888    .o 
	 `Y8bood8P'  o888o   o888o   o888o o888o o888o o888o `Y8bod8P' 
*/
window.applicationCache.addEventListener('updateready', function(e){
	$("#newVersion .btn-primary").click(function(e){
		window.location.reload();
	});
	$("#newVersion").show();
});