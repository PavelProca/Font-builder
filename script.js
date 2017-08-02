function change(dropdown) {
	var asd = document.getElementsByTagName('select')[dropdown-1].value;
	var dsa = document.getElementsByClassName('text-wrapper')[0];
	switch (dropdown) {
		case 1:
			dsa.style.fontSize = asd;
			break;
		case 2:
			dsa.style.fontWeight = asd;
			break;
		case 3:
			dsa.style.color = asd;
			break;
	}
}