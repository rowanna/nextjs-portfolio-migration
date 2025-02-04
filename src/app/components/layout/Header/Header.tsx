import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header id={`${styles.header}`}>
        <div className={`${styles.header} header`}>
          <div className="menu-btn">
            <a href="https://rowanna.github.io/react-port/">React</a>
          </div>
          <div className="head-tit">
            <a href="../main/index4.html">portfolio 2020</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="../sign/logIn.php">LOGIN</a>
              </li>
              <li>
                <a href="../sign/signUp.php">SIGN UP</a>
              </li>

              <li>
                <a href="../board/listBoard.php">BOARD</a>
              </li>
              <li>
                <a href="../main/index4.html#footer">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="navShow">
            <ul>
              <li>
                <a href="../sign/logIn.php">LOGIN</a>
              </li>

              <li>
                <a href="../board/listBoard.php">BOARD</a>
              </li>
              <li>
                <a href="../main/index4.html#footer">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="ham">
            <label htmlFor="menuicon">
              <input type="checkbox" id="menuicon" />
              <span className="menu">
                <span className="hamburger"></span>
              </span>
              <ul>
                <li>
                  <a href="../sign/logIn.php">LOGIN</a>
                </li>
                <li>
                  <a href="../sign/signUp.php">SIGN UP</a>
                </li>
                <li>
                  <a href="../board/listBoard.php">BOARD</a>
                </li>
                <li>
                  <a href="../main/index4.html#footer">CONTACT</a>
                </li>
              </ul>
            </label>
          </div>
        </div>
      </header>
    </>
  );
}
