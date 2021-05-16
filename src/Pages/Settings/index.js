import SideBar from 'components/SideBar/sideBar';

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
    </>);
  }

}