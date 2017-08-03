function change(row, dropdown, dropdownValue) {
	var rowNumber = document.getElementsByClassName('text-wrapper')[Number(row) + 1];

	switch (dropdown) {
		case 'size':
			rowNumber.style.fontSize = dropdownValue;
			break;
		case 'weight':
			rowNumber.style.fontWeight = dropdownValue;
			break;
		case 'color':
			rowNumber.style.color = dropdownValue;
			break;
		case 'transform':
			rowNumber.style.textTransform = dropdownValue;
			break;
		case 'alignment':
			rowNumber.style.textAlign = dropdownValue;
			break;
	}
}

