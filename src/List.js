import './List.css'
import { Link } from 'react-router-dom';

function List(){
    return(
        <ul type='none' className='ul1'>
            <li><Link to='/'>خانه</Link></li>
            <li><Link to='/winter'>کالکشن زمستانه</Link></li>
            <li><Link to='/summer'>کالکشن بهاره‌و‌تابستانه</Link></li>
            <li><Link to='/fall'>کالکشن پاییزه</Link></li>
         </ul>
    )
}
export default List;