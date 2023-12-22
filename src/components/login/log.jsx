import "./log.css";

export function Form() {
  return (
    <div className="form_container">
      <div className="login">
        <div className="content_login">
          <h1 className="title_login">Bienvenido</h1>

          <form className="form_login">
            <label className="i1">
              <span>Username</span>
              <input type="text" name="username" required autoFocus />
            </label>
            <label className="i2">
              <span>password</span>
              <input type="password" name="password" required />
            </label>
            <div className="bt1">
              <button>Entrar</button>
            </div>
          </form>

          <ul className="list_redes">
            <li className="intagram">
              <a href="#" target="_blank">
                <div className="instagram_log log_icon"></div>
              </a>
            </li>
            <li className="pagina">
              <a href="#" target="_blank">
                <div className="pagina_log log_icon"></div>
              </a>
            </li>
            <li className="likedin">
              <a href="#" target="_blank">
                <div className="likedin_log log_icon"></div>
              </a>
            </li>
          </ul>
          <div className="link_pagina">
            <a href="https://edcsoftware.cl/" target="_blank">edcsoftware.cl</a>
          </div>
        </div>

    
      </div>
    </div>
  );
}
