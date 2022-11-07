import './UpdateInfo.css';

function App() {
  return (
    <div className="general">
        <nav className="nav">Barra general</nav>

        <div className='top'>
          <label className="styleFontTitle">Editar Perfil</label>
          <i className="fa-solid fa-user imageP"></i>

          {/* <div className="name">
            <input type="text" className="" id="" name="" />
            <input type="text" className="input2" id="" name=""  />
            <input type="text" className="input2" id="" name=""  />
          </div> */}

          <div className = "point">
            <label className="styleFont">Puntos</label>
            <label className="styleFont pos">0</label>
          </div>
          

        </div>

        <div className='medium'>
          <div className="firstColumn firstRow">
            <label className="styleFont">Nombre</label><br/>
            <input type="text" id="" name=""/>
          </div>

          <div className="firstColumn secondRow">
            <label className="styleFont">Primer Apellido</label><br/>
            <input type="text" id="" name=""/>
          </div>

          <div className="firstColumn thirdRow">
            <label className="styleFont">Segundo Apellido</label><br/>
            <input type="text" id="" name=""/>
          </div>


          <div className="secondColumn firstRow">
            <label className="styleFont">Género</label><br/>
            <select className='select'>
              <option value = '1'>Hombre</option>
            </select>
          </div>

          <div className="secondColumn secondRow">
            <label className="styleFont">Universidad</label><br/>
            <select className='select'>
              <option value = '1'>UCR</option>
            </select>
          </div>

          <div className="secondColumn thirdRow">
            <label className="styleFont">Dirección</label><br/>
            <select className='select2'>
              <option value = '1'>San Jose</option>
            </select>
            <select className='select2 selectPos'>
              <option value = '1'>Montes De Oca</option>
            </select>
            <select className='select2 selectPos'>
              <option value = '1'>Sabanilla</option>
            </select>
          </div>

          <div className="thirdColumn firstRow">
            <label className="styleFont">Cédula</label><br/>
            <input type="text" id="" name=""/>
          </div>
          <div className="thirdColumn secondRow">
            <label className="styleFont">Teléfono</label><br/>
            <input type="text" id="" name=""/>
          </div>
          <div className="thirdColumn thirdRow">
            <label className="styleFont">Correo Electrónico</label><br/>
            <input type="text" id="" name=""/>
          </div>
        </div>

        <div className="bottom">
          <button className='button1 buttonG2'>Guardar Cambios</button>
        </div>
    </div>
  );
}

export default App;
