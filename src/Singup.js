import React from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import { StyledEngineProvider } from '@mui/material/styles';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import TextField from '@mui/material/TextField';


export const Singup = () => {
    const [value, setValue] = React.useState(null);
    return (<div>
        <Navbar />
        {/* main div  */}
        <div className='row'>
            {/* inner div1     */}
            <div className='col-4  iner1' >
                <div className='innerdiv1'>
                    <div>Lorem Ipsum is simply
                        dummy text of the printing
                        and typesetting industry. </div>

                </div>

                <div className='innerdiv2'>
                    <h2>Hello world</h2>

                </div>

            </div>
            {/* inner div2  */}
            <div className='col-8  iner2'  >

                <div className='row'>
                    {/* div1       */}
                    <div className='col-6'><div />
                        <div className='su1'>Create your account</div>
                        <div className='su2'>We need some details to setup your account</div>
                        <input type="file" accept="image/png, image/gif, image/jpeg" placeholder='Uploadimages' className='su3' />
                        <div className='su4'>First Name*</div>
                        <input type="text" placeholder='Typeing...' className='su5' />
                        <div className='su6'>Email</div>
                        <input type="text" placeholdar="Enter Your email" className='su7' />
                        <div className='su88'>password</div>
                        <input type="password" placeholder='Enter your password' className='su8' />
                        <label for="birthday" className='su9'>Date of Birth</label>


                       
    <Datepicker/>


                        {/* <input type="date" id="birthday" name="birthday" className='su10'/><br/> */}
                        <input type="radio" id='agree' className='su11' /> <label className='su12' for="agree">I agree to the tearms of services</label>
                        <br/>
                        <button className='su13'>Get Started</button>
                    </div>
                    {/* div2     */}
                    <div className='col-6'>

                        <div className='su14'>Last name</div>
                        <input placeholder='Enter Your name' className='su15' />
                        <div className='su16'>phone</div>
                        <input placeholder='Enter Your Phone number' className='su17' />
                        <div className='su18'>comfirm password</div>
                        <input placeholder='Enter Your password' className='su19' />
                        <input type="radio" id="male" name="fav_language" value="HTML" className='su20' />
                        <label for="male" className='su21'>Male</label><br />
                        <input type="radio" id="female" name="fav_language" value="CSS" className='su22' />
                        <label for="female" className='su23'>Female</label><br />


                    </div>


                </div>
            </div>
        </div>

    </div>


    )
}
