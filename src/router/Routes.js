import React from "react";
import Cursos from "../views/all-home-version/Cursos";
import FrontEnd from "../views/all-home-version/FrontEnd";
import BackEnd from "../views/all-home-version/BackEnd";
import Inicio from "../views/all-home-version/Inicio";
import ComoCrearProyectoWeb from "../views/all-home-version/ComoCrearProyectoWeb";
import BasesDeDatos from "../views/all-home-version/BasesDeDatos";
import Apps from "../views/all-home-version/Apps";
import Planes from "../views/all-home-version/Planes";
import ArquitecturaDeSoftware from "../views/all-home-version/ArquitecturaDeSoftware";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/planes" component={Planes} />
          <Route path="/front-end" component={FrontEnd} />
          <Route path="/back-end" component={BackEnd} />
          <Route path="/bases-de-datos" component={BasesDeDatos} />
          <Route path="/apps" component={Apps} />
          <Route path="/arquitectura-de-software" component={ArquitecturaDeSoftware} />
          <Route path="/como-crear-proyecto-web" component={ComoCrearProyectoWeb} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
