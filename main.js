
function writeSomething(){
  console.log('this is really something')
}

function takesTime(){
  setTimeout(writeSomething, 1000)
}


class Nappie {
  constructor(){

  }
  async handoff = () => {
    const message = await takesTime()
    return message
  }
}



let myNap = new Nappie()
myNap.handoff()
