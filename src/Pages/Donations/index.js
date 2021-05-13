import SiteBar from 'components/SideBar/sideBar';

import "./donations.css";
{/* <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap" rel="stylesheet"> 

Dona mediante Paypara para apoyar el desarrollo del proyecto de Filmfy

*/ }

export default function Donations() {

  return (<div className="donations">
    <SiteBar menuState={false} />

    <div className="circles">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>

    <div className="card-group" >
      <div className="card" onClick={() => window.location = "https://www.paypal.com/donate/?business=alvarogongar11%40gmail.com&item_name=Apoyar+el+proyecto+de+Filmfy&currency_code=EUR"}>
        <div className="explicacion">Dona mediante Paypal para<br/>apoyar el desarrollo del<br/>proyecto de Filmfy</div>
        <div className="logo"><img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png" alt="Visa" /></div>
        <div className="chip"><img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="chip" /></div>
        <div className="number">**** **** **** ****</div>
        <div className="name">ÁLVARO GONZÁLEZ GARCÍA</div>
        {/* <div className="from">10/19</div> */}
        <div className="to">06/25</div>
        <div className="ring"></div>
      </div>
    </div>
    </div>);
}