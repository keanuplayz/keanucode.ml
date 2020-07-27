//META{"name":"RemoveBlockedMessages"}*//

var RemoveBlockedMessages = (_ => {
	return class RemoveBlockedMessages {
		getName () {return "RemoveBlockedMessages";}

		getVersion () {return "1.0.3";}

		getAuthor () {return "KeanuCode";}

		getDescription () {return "Removes blocked messages completely. For Ichiki. Say bye-bye to Chiko!";}
		
		constructor () {
			this.changelog = {
				"fixed":[["Changed","Plugin description"]]
			};
			
			this.patchedModules = {
				before: {
					Messages: "render"
				}
			};
		}

		//legacy
		load () {}

		start () {
			if (!window.BDFDB) window.BDFDB = {myPlugins:{}};
			if (window.BDFDB && window.BDFDB.myPlugins && typeof window.BDFDB.myPlugins == "object") window.BDFDB.myPlugins[this.getName()] = this;
			let libraryScript = document.querySelector("head script#BDFDBLibraryScript");
			if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
				if (libraryScript) libraryScript.remove();
				libraryScript = document.createElement("script");
				libraryScript.setAttribute("id", "BDFDBLibraryScript");
				libraryScript.setAttribute("type", "text/javascript");
				libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.min.js");
				libraryScript.setAttribute("date", performance.now());
				libraryScript.addEventListener("load", _ => {this.initialize();});
				document.head.appendChild(libraryScript);
			}
			else if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
			this.startTimeout = setTimeout(_ => {
				try {return this.initialize();}
				catch (err) {console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not initiate plugin! " + err);}
			}, 30000);
		}

		initialize () {
			if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
				if (this.started) return;
				BDFDB.PluginUtils.init(this);
				
				BDFDB.ModuleUtils.forceAllUpdates(this);
			}
			else {
				console.error(`%c[${this.getName()}]%c`, 'color: #3a71c1; font-weight: 700;', '', 'Fatal Error: Could not load BD functions!');
			}
		}

		stop () {
			if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
				this.stopping = true;
				
				BDFDB.ModuleUtils.forceAllUpdates(this);

				BDFDB.PluginUtils.clear(this);
			}
		}

		
		// begin of own functions
		
		processMessages (e) {
			if (BDFDB.ObjectUtils.is(e.instance.props.messages) && BDFDB.ArrayUtils.is(e.instance.props.messages._array)) {
				let messages = e.instance.props.messages;
				e.instance.props.messages = new BDFDB.DiscordObjects.Messages(messages);
				for (let key in messages) e.instance.props.messages[key] = messages[key];
				e.instance.props.messages._array = [].concat(e.instance.props.messages._array.filter(n => n.author && !BDFDB.LibraryModules.FriendUtils.isBlocked(n.author.id)));
				if (e.instance.props.oldestUnreadMessageId && e.instance.props.messages._array.every(n => n.id != e.instance.props.oldestUnreadMessageId)) e.instance.props.oldestUnreadMessageId = null;
			}
		}
	}
})();