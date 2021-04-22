function commonCharacters(string1, string2) {
	let x = string2.toLowerCase().split('')
	let y = string1.toLowerCase()
	let common = []
	for (let i = 0; i <= y.length; i++) {
		if (x.includes(y[i]) && !common.includes(y[i])) {
			common.push(y[i])
		}
	}console.log(common.join('').replace(/\s+/g, ''))
}

commonCharacters("What is love?", "Baby don't hurt me")