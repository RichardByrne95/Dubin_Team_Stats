const team = {
  _players: [
    {
      firstName: "David",
      lastName: "Treacy",
      age: 30
    }, {
      firstName: "Eamonn",
      lastName: "Dillon",
      age: 28
    }, {
      firstName: "Conal",
      lastName: "Keaney",
      age: 38
    }
  ],
  _games: [
    {
      opponent: "Laois",
      teamPoints: 23,
      opponentPoints: 25
    }, {
      opponent: "Laois",
      teamPoints: 30,
      oppoenntPoints: 23
    }, {
      opponent: "Carlow",
      teamPoints: 20,
      opponentPoints: 9
    }
  ],
  get games() {
      return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    team._players.push({firstName, lastName, age});
  },
  addGame(opponent, teamPoints, opponentPoints) {
    team._games.push({opponent, teamPoints, opponentPoints})
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Monaghan", 18, 18);
team.addGame("Mayo", 14, 8);
team.addGame("Donegal", 18, 17);
console.log(team.games);
