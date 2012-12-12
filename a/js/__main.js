// this holds all the settins
var salvador = {
	clientId: "d43a901f7e2623f7e3bc",
	css: "/* CSS goes here */\n",
	gist: null,
	html: "<!-- HTML goes here -->\n",
	loginText: "Log in",
	onlineCheckInterval: 3000,
	previewInterval: 250,
	setShowPrintMargin: false,
	theme: "ace/theme/textmate"
};
//has events
//	- settingsChanged - dispatched when something other than the editor changes the settings
//  - settingsEdited - dispatched when the editor changes settings

var salvadorCode = {
	css: null,
	html: null
};

// all methods regarding github
var github = {
	user: {
		get: function() {
			console.log('github.user.get');
			var request = {
				path: "/user",
				method: "GET",
				callback: github.user.save
			};
			github.request( request );

		},
		login: function( data ) {
			if( !data ) {
				//if it's not a callback
				if( salvador.access_token ) {
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
		save: function( data ) {
			salvador.user = JSON.parse( data );
			localStorage.setItem("salvador", JSON.stringify( salvador ));
			$(window).trigger("loggedIn");
		}
	},
	gist: {
		new: function( data ) {
			if( salvador.user ) {
				if( !data || data.currentTarget ) { //if no data or it's a callback
					request = {
						path: "/gists",
						method: "POST",
						callback: github.gist.new,
						data: {
							"description": "#salvador",
							"public": true,
							"files": {
								"salvador.html": {
									"content": editor.aceHTML.getValue()
								},
								"salvador.css": {
									"content": editor.aceCSS.getValue()
								}
							}
						}
					}
					github.request( request );
				} else {
					data = JSON.parse( data );
					window.location = "/gist/" + data.id;
				}
			} else {
				$(window).bind("loggedIn", github.gist.new );
				github.user.login();
			}
		}, 
		get: function( id ) {
			console.log('get', id);
			var request = {
				path: "/gists/" + id,
				method: "GET",
				data: {
					user: salvador.user.login ? salvador.user.login : ""
				},
				callback: github.gist.show
			};
			github.request( request );
		},
		save: function( data ) {
			
			//Logic
				//1. Is the user logged in?


			//Data types
				//1. there is no data
				//2. there's an event firedt that save gist request got an answer
				//3. there's an event fired that the user is logged in

			if( salvador.user ) {
				//if user is logged in


			} else {
				//user not logged in
				//wait for user to logg in and then retry to save
				$(window).bind("loggedIn", github.gist.save );
				github.user.login();
			}
				/*
				if( !data || data.currentTarget ) {
					request = {
						path: "/gists/" + salvador.gist,
						method: "POST",
						callback: github.gist.save,
						data: {
							"description": "#salvador",
							"public": true,
							"files": {
								"salvador.html": {
									"content": editor.aceHTML.getValue()
								},
								"salvador.css": {
									"content": editor.aceCSS.getValue()
								}
							}
						}
					}
					github.request( request );
				} else {
					console.log( data );
				}
			*/
		},
		show: function( data ){
			data = JSON.parse( data ).files;
			salvadorCode.css = data["salvador.css"].content;
			salvadorCode.html = data["salvador.html"].content;
			
			console.log(data);

			editor.createEditors();

		},
		delete: function( data ) {
			if( salvador.user ) {
				if( !data || data.currentTarget ) {
					//if it's not a callback
					request = {
						path: "/gists/" + salvador.gist,
						method: "DELETE",
						callback: github.gist.delete
					}
					github.request( request );
				} else {
					console.log( data );
				}
			} else {
				$(window).bind("loggedIn", github.gist.delete );
				github.user.login();
			}
		},
		getAll: function() {
			var request = {
				path: "/gists",
				method: "GET",
				data: {
					user: salvador.user.login ? salvador.user.login : ""
				},
				callback: github.gist.listAll
			};
			github.request( request );
		},
		listAll: function( gists ) {
			console.log( gists );
		}
	},
	request: function( request ) {
		var ajaxRequest = {
			url: 'https://api.github.com' + request.path + ( request.noToken ? '' : ( '?access_token=' + salvador.access_token ) ),
			data: ( request.data ? JSON.stringify( request.data ) : '' ),
			dataType: 'json', 
			method: request.method,
			complete: function (xhr, status) {
				if (status === 'error' || !xhr.responseText) {
					console.log('error', status)
				}
				else {
					var data = xhr.responseText;
					request.callback( data );
					}
			}
		}
		
		$.ajax({
	        url: 'https://api.github.com' + request.path + ( request.noToken ? '' : ( '?access_token=' + salvador.access_token ) ),
	        type: request.method,
	        dataType: 'json',
	        data: ( request.data ? JSON.stringify( request.data ) : '' ),
	    })
	    .complete( function(xhr, status){
	      	if (status === 'error' || !xhr.responseText) {
					console.log('error', status);
			}
			else {
				var data = xhr.responseText;
				request.callback( data );
			}
	      });
	}
};
// all methods regarding editing
var editor = {
	init: function(){

		//get settings
		salvador = $.extend( salvador, JSON.parse( localStorage.getItem("salvador") ) );

		isGist = window.location.href.indexOf( '/gist/' );
		//1 if the URL points to a gist
		if( isGist > -1 ){
			console.log('1');
			salvador.gist = window.location.href.substr( window.location.href.indexOf('/gist/') + 6 );
			github.gist.get( salvador.gist );
		}
		// 2. if we were previously working on a gist
		else if( salvador.gist ){
			window.location = "/gist/" + salvador.gist;
		}
		// 3. no gist
		else {
			//load editor's stored content
			salvadorCode = $.extend( salvadorCode, JSON.parse( localStorage.getItem("salvadorCode") ) );
			salvadorCode.css = salvadorCode.css ? salvadorCode.css : salvador.css ;
			salvadorCode.html = salvadorCode.html ? salvadorCode.html : salvador.html ;

			console.log( salvadorCode, window.salvadorCode );
			editor.createEditors();
		}
		
	},
	createEditors: function() {
		// create editors
		editor.aceCSS = ace.edit("aceCSS");
		editor.aceCSS.setTheme( salvador.theme );
		editor.aceCSS.getSession().setMode("ace/mode/css");
		editor.aceCSS.setShowPrintMargin( salvador.setShowPrintMargin );
		editor.aceCSS.setValue( salvadorCode.css, 1 );

		editor.aceHTML = ace.edit("aceHTML");
		editor.aceHTML.setTheme( salvador.theme );
		editor.aceHTML.getSession().setMode("ace/mode/html");
		editor.aceHTML.setShowPrintMargin( salvador.setShowPrintMargin );
		editor.aceHTML.setValue( salvadorCode.html, 1 );

		editor.aceSalvador = ace.edit("aceSalvador");
		editor.aceSalvador.setTheme( "ace/theme/monokai" );
		editor.aceSalvador.getSession().setMode("ace/mode/json");
		editor.aceSalvador.setShowPrintMargin( salvador.setShowPrintMargin );
		editor.aceSalvador.setValue( JSON.stringify(salvador, undefined, 4), 1 );
		editor.aceSalvador.on("change", function(e){
			console.log(e);
		});

	    editor.preview();
	},
	preview: function(){
		var salvadorCode = {
		    css: editor.aceCSS.getValue(),
		    html: editor.aceHTML.getValue()
		}

		setTimeout(function() {
		    localStorage.setItem("salvadorCode", JSON.stringify( salvadorCode ));
		}, 20);

		setTimeout(editor.preview, salvador.previewInterval);
	}
};
editor.init();
//all keybindigs
window.onkeydown = function(evt) {
	var code = evt.keyCode,
		character = String.fromCharCode(code),
		cmdOrCtrl = evt.metaKey || evt.ctrlKey;

	if(cmdOrCtrl && !evt.altKey) {
		switch(character) {
			case 'S':
				if(salvador.gist)
					github.gist.save();
				else
					github.gist.new();
				return false;
			case 'N':
				//editor.reset();
				return false;
		}
	}

};
//check if we're online
var online = false;
var fireEvent = function(name, data) {
	var e = document.createEvent("Event");
	e.initEvent(name, true, true);
	e.data = data;
	window.dispatchEvent(e);
};
var fetch = function(url) {
	var xhr = new XMLHttpRequest();

	var noResponseTimer = setTimeout(function() {
		xhr.abort();
		online = false;
		console.log(online);
	}, salvador.onlineCheckInterval/2);

	xhr.onreadystatechange = function(e) {
		if (xhr.readyState != 4) {
			return;
		}

		if (xhr.status == 200) {
			fireEvent("goodconnection", {});
			clearTimeout(noResponseTimer);
			online = true;
			console.log(online);
		} else {
			fireEvent("connectionerror", {});
			online = false;
			console.log(online);
		}
	};
	xhr.open("GET", url);
	xhr.send();
};
setInterval(function() { fetch("testnet.txt"); } , salvador.onlineCheckInterval);