const brain = require('brain.js');
const data = require('./pos.json');

const network = new brain.recurrent.LSTM();

const training_data = data.map(item => ({
    input: [item.Short_Passing, item.Long_Passing, item.First_Touch, item.Dribbling, item.Tackling, item.Heading, item.Shooting, item.Speed, item.Jumping, item.Acceleration, item.Strength, item.Agility, item.Balance, item.Endurance],
    output: [item.Position]
}));

network.train(training_data, { iterations: 1000, errorThresh: 0.005 });

const output = network.run([5,10,5,10,2,4,9,10,2,8,4,10,6,6]); // expecting W player
console.log(`Position:${output}`);