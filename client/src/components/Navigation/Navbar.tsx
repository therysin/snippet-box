import { NavLink } from 'react-router-dom';
import { Route } from '../../typescript/interfaces';
//import { routes as clientRoutes } from './routes.json';
import data from './routes.json';
import { log } from 'console';

export const Navbar = (): JSX.Element => {

  const {routes} = data;  
  console.log(routes);
  
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          {routes.map(({ name, dest }, idx) => (
            <li className='nav-item' key={idx}>
              <NavLink exact to={dest} className='nav-link'>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
