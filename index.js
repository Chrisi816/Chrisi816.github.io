var clickcounter = 0;
var englisch = true;

$(".logoimg").click(function () {
	const button = $(this);
	clickcounter = clickcounter + 1;
	if (clickcounter == 3) {
		clickcounter = 0;
		button.addClass("clicked");
		setTimeout(() => {
			button.removeClass("clicked");
		}, 2000);
	}
});

Translate("en");
const scrollContainer = document.querySelector(".container-recentwork");

scrollContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft -= evt.deltaY;
});

$("#aboutme").click(function () {
	window.scrollTo(0, 150);
});
$("#hometop").click(function () {
	window.scrollTo(0, 0);
});
$("#projectsbottom").click(function () {
	window.scrollTo(0, 850);
});
$("#feedback").click(function () {
	window.scrollTo(0, 1250);
});

$(".sprache").click(function () {
	englisch = !englisch;
	if (!englisch) {
		// Deutsch
		Translate("de");
	} else {
		// Englisch
		Translate("en");
	}
});

function Translate(type) {
	if (type == "de") {
		$(".sprache").attr("src", "src/icons/icons8-germany-48.png");
		document.getElementById("hometop").innerHTML = "Startseite";
		document.getElementById("aboutme").innerHTML = "Über mich";
		document.getElementById("projectsbottom").innerHTML = "Projekte";
		document.getElementById("feedback").innerHTML = "Rezensionen";

		document.getElementById("descriptionich").innerHTML =
			"Hallo, ich bin Christian Jedrzejczyk";
		document.getElementById("devtext").innerHTML =
			"Web-/Software-Entwickler";
		txt =
			"Ich konzentriere mich darauf, komplexe Benutzererfahrungen durch ethisches Design zu vereinfachen und Lösungen zu entwickeln, die für Millionen von Menschen sinnvolle Verbindungen schaffen.";
		document.getElementById("textmeinziel").innerHTML =
			"Ich konzentriere mich darauf, komplexe Benutzererfahrungen durch ethisches Design zu vereinfachen und Lösungen zu entwickeln, die für Millionen von Menschen sinnvolle Verbindungen schaffen.";

		document.getElementById("experianceyears").innerHTML =
			"Jahre </br> Erfahrung";

		document.getElementById("aboutmetext").innerHTML = "Über mich";
		document.getElementById("infotextfacts").innerHTML =
			"Hallo, ich bin Christian Jedrzejczyk, ein 17-jähriger Web- und Softwareentwickler aus der Nähe von Dortmund. Ich habe Erfahrung in verschiedenen Technologien, darunter:";
		document.getElementById("textskills").innerHTML =
			"- Frontend: HTML, CSS<br> - Backend: JavaScript + (Node.js, jQuery), Lua<br> - Software: C#, Java<br> - Datenbanken: MongoDB, MySQL<br>";
		document.getElementById("infotextfacts2").innerHTML =
			"Ich biete Dienstleistungen in den Bereichen Frontend-Entwicklung, Backend-Entwicklung und Full Stack an Entwicklung, Responsive Design, Fehlerbehebung, Datenbankverwaltung ... an </br> </br> Seit ich meine Reise begonnen habe, habe ich mit über 600 Kunden zusammengearbeitet, die mit meiner Arbeit zufrieden waren, und das alles schon in so jungen Jahren. Ich bin hoch motiviert, so viele Projekte wie möglich zu übernehmen, von der Fehlerbeseitigung bis zur Programmierung kompletter neuer Anwendungen </br> </br> Deshalb bin ich die perfekte Person für Ihr nächstes Projekt!";

		document.getElementById("aboutmetexttext3").innerHTML =
			"Meine Projekte";
		document.getElementById("description").innerHTML =
			"Sortiert von den größten bis zu den geringsten Anstrengungen";
		document.getElementById("description2").innerHTML =
			"Gerne sende ich Ihnen auf Anfrage beliebige Codebeispiele zu, wenn der Kunde damit einverstanden ist";

		document.getElementById("prjectinfos").innerHTML =
			"Ein Entwicklungsdienstleister mit Spezialisierung auf Websites, Skripterstellung und Anwendungen. </br></br> - Über 600 Kunden </br> - Über 70 Sonderanfertigungen </br> - 150.000 Benutzer vertrauen darauf </br> 3 Jahre Erfahrung </br> – Über 12 Produkte";
		document.getElementById("prjectinfos2").innerHTML =
			"Kompletter FiveM Server, über 100 Ressourcen. Client sowie Serverseitig alles selbst gemacht. Sowie Designt und Frontend</br></br> - Entwicklungsdauer: 1 Jahr </br>";
		document.getElementById("prjectinfos3").innerHTML =
			"Ein client sowie server seitiges anticheat um personen davor zu hindern sich auf nicht konformer art und weise sich vorteile zu verschafen</br></br> - Over 15k Zeilen </br> - Active on 30 Servers </br> 1 Years of existance";
		document.getElementById("prjectinfos4").innerHTML =
			"Ein kompletter Minecraft launcher mit eigenen Einstellungen und GUI's.Entwicklung hat ungefährt 3 Monate gedauert für einen Customer </br></br> - Java </br>- Ingame Käufe </br> - Manipulation der Einstellungen und Add-On Kleidung";
		document.getElementById("prjectinfos5").innerHTML =
			"Von Web applicationen bis zu Ingame HUD's war allesdabei</br></br> - Über 50 Custom Orders </br> Gerne kann ich auf Anfrage diese Custom Aufträge zuschicken. 1 Ganzer Ordner ist voll mit 50 resourcen ";
		document.getElementById("prjectinfos6").innerHTML =
			"Insgesamt über 5 Discord Bots erstellt mit Node.js und discord.js teilweise mit Panals</br> - Über 10 Server </br> - Over 3k user </br>";

		document.getElementById("aboutmetexttext2").innerHTML =
			"Kunden Rezensionen (+50)";
		document.getElementById("contactmebutton").innerHTML = "Kontakt";
	} else {
		$(".sprache").attr("src", "src/icons/icons8-england-48.png");
		document.getElementById("hometop").innerHTML = "Home";
		document.getElementById("aboutme").innerHTML = "About Me";
		document.getElementById("projectsbottom").innerHTML = "Projects";
		document.getElementById("feedback").innerHTML = "Reviews";

		document.getElementById("descriptionich").innerHTML =
			"Hello, I'm Christian Jedrzejczyk";
		document.getElementById("devtext").innerHTML =
			"Web / Software Developer";
		txt =
			"I focus on simplifying complex user experiences through ethical design and developing solutions that create meaningful connections for millions of people.";
		document.getElementById("textmeinziel").innerHTML =
			"I focus on simplifying complex user experiences through ethical design and developing solutions that create meaningful connections for millions of people.";

		document.getElementById("experianceyears").innerHTML =
			"Years </br> Experience";

		document.getElementById("aboutmetext").innerHTML = "About Me";
		document.getElementById("infotextfacts").innerHTML =
			"Hello, I'm Christian Jedrzejczyk, a 17-year-old web and software developer from near Dortmund. I have experience in various technologies, including:";
		document.getElementById("textskills").innerHTML =
			"- Frontend: HTML, CSS<br> - Backend: JavaScript + (Node.js, jQuery), Lua<br> - Software: C#, Java<br> - Databases: MongoDB, MySQL<br>";
		document.getElementById("infotextfacts2").innerHTML =
			"I offer services in frontend development, backend development, full-stack development, responsive design, debugging, and database management ... </br> </br> Since I started my journey, I've worked with over 600 clients who were satisfied with my work, all at such a young age. I am highly motivated to take on as many projects as possible, from bug fixes to programming complete new applications. </br> </br> That's why I am the perfect person for your next project!";

		document.getElementById("aboutmetexttext3").innerHTML = "My Projects";
		document.getElementById("description").innerHTML =
			"Sorted from the most to the least effort";
		document.getElementById("description2").innerHTML =
			"I am happy to send any code samples upon request, if the client agrees.";

		document.getElementById("prjectinfos").innerHTML =
			"A development service provider specializing in websites, scripting, and applications. </br></br> - Over 600 customers </br> - Over 70 custom projects </br> - Trusted by 150,000 users </br> 3 years of experience </br> – Over 12 products";
		document.getElementById("prjectinfos2").innerHTML =
			"Complete FiveM server, over 100 resources. Everything made on both client and server sides, including design and frontend</br></br> - Development time: 1 year </br>";
		document.getElementById("prjectinfos3").innerHTML =
			"A client and server-side anti-cheat system to prevent individuals from gaining unfair advantages</br></br> - Over 15k lines of code </br> - Active on 30 servers </br> 1 year of existence";
		document.getElementById("prjectinfos4").innerHTML =
			"A complete Minecraft launcher with custom settings and GUIs. Development took approximately 3 months for a customer </br></br> - Java </br>- In-game purchases </br> - Manipulation of settings and add-on clothing";
		document.getElementById("prjectinfos5").innerHTML =
			"From web applications to in-game HUDs, everything was included</br></br> - Over 50 custom orders </br> I can gladly provide these custom orders upon request. 1 full folder with 50 resources";
		document.getElementById("prjectinfos6").innerHTML =
			"Created over 5 Discord bots with Node.js and discord.js, some with panels</br> - Over 10 servers </br> - Over 3k users </br>";

		document.getElementById("aboutmetexttext2").innerHTML =
			"Customer Feedback (+50)";
		document.getElementById("contactmebutton").innerHTML = "Contact me";
	}
}
