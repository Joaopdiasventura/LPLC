const canvas = document.getElementById("labirintoCanvas");
const ctx = canvas.getContext("2d");

const tamanhoCelula = 30;
const corFundo = "#000";
const corParede = "#00FF0F";
const corJogador = "#f00";

const labirinto = [
  "##################         #####",
  "#   #            # ####### #   #",
  "#   # ########## # #     #     #",
  "#   # #        # # #   # ###   # ",
  "## ## #### ### # # #   # # #####",
  "   #  #  # #   # # ### # #     #",
  " ###  ## # #     #     # # ### #",
  "       # # ############# # # # #",
  "###    # #      #   #      # # #",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
  "##################         #####",
];

class Jogador {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    verificaColisao(dx, dy) {
      const novoX = this.x + dx;
      const novoY = this.y + dy;
  
      if (labirinto[novoY][novoX] !== "#") {
        return true;
      }
      
      return false;
    }
  
    mover(dx, dy) {
        const novoX = this.x + dx;
        const novoY = this.y + dy;
    
        if (this.x % 4 == 0 && this.x != 0 && this.x != 1 && novoX != this.x && novoX > this.x && this.verificaColisao(dx, dy)) {
            camera.x += jogador.x  / (2)
        }else if (this.x % 4 == 0 && this.x != 0 && this.x != 1 && novoX != this.x && novoX < this.x && this.verificaColisao(dx, dy)) {
            camera.x -= jogador.x  / (2)
        }
        if (this.y % 4 == 0 && this.y != 0 && this.y != 1 && novoY != this.y && novoY > this.y && this.verificaColisao(dx, dy)) {
            camera.y += jogador.y  / (2)
        }else if (this.y % 4 == 0 && this.y != 0 && this.y != 1 && novoY != this.y && novoY < this.y && this.verificaColisao(dx, dy)) {
            camera.y -= jogador.y  / (2)
        }

        if (this.verificaColisao(dx, dy)) {
          this.x += dx;
          this.y += dy;
          console.log(camera);
        }
      }
      
    desenhar() {
      const imagem = new Image();
      imagem.src = "./iconfoxsays.png";
  
      imagem.onload = () => {
        ctx.drawImage(
          imagem,
          (this.x - camera.x) * tamanhoCelula,
          (this.y - camera.y) * tamanhoCelula,
          tamanhoCelula,
          tamanhoCelula
        );
      };
    }
  }
  
  const jogador = new Jogador(2, 2);
  const camera = {
    x: 0,
    y: 0,
    largura: canvas.width / tamanhoCelula,
    altura: canvas.height / tamanhoCelula,
  };
  
  function desenharLabirinto() {
    for (let i = 0; i < labirinto.length; i++) {
      for (let j = 0; j < labirinto[i].length; j++) {
        if (labirinto[i][j] === "#") {
          ctx.fillStyle = corParede;
          ctx.fillRect(
            j * tamanhoCelula - camera.x * tamanhoCelula,
            i * tamanhoCelula - camera.y * tamanhoCelula,
            tamanhoCelula,
            tamanhoCelula
          );
        }
      }
    }
  }
  
  function limparTela() {
    ctx.fillStyle = corFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  function loopPrincipal() {
    limparTela();
    desenharLabirinto();
    jogador.desenhar();
  }
  
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        jogador.mover(-1, 0);
        break;
      case "ArrowRight":
        jogador.mover(1, 0);
        break;
      case "ArrowUp":
        jogador.mover(0, -1);
        break;
      case "ArrowDown":
        jogador.mover(0, 1);
        break;
      case "h":
        window.location.href = "../index.html";
    }
  
    loopPrincipal();
  });
  
  loopPrincipal();