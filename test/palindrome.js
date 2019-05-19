const palindrome = require('../palindrome')
const expect = require('chai').expect

describe('palindrom', () => {

	it('should check that something is a palindrom', () => {

		expect(palindrome('evitative')).to.be.equal(true)	
	
	})

	it('should return false if something is not a palindrom', () => {
	
		expect(palindrome('hello world')).to.be.equal(false)
	
	})

	it('should test palindrom number', () => {
	
		expect(palindrome(23455432)).to.be.equal(true)	
	
	})

	it('should test symetry on several words', () => {
	
		expect(palindrome('Don\'t nod')).to.be.equal(true)	
	
	})

})
