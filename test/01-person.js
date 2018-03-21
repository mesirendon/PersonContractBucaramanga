const Person = artifacts.require('Person');

chai =  require('chai');
chaiAsPromised =  require('chai-as-promised');

chai.use(chaiAsPromised);

expect = chai.expect;

contract('Person', accounts => {
  describe('Contract', () => {
    it('should get a Person contract instance', () => {
      Person.deployed().then(instance => {
        person = instance;
        expect(person).to.not.be.null;
      })
    });
  });

  describe('Attributes', () => {
    describe('Name', () => {
      it('should set the name', () => {
        person.setName('Angel')
          .then(response => {
            expect(response.tx).to.match(/\w{66}/)
          });
      });
      it('should get the name', () => {
        person.name()
          .then(name => {
            expect(name).to.be.equal('Angel');
          });
      });
      it('should reject setting the name from another account', () => {
        expect(person.setName('Ladron', {from: accounts[7]}))
          .to.be.eventually.rejected;
      });
      it('should get the name set originally', () => {
        person.name()
          .then(name => {
            expect(name).to.be.equal('Angel');
          });
      });
    });
  });
});
