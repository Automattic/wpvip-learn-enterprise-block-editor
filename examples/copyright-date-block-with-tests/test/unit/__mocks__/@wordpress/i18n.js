const __Mock = ( text ) => text;
const sprintfMock = ( text, ...args ) => text.replace( '%s', args[ 0 ] );

module.exports = {
	__: __Mock,
	sprintf: sprintfMock,
};
