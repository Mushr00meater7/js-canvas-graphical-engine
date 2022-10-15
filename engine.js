var canvas = document.getElementById("gameFrame");
      var game = canvas.getContext("2d");
      var framerate = 1000

      game.fillStyle = "blue"

      var playerDatas = {
            posX: 10, 
            posY: 10, 
            sizeX:canvas.width / 12,
            sizeY:canvas.height / 12, 
            movement:1, 
            color:"blue"
      }
      var projectileDatas = {
            posX: playerDatas['posX'], 
            posY: 10, 
            sizeX:10,
            sizeY:canvas.height / 12, 
            speed:15,
            demage:10, 
            color: "red"
      }
      var projectiles = []
      var shooting = false

      var player = game.fillRect(playerDatas["posX"],playerDatas["posY"],playerDatas['sizeX'],playerDatas['sizeY'])
      function update() {
            console.log("update")
            document.addEventListener("keydown",(keyInput) => {

                  if (keyInput.key == "d") {
                        if (playerDatas['posX'] < 540) {
                              game.fillStyle = playerDatas['color']
                              game.clearRect(playerDatas["posX"],playerDatas["posY"],playerDatas['sizeX'],playerDatas['sizeY'])
                              playerDatas['posX'] += playerDatas['movement']
                              player = game.fillRect(playerDatas["posX"],playerDatas["posY"],playerDatas['sizeX'],playerDatas['sizeY'])
                              //console.log(playerDatas['posX'])
                        }
                  }

                  if (keyInput.key == "a") {
                        if (playerDatas['posX'] > 10) {
                              game.fillStyle = playerDatas['color']
                              game.clearRect(playerDatas["posX"],playerDatas["posY"],playerDatas['sizeX'],playerDatas['sizeY'])
                              playerDatas['posX'] -= playerDatas['movement']
                              player = game.fillRect(playerDatas["posX"],playerDatas["posY"],playerDatas['sizeX'],playerDatas['sizeY'])
                              //console.log(playerDatas['posX'])
                        }
                  }

                  if (keyInput.key == "e") {
                        shooting = true
                        var CurrentDatas = {
                              x:playerDatas['posX'],
                              y:projectileDatas['posY']
                        }
                        projectiles.push(CurrentDatas)

                  }
            })
                  if ( shooting == true ) {
                        

                        for (let i = 0; i<projectiles.length;i++) {
                              game.fillStyle = projectileDatas['color']
                              game.clearRect(projectiles[i]['x'],projectiles[i]['y'],projectileDatas['sizeX'], projectileDatas['sizeY'])
                              projectiles[i]['y'] += projectileDatas['speed']
                              var proj = game.fillRect(projectiles[i]['x'],projectiles[i]['y'],projectileDatas['sizeX'], projectileDatas['sizeY']) 
                        }

                  }



      }
      const delay = async (ms = 1000) =>
            new Promise(resolve => setTimeout(resolve, ms))
            
      async function startGame() {
            while (true) {
                  update()
                  playerDatas['movement'] = 1
                  await delay(600)
            }
      }
      startGame()


