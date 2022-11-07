import './SeeInfo.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Ford",
      lastName: "Mustang",
      secondSurname: "red",
      points: 0,
      dni: 117870341,
      phone: 86784841,
      email: "h@gamil.com",
      gender: "Hombre",
      Univesity: "TEC",
      Direccion: "SBD"
    };
  }

  render() {
    return (
      <div className="general">
          <nav className="nav">Barra general</nav>

          <div className='top'>
            <label className="styleFontTitle">Perfil</label>
            <i className="fa-solid fa-user imageP"></i>
            <div className="name">
              <label className="styleFont">{this.state.name} {this.state.lastName} {this.state.secondSurname}</label>
              <br/>
              <label className="styleFont2">Autor</label>
            </div>

            <div className = "point">
              <label className="styleFont">Puntos</label>
              <label className="styleFont pos">{this.state.points}</label>
            </div>

            <div className = "buttonDiv">
              <button className="button button1">EDITAR PERFIL</button>
              <br/><br/>
              <button className="button button2">NOTICIA FAVORITAS</button>
              <br/><br/>
              <button className="button button3">PRODUCTOS CANJEADOS</button>
            </div>
            

          </div>

          <div className='medium'>
            <div className="rightTop">
              <i class="fa-solid fa-person-half-dress"></i>
              <label className="styleFont mediumPos">{this.state.gender}</label>
            </div>

            <div className="rightMedium">
              <i class="fa-solid fa-building-columns"></i>
              <label className="styleFont mediumPos">{this.state.Univesity}</label>
            </div>

            <div className="rightBottom">
              <i class="fa-solid fa-location-pin"></i>
              <label className="styleFont mediumPos">{this.state.Direccion}</label>
            </div>


            <div className="leftTop informationPos">
              <i class="fa-solid fa-id-card"></i>
              <label className="styleFont mediumPos">{this.state.dni}</label>
            </div>
            <div className="leftMedium informationPos">
              <i class="fa-solid fa-square-phone"></i>
              <label className="styleFont mediumPos">{this.state.phone}</label>
            </div>
            <div className="leftBottom informationPos">
              <i class="fa-solid fa-envelope"></i>
              <label className="styleFont mediumPos">{this.state.email}</label>
            </div>
          </div>

          <div className="bottom">
            <i class="fa-solid fa-left-long posRight"></i>
          </div>
      </div>
    );
  }
}

export default App;
