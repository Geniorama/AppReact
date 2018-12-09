import React, { Component } from 'react';

class MenuLateral extends Component{
    render(){
        return(
            <aside className="bg-dark text-light">
                <ul class="nav flex-column">
                    <li class="nav-item"><a href="#" class="nav-link">Dashboard Btn</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Dashboard Btn 2</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Dashboard Btn 3</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Dashboard Btn 4</a></li>
                </ul>
            </aside>
        );
    }
}

export default MenuLateral;