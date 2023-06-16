import './sidebar.css'
import { NavLink } from "react-router-dom"

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='sidebar-column'>
                <ul>

                    <NavLink exact to="/" activeClassName='selected'>
                        <li>
                            <div className='step-number' id='1'>1</div>
                            <div className='step-info'><div className='step-info-number'>STEP 1</div>YOUR INFO</div>
                        </li>
                    </NavLink>


                    <NavLink exact to="/step-2" activeClassName='selected'>
                        <li>
                            <div className='step-number'>2</div>
                            <div className='step-info'><div className='step-info-number'>STEP 2</div>SELECT PLAN</div>
                        </li>
                    </NavLink>

                    <NavLink exact to="/step-3" activeClassName='selected'>
                        <li>
                            <div className='step-number'>3</div>
                            <div className='step-info'><div className='step-info-number'>STEP 3</div>ADD-ONS</div>
                        </li>
                    </NavLink>

                    <NavLink exact to="/step-4" activeClassName='selected'>
                        <li>
                            <div className='step-number'>4</div>
                            <div className='step-info'><div className='step-info-number'>STEP 4</div>SUMMARY</div>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;