describe('parseMarkup', function () {
	it("['div'] is parsed to <div/>", function (){
		chai.expect(parseMarkup(['div'])).to.equal('<div/>');
	});

	it("['div', 'Text'] is parsed to <div>Text</div>", function (){
		chai.expect(parseMarkup(['div', 'Text'])).to.equal('<div>Text</div>');
	});

	it("['span', 'More', 'Text'] is parsed to <span>MoreText</span>", function (){
		chai.expect(parseMarkup(['span', 'More', 'Text'])).to.equal('<span>MoreText</span>');
	});
	
	it("['a', ['b', 'More'], 'Text'] is parsed to <a><b>More</b>Text</a>", function (){
		chai.expect(parseMarkup(['a', ['b', 'More'], 'Text'])).to.equal('<a><b>More</b>Text</a>');
	});

	it("['p', '<b>Text</b>'] is parsed to <p>&lt;b&gt;Text&lt;/b&gt;</p>", function (){
		chai.expect(parseMarkup(['p', '<b>Text</b>'])).to.equal('<p>&lt;b&gt;Text&lt;/b&gt;</p>');
	});
		
	it("['p', ['a', ['b', 'More'], ['b', ['span', 'some', 'text']]]] is parsed to <p><a><b>More</b><b><span>sometext</span></b></a></p>", function (){
		chai.expect(parseMarkup(['p', ['a', ['b', 'More'], ['b', ['span', 'some', 'text']]]])).to.equal('<p><a><b>More</b><b><span>sometext</span></b></a></p>');
	});
	
	it("['p', ['div'], ['div'], ['span', 'text']] is parsed to <p><div/><div/><span>text</span></p>", function (){
		chai.expect(parseMarkup(['p', ['div'], ['div'], ['span', 'text']])).to.equal('<p><div/><div/><span>text</span></p>');
	});	

});