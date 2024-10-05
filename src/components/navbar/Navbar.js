import './Navbar.css'

function Navbar(){
    return(
        <div className="con">
            <div className="start">
               <p className='p1'>جشنواره تابستانی شروع شد<i className="fa fa-angle-left"></i></p>
                <p className='p2'><i class="fa fa-phone"></i>021-123456</p>
                <p className='p33'>تابستان تا 50% تخفیف</p>
            </div>
            <h5 className='h'>شیکان</h5>
            <form className='form'>
                     <input type='text' className='query' placeholder='جستجو. . .'/>
                     <button className='btn'><i className='fa fa-search'></i></button>
                  </form>
                  <div className="end">
               <p className='us'>حساب کاربری<i id='user' className="fa fa-user-circle"></i></p>
               <div>
               </div>
            </div>
         </div>
    )
}
export default Navbar