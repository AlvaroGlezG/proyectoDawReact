import SideBar from 'components/SideBar/sideBar';

import './settings.css';

export default function Settings(){

  let selector = document.querySelectorAll('span')
  console.log(selector[17].textContent)

  if(selector[17].textContent === 'Login'){
    return (<>
      <SideBar menuState={false}/>
      <h1 className="title">Registrate para </h1>
      <h1 className="title">ver los ajustes</h1>
      <h1 className="title">de usuario</h1>
    </>);
  }else{
    return (<>
      <SideBar menuState={false}/>
      <div className="container">
        <img id="userIcon" src="data:image/png;base64,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"></img>
        <div className="userDetalles">
          <p>Usuario: AlvaroGlez</p>
          <p><a>Cambiar contrase??a</a></p>
          <p>Fecha de nacimiento: 09/07/2001</p>
          <p>Correo: alvarogongar11@gmail.com</p>
        </div>
      </div>
    </>);
  }

}