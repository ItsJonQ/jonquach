!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.mitt=e()}(this,function(){function n(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}return n});
//# sourceMappingURL=mitt.umd.js.map

const GEM = mitt()

let SCORE = null
let ME = null

let THEM_COUNT = 0
let THEM_MAX = 100
let THEM_LIST = []

let FASTEST_THEM = 500
let SLOWEST_THEM = 5000

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomScreenX = () => {
  return getRandom(0, window.innerWidth)
}
const getRandomScreenY = () => {
  const min = 0
  return getRandom(0, window.innerHeight)
}

class Score {
  constructor () {
    this.countNode = null
    this.count = 0
    this.step = 0
    this.mount()
  }

  increment () {
    this.count += 1
    this.adjustDifficulty()
    this.render()
  }

  adjustDifficulty () {
    const c = this.count
    if (c > 20 && this.step === 0) {
      SLOWEST_THEM -= 1000
      this.step = 1
    }
    if (c > 50 && this.step === 1) {
      SLOWEST_THEM -= 1000
      this.step = 2
    }
    if (c > 70 && this.step === 2) {
      SLOWEST_THEM -= 1000
      this.step = 3
    }
  }

  mount () {
    this.node = document.createElement('div')
    this.node.classList.add('Score')
    document.body.append(this.node)

    this.countNode = document.createElement('div')
    this.countNode.classList.add('ScoreCount')
    this.node.append(this.countNode)
    this.render()
  }

  render () {
    this.countNode.innerHTML = this.count
  }
}

class Entity {
  constructor () {
    this.node = null
    this.BCR = {}

    requestAnimationFrame(() => {
      this.willMount()
      this.mount()
      this.didMount()
    })
  }

  mount () {
    this.node = document.createElement('div')
    document.body.append(this.node)

    this.node.classList.add('Entity')
    this.BCR = this.node.getBoundingClientRect()
  }

  didMount () {}
  willMount () {}
}

class Me extends Entity {
  constructor () {
    super ()
    this.reposition = this.reposition.bind(this)
    this.fire = this.fire.bind(this)
    this.x = null
    this.y = null
    window.addEventListener('mousemove', this.reposition)
    window.addEventListener('click', this.fire)
  }

  didMount () {
    this.node.classList.add('Me')
  }

  reposition (event) {
    const { pageX, pageY } = event
    const x = pageX - (this.BCR.width / 2)
    const y = pageY - (this.BCR.height / 2)
    this.node.style.opacity = 1

    requestAnimationFrame(() => {
      this.x = x
      this.y = y
      this.node.style.transform = `translate(${x}px, ${y}px)`
      GEM.emit('meMove', this)
    })
  }

  fire (event) {
    const { pageX, pageY } = event
    let closestThem = THEM_LIST.filter(t => !t.isDestroyed)
    if (!closestThem.length) return

    closestThem = closestThem
      .reduce((prev, curr) => {
        const pBCR = prev.node.getBoundingClientRect()
        const cBCR = curr.node.getBoundingClientRect()
        const pX = pBCR.left
        const pY = pBCR.top
        const cX = cBCR.left
        const cY = cBCR.top
        return (
          (
            Math.abs(cX - pageX) < Math.abs(pX - pageX) &&
            Math.abs(cY - pageY) < Math.abs(pY - pageY)
          )
          ? curr : prev
        )
      })

    if (closestThem) {
      closestThem.destroy()
    }
  }
}

class Them extends Entity {
  constructor (props) {
    super()
    this.top = null
    this.left = null
    this.target = props.target
    this.followMe = this.followMe.bind(this)
    this.handleMeMove = this.handleMeMove.bind(this)
    this.maybeCatchMe = this.maybeCatchMe.bind(this)
    this.destroy = this.destroy.bind(this)
    this.isDestroyed = false

    GEM.on('meMove', this.handleMeMove)
  }

  didMount () {
    this.node.classList.add('Them')
    this.node.style.transitionDuration = `${getRandom(FASTEST_THEM, SLOWEST_THEM)}ms`
    this.node.style.top = `${getRandomScreenX()}px`
    this.node.style.right = `${getRandomScreenY()}px`
    this.node.addEventListener('transitionend', this.maybeCatchMe)
    this.offsetTop = this.node.offsetTop
    this.offsetLeft = this.node.offsetLeft

    this.followMe()
  }

  followMe () {
    const currentBCR = this.target.node.getBoundingClientRect()
    const { x, y } = currentBCR

    const left = this.node.offsetLeft
    const top = this.node.offsetTop
    const tX = x - left
    const tY = y - top
    requestAnimationFrame(() => {
      this.node.style.transform = `translate(${tX}px, ${tY}px)`
    })
  }

  handleMeMove () {
    this.node.style.opacity = 1
    this.followMe()
  }

  maybeCatchMe (event) {
    const BCR = this.node.getBoundingClientRect()
    const t = 25
    const x = Math.round(BCR.left) - t
    const y = Math.round(BCR.top) - t
    const mX = parseInt(this.target.x, 10)
    const mY = parseInt(this.target.y, 10)

    if (
      mX >= (x - t) && mX <= (x + t + t) &&
      mY >= (y - t) && mY <= (y + t + t)
    ) {
      this.node.style.opacity = 1
      requestAnimationFrame(() => {
        window.location.reload()
      })
    }
  }

  destroy () {
    if (this.isDestroyed) return
    SCORE.increment()
    THEM_COUNT -= 1
    this.isDestroyed = true
    requestAnimationFrame(() => {
      document.body.removeChild(this.node)
    })
  }
}

const addThem = () => {
  THEM_COUNT = THEM_COUNT + 1
  if (THEM_COUNT > THEM_MAX) return
  THEM_LIST.push(new Them({ target: ME }))
}

const start = () => {
  ME = new Me()
  SCORE = new Score()
  setInterval(addThem, 500)
}

start()
