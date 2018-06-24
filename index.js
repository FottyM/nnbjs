import brain, { likely } from 'brain.js'
import trainingDataset from './irisTrain'
import testDataset from './irisTest'

const net = new brain.NeuralNetwork()

const trainingDatasetDone = trainingDataset.map(item => {
  return {
    input: [
      item.sepal_length,
      item.sepal_width,
      item.petal_length,
      item.petal_width
    ],
    output: { [item.species]: 1 }
  }
})

const testDatasetDone = testDataset.map(item => [
  item.sepal_length,
  item.sepal_width,
  item.petal_length,
  item.petal_width
])

// console.log(trainingDatasetDone)
net.train(trainingDatasetDone)

// const output = net.run(testDatasetDone[3])
const output = likely(testDatasetDone[3], net)
console.log(output)
