import SideBar from 'components/SideBar/sideBar';

import "./donations.css";

export default function Donations() {

  return (<>
    <div className="donations">
      <SideBar menuState={false} />

      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className="card-group" >
        <div className="card" onClick={() => window.location = "https://www.paypal.com/donate/?business=alvarogongar11%40gmail.com&item_name=Apoyar+el+proyecto+de+Filmfy&currency_code=EUR"}>
          <div className="explicacion">Dona mediante Paypal para<br />apoyar el desarrollo del<br />proyecto de Filmfy</div>
          <div className="logo"><img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png" alt="Visa" /></div>
          <div className="chip"><img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="chip" /></div>
          <div className="number">**** **** **** ****</div>
          <div className="name">ÁLVARO GONZÁLEZ GARCÍA</div>
          {/* <div className="from">10/19</div> */}
          <div className="to">06/25</div>
          <div className="ring"></div>
        </div>
      </div>
    </div>
  </>);
}