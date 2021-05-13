// ███████╗██╗██╗░░░░░███╗░░░███╗░██████╗
// ██╔════╝██║██║░░░░░████╗░████║██╔════╝
// █████╗░░██║██║░░░░░██╔████╔██║╚█████╗░
// ██╔══╝░░██║██║░░░░░██║╚██╔╝██║░╚═══██╗
// ██║░░░░░██║███████╗██║░╚═╝░██║██████╔╝
// ╚═╝░░░░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚═════╝░

import SiteBar from 'components/SideBar/sideBar';

import 'bootstrap/dist/css/bootstrap.css';
import './films.css';

export default function Films(){
    return (<>
      <SiteBar menuState={false}/>
      <div className="container">
        <h1 className="title">Peliculas</h1>

      
      </div>
    </>);
}