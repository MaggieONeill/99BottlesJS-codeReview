
describe('noMoreVerse', function() {
  it("will return the no more beer verse", function() {
    expect(noMoreVerse()).to.contain("No more bottles of beer on the wall");
  });
});

describe('oneMoreVerse', function(){
    it("will return the one more verse", function() {
      expect(oneMoreVerse()).to.contain("One bottle of beer on the wall")
    });
  });

describe('twoMoreVerse', function() {
  it("will return the two more verse", function() {
    expect(twoMoreVerse()).to.contain("Two more bottles of beer on the wall")
  });
});

describe('moreThanTwoVerse', function() {
  it("will return regular song that decreases the bottle amount in the second part of the verse", function() {
    expect(moreThanTwoVerse(12)).to.contain("11 bottles");
  });
});

describe('bottleAmount', function() {
  it("will return userInput down to zero", function() {
    expect(bottleAmount(18)).to.contain("No more bottles of beer on the wall");
  });
});
