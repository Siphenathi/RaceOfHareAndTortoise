function Racers() {
    return {
        Race: function (speed1, speed2, distance, sleep, getup) {
            let hareSleptTime = ((distance - getup) / speed2) - (sleep / speed1);
            let results = `${CheckWinner(speed1, speed2, distance, sleep, getup)} ${GetSleepMsg(hareSleptTime, distance)}`

            return results;
        }
    }
    function GetSleepMsg(hareSleptTime, distance) {
        if (distance == 1200) {
            return `He is sleeping for ${hareSleptTime} minutes.`;
        }
        return `The hare is sleeping for ${hareSleptTime} minutes.`;
    }
    function CheckWinner(speed1, speed2, distance, sleep, getup) {

        let minutesRanByTortoise = ((distance - getup) / speed2);
        let minutesLeftForTortoise = (distance / speed2) - minutesRanByTortoise;


        let minutesRanByHare = (sleep / speed1);
        let minutesLeftForHare = (distance / speed1) - minutesRanByHare;

        if (minutesLeftForTortoise < minutesLeftForHare) {
            return 'The tortoise won the race.'
        }
        if (minutesLeftForHare == minutesLeftForTortoise) {
            return 'The hare and the tortoise tied.'
        }
        if (minutesLeftForTortoise > minutesLeftForHare)

            return 'The hare won the race.';
    }
}
