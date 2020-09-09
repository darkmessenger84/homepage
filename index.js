let panel = "tool";

function calc()
{

	document.getElementById("output").value = "Please supply valid parameters"

	const FLAGS_NONE 	= 0;
	const FLAGS_PSPATH	= 1;
	let flags = FLAGS_NONE;

	let distance 	= parseInt(document.getElementById("distance").value);
	let turnangle 	= parseFloat(document.getElementById("turnangle").value);
	
	document.getElementById("hint").classList.add("hidden");
	document.getElementById("result").classList.add("hidden");

	if (distance >= 800 
	&& 	distance <= 819000)
	{

		let alignDist 	= 0;
		if (turnangle < 0)
		{
			turnangle = (turnangle*-1);
		}

		if (turnangle > 180)
		{

			flags = (flags | FLAGS_PSPATH);
			document.getElementById("hint").classList.remove("hidden");

			if (turnangle > 360)
			{
				document.getElementById("turnangle").value = 360;
				turnangle = 360;
			}

			turnangle = 360-turnangle

		}

		alignDist = distance-Math.round(turnangle*4.444444444444444);

		if (!isNaN(alignDist))
		{
			document.getElementById("result").classList.remove("hidden");
			document.getElementById("output").value = alignDist + "LY";
			return true;

		}

	}

}

function swap(name)
{

	if (panel == name) { return false; }

	document.getElementById("tool").classList.add("hidden")
	document.getElementById("about").classList.add("hidden")
	document.getElementById("contact").classList.add("hidden")
	document.getElementById("portals").classList.add("hidden")
	document.getElementById("wishlist").classList.add("hidden")
	document.getElementById(name).classList.remove("hidden")
	panel = name
	return true;

}

function revealDiscrim(e,state)
{
	e.innerHTML = "Discord";
	if (state == true)
	{
		e.innerHTML = document.getElementById("discrim").value;
	}
}

function grabDiscrim()
{
	var copyText = document.getElementById("discrim");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Copied to clipboard");
}
