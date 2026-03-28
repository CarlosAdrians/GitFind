import { useState } from "react";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import background from "../../assets/background.png";

import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name){
      const {avatar_url, name, login, bio} = newUser;
      setCurrentUser({avatar_url, name, login, bio});
      
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        
        <img src={background} alt="background app" className="background"  />
        
        <div className="container">
          
          <div className="buscar">
            <input 
              name="usuario" 
              value = {user} 
              onChange={event => setUser(event.target.value)} 
              placeholder="@username" 
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            
            <>
            <div className="perfil">
              <img src= {currentUser.avatar_url} alt="Profile" className="usuario" />
              
              <div className="info">
                <div className="nome">
                  <h2>{currentUser.name}</h2>
                  <p>@{currentUser.login}</p>
                </div>
                
                <div className="bio">
                  <p>{currentUser.bio}</p>
                </div>
              </div>
            </div>
            
            <hr />
            </>
          ): null}


          {repos?.length ? (

            <div className="repositorios">
              
              <h1>Repositórios</h1>
              {repos.map(repo => (
                
                <ItemList 
                  title= {repo.name}
                  description= {repo.description}
                />
                
              ))}
            </div>
          ): null}

        </div>
      </div>
    </div>
  );
}

export default App;
