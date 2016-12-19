require('./style.scss')

import React from 'react'
import Conrad from '../Conrad/Conrad'

class SpriteCanvas extends React.Component {
  constructor(props) {
    super(props)

    this.canvas = null
    this.ctx = null
    this.conrad = {}
    this.conrad.paused = false
    this.conrad.spritesheet = new Image()
    this.conrad.frame = 0
    this.conradLoadHandler = this.conradLoadHandler.bind(this)

    // single item 32 x 48
    // 2 x 3 of 16 x 16 blocks
    // 1st item has 0,0
    this.conrad.currentAnimation = 4
    this.conrad.animations = Conrad.animations
  }

  conradLoadHandler() {
    console.log('%cconrad is loaded! Use arrow keys to change animation, space bar for play/pause', 'font-size:1.2em;color:red;');
    window.conrad = this.conrad

    this.drawConrad(0, 0, 50, 50)
  }

  aniLoop(renderFn) {
    var fps = 8
    var now
    var then = Date.now()
    var interval = 1000/fps
    var delta
    var running = true
    // var running, lastFrame = +new Date
    function draw(now) {

      // stop the loop if render returned false
      if (running !== false) {
        requestAnimationFrame(draw)

        now = Date.now()
        delta = now - then

        if (delta > interval) {
        // update time stuffs

        // Just `then = now` is not enough.
        // Lets say we set fps at 10 which means
        // each frame must take 100ms
        // Now frame executes in 16ms (60fps) so
        // the loop iterates 7 times (16*7 = 112ms) until
        // delta > interval === true
        // Eventually this lowers down the FPS as
        // 112*10 = 1120ms (NOT 1000ms).
        // So we have to get rid of that extra 12ms
        // by subtracting delta (112) % interval (100).
        // Hope that makes sense.

        then = now - (delta % interval);
        running = renderFn(then)
        }
      }
    }
    draw(then)
  }

  changeAnimation() {
    var body = document.querySelector('body')
    body.onkeydown = (e) => {

      switch(e.keyCode) {
        case 32: // space bar (play pause)
          this.conrad.paused = !this.conrad.paused
          if(!this.conrad.paused) {
            // restart animation
            this.conrad_animation_test()
          }
          console.log('%cConrad is ', 'color: red; ', this.conrad.paused ? 'paused' : 'animating');
          break
        case 37: // arrow left
          this.conrad.currentAnimation -= 1
          break
        case 38: // up arrow
          this.conrad.currentAnimation -= 1
          console.log('this currentAnimation: ', this.conrad.currentAnimation);
          break
        case 39: // arrow right
          this.conrad.currentAnimation += 1
          break
        case 40: // down arrow
          this.conrad.currentAnimation += 1
          console.log('this currentAnimation: ', this.conrad.currentAnimation);
          break
        default:
          break
      }

      console.log(e);

    }
  }

  conrad_animation_test() {
    this.aniLoop(() => {
      this.setup()
      this.drawConrad(
        this.conrad.currentAnimation,
        (++this.conrad.frame % this.conrad.animations[this.conrad.currentAnimation]) + 1,
        50,
        50
      )

      // TEMPORARY HACK TO STOP THE FRAME NUMBER GETTING BIG FIX TODO
      if(this.conrad.frame > 2000) this.conrad.frame = 0

      return !this.conrad.paused
    })
  }

  componentDidMount() {
    this.conrad.spritesheet.onload = this.conradLoadHandler
    this.conrad.spritesheet.src = '/assets/img/conrad-trns.png'

    this.canvas = document.getElementById('main')
    this.ctx = this.canvas.getContext('2d')

    // for dev only?
    window.canvas = this.canvas
    window.ctx = this.ctx

    // might depend on width and height
    // should we re-setup rendering if browser resizes?
    // passing width and height in here?
    this.setup()//this.ctx, window.innerWidth, window.innerHeight)

    this.conrad_animation_test()

    this.changeAnimation()
  }

  setup() {
    this.ctx.fillStyle = '#eee'
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

  drawConrad(ss_row, frame, dx, dy) {
    const ss_width = 32
    const ss_height = 48
    const ss_x = ss_width * frame
    const ss_y = ss_height * ss_row

    this.ctx.drawImage(this.conrad.spritesheet, ss_x, ss_y, ss_width, ss_height, dx, dy, dx+ss_width, dy+ss_height)
  }

  render() {
    return <canvas id="main"/>
  }
}

export default SpriteCanvas
