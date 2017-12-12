let axios = require('axios')


// class Delay {
//   constructor(){
//
//   }
//   async handoff = () => {
//     const message = await this.takesTime('just passing time')
//     return message
//   }
//   takesTime = (message) => {
//     setTimeout(this.writeSomething, 1000)
//   }
//   writeSomething = (message) => {
//     console.log(message)
//   }
// }
//
//
//
// let myDelay = new Delay()
// myDelay.handoff() // Throws an error





 async function getMusic () {
  const result = await axios.get(`https://itunes.apple.com/search?term=beatles&entity=musicVideo`)

  console.log(result.data.results)
}

getMusic()
