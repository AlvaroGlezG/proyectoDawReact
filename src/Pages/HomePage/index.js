import { Route } from 'wouter';

import Header from 'components/Header/index';
import Form from 'components/Form/index';
import SideBar from 'components/SideBar/sideBar';

import 'App.css';

export default function HomePage(){
    return(<>
        <SideBar menuState={false}/>
        <section className=".App-header">
          <Route path="/" component={Header} />
        </section>
        <section className="form">
          <Route path="/" component={Form} />
        </section>
    </>);
}