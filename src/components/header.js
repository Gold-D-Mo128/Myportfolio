import '../App.css';
import '../styles/header.css';


function Header(props) {
    return (
    <div className='_header'>
       
        <ul className='header_list'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
    );
}

export default Header;