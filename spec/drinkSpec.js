describe ("whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe ("Check age", function() {
        it ("Must exist", function() {
            expect (whatCanIDrink).toBeDefined();
        });
        it ("Should return sorry message when whatCanIDrink(0)", function() {
            let result = whatCanIDrink(0)
            expect(result).toBe("Drink Toddy");
        });

        it ("Should return drink coke when whatCanIDrink(17)", function() {
            let result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it ("Should return drink beer when whatCanIDrink(20)", function() {
            let result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it ("Should return drink Whisky when whatCanIDrink(75)", function() {
            let result = whatCanIDrink(75)
            expect(result).toBe("Drink Whisky")
        });

        it ("Should be unable to return drink when whatCanIDrink(150)", function() {
            let result = whatCanIDrink(150)
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });

        it ("Should be unable to return drink when whatCanIDrink(-1)", function() {
            let result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can't tell what drink because the age is incorrect")
        })
    })
})