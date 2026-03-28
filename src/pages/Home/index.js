import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        
        <img src={background} alt="background app" className="background"  />
        
        <div className="container">
          
          <div className="buscar">
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/118210481?v=4" alt="Profile" className="usuario" />
            
            <div className="info">
              <div className="nome">
                <h2>Carlos Adrians</h2>
                <p>@CarlosAdrians</p>
              </div>
              
              <div className="bio">
                <p>Desenvolvedor Full Stack | JavaScript, TypeScript, React, Node.js.</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="repositorios">
            
            <h1>Repositórios</h1>
            
            <ItemList 
              title="teste1"
              description="kadiaoadadadada"  
            />

            <ItemList 
              title="teste1"
              description="kadiaoadadadada"  
            />

            <ItemList 
              title="teste1"
              description="kadiaoadadadada"  
            />
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
