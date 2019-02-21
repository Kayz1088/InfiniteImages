module.exports = {
	APPLICATION_ID:
		process.env.APPLICATION_ID ||
		'3f201f0c58806efbbfdcdbe70f17ed27c6aada6ff2be6b3ec73b70268b393934',
	SECRET:
		process.env.SECRET ||
		'4577e251ce979d960daaead710d29fdcca88c66f99f6cb02545588d95b5d154f',
	CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000',
};
