//tool used to generate test data https://meyerweb.com/eric/tools/color-blend/#FF3366:666666:1:hex

describe('averageColor', function () {
	it("FF3366 and 666666 average to B34D66", function (){
		chai.expect(averageColor('FF3366', '666666')).to.equal('B34D66');
	});

	it("00CC33 and 993399 average to 4D8066", function (){
		chai.expect(averageColor('00CC33', '993399')).to.equal('4D8066');
	});
	
	it("339933 and FF6600 average to 99801A", function (){
		chai.expect(averageColor('339933', 'FF6600')).to.equal('99801A');
	});
	
	it("99FFFF and CC99FF average to B3CCFF", function (){
		chai.expect(averageColor('99FFFF', 'CC99FF')).to.equal('B3CCFF');
	});
	
	it("FFFF00 and 000000 average to B34D66", function (){
		chai.expect(averageColor('FFFF00', '000000')).to.equal('808000');
	});
	
	it("663333 and CC3333 average to B34D66", function (){
		chai.expect(averageColor('663333', 'CC3333')).to.equal('993333');
	});
	
	it("999933 and CC3300 average to B3661A", function (){
		chai.expect(averageColor('999933', 'CC3300')).to.equal('B3661A');
	});
});