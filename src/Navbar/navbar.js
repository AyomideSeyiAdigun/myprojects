import css from './navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';






function Navbar() {
    let history = useHistory()

    const gotoDashboard=()=>{
        let token = localStorage.getItem('token')
         if (token ==null) return
    axios.get('http://localhost:3100/dashboard',{
         headers:{'Authorization': `Bearer ${token}`}
    }).then(res=>{
        if (res.data){
            history.push('/dashboard')
        }
        else{
            history.push('/')
        }
    })
    
    }

    const gotoProfile=()=>{
        let token = localStorage.getItem('token')
         if (token ==null) return
    axios.get('http://localhost:3100/dashboard',{
         headers:{'Authorization': `Bearer ${token}`}
    }).then(res=>{
        if (res.data){
            history.push('/profile')
        }
        else{
            history.push('/')
        }
    })
    
    }

    const gotoFollower=()=>{
        let token = localStorage.getItem('token')
         if (token ==null) return
    axios.get('http://localhost:3100/dashboard',{
         headers:{'Authorization': `Bearer ${token}`}
    }).then(res=>{
        if (res.data){
            history.push('/follower')
        }
        else{
            history.push('/')
        }
    })
    
    }

    const gotoDraft=()=>{
        let token = localStorage.getItem('token')
         if (token ==null) return
    axios.get('http://localhost:3100/dashboard',{
         headers:{'Authorization': `Bearer ${token}`}
    }).then(res=>{
        if (res.data){
            history.push('/draft')
        }
        else{
            history.push('/')
        }
    })
    
    }

    const gotoHome=()=>{
         
        localStorage.removeItem('token')
         history.push('/')
      
    
    }









    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" className="Link"  to="/" > Blog</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" onClick={gotoDashboard} to='/dashboard' >Dashboard</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" onClick={gotoProfile} to="">Profile</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" onClick={gotoFollower} to="" >Follower</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" onClick={gotoDraft} to="" >Drafts</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" to="/login" >Login</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" to="/signup" >Signup</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" to="/about">About</Link>
            </li>
            <li class="nav-item">
            <Link className="Link" onClick={gotoHome} to="" >Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar