import Header from './components/header';
import Main from "./components/main_container"
import Footer from "./components/Footer"
import './App.css';




function App() {
  let clicked;
  return (
    <div className="_App">
      {/* <div className="homenav">
                
                <div className="logoToggle">
                    <div  className='toggle'>
                        <button>xxxxx</button>
                    </div>
                    <div className="logo">
                        <Avatar/>
                    </div>
                </div>

                <ul className='social_media'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                </ul>
      </div> */}
      {/* <Header clicked={clicked}/>  */}
      <div className='hide'>
        <h1>
          I am sorry for the inconvenience 🙏🏾🙂, but the page is under construction 🚧🛠, <br></br>
          here's a joke since you are here. 😊  <br></br>
          <br></br>
          <br></br>
          what is the object-oriented way to become wealthy? 🧐<br></br>
          Inheritance 😁
        </h1>
      </div>
      <Main page={clicked}/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
