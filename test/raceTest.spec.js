describe("Race of hare and Tortoise",function(){
    describe("Race", function(){
        describe("Given the distance of 1000", function(){
            it("Should return the winner of the race and sleeping minutes of hare", function(){
                //Arrange
                let sut=new Racers();
                let speed1=100;
                let speed2=10;
                let distance=1000;
                let sleep=500;
                let getup=40;
                //Act
                let actual = sut.Race(speed1,speed2,distance,sleep,getup);
                //Assert
                expect(actual).toBe("The tortoise won the race. The hare is sleeping for 91 minutes.");
            })
        })

        describe("Given the distance of 1500", function(){
            it("Should return the winner of the race and sleeping minutes of hare", function(){
                //Arrange
                let sut=new Racers();
                let speed1=100;
                let speed2=10;
                let distance=1500;
                let sleep=500;
                let getup=100;
                //Act
                let actual=sut.Race(speed1,speed2,distance,sleep,getup);
                //Assert
                expect(actual).toBe("The hare and the tortoise tied. The hare is sleeping for 135 minutes.");

            })
        })
        describe("Given the distance of 1200", function(){
            it("Should return the winner of the race and the time the hare slept before the finish line", function(){
                //Arrange
                let sut=new Racers();
                let speed1=100;
                let speed2=10;
                let distance=1200;
                let sleep=500;
                let getup=100;
                //Act
                let actual=sut.Race(speed1,speed2,distance,sleep,getup);
                //Assert
                expect(actual).toBe("The hare won the race. He is sleeping for 105 minutes.");
            })
        })

    })
})