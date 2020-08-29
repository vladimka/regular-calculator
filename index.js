process.stdin.setEncoding('utf8');
process.stdin.on('data', handler);

function handler(text){
	let result;
	let expressionRegexp = /(?<num1>\d+(\.\d+)?)\s*(?<op>[+\-\/\*])\s*(?<num2>\d+(\.\d+)?)/ig;
	let additiveExpressionRegexp = /(?<num1>\d+(\.\d+)?)\s*(?<op>[+\-])\s*(?<num2>\d+(\.\d+)?)/ig;
	let multiplicativeExpressionRegexp = /(?<num1>\d+(\.\d+)?)\s*(?<op>[\/\*])\s*(?<num2>\d+(\.\d+)?)/ig;

	text = text.replace('\r\n', '');

	while(text.match(expressionRegexp) != null){
		text = text.replace(multiplicativeExpressionRegexp, solver);
		text = text.replace(additiveExpressionRegexp, solver);
		console.log(text);
		if(!isNaN(text))
			result = text
	}
}

function solver(match, n1, p2, op, n2, p5){
	n1 = parseFloat(n1);
	n2 = parseFloat(n2);

	if(op == '*')
		return n1*n2;
	else if(op == '/')
		return n1/n2
	else if(op == '+')
		return n1 + n2;
	else if(op == '-')
		return n1 - n2
}