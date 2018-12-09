import React, { Component } from 'react';

class BarNav extends Component{
    render(){
        return(
            <div class="row justify-content-between text-center">
                <div className="col-12 col-md-2">
                    <h2>LOGO</h2>
                </div>
                <div className="col-12 col-md-4">
                    <nav>
                        <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link">Enlace</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Enlace 2</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Enlace 3</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Enlace 4</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default BarNav;
