import React from 'react'
import './MobilePhone.css'

function MobilePhone() {

  const data= {
    release_date : '2023',
    dimensions : '209g, 9.9mm thickness',
    os : 'Android 12',
    storage : '128GB storage, microSD',
    screen : {size : '6.8',dimensions : '1920*1080'},
    camera : {nb_pixels : '13', quality :'1080px'},
    ram : {nb_ram :'8GB', manufacturer:'Helio '},
    battery : {capacity:'4500', type:'Li-Po'},
    device_name :'Honor X8a',
    image_url: 'https://fdn2.gsmarena.com/vv/bigpic/honor-x8a.jpg',
  
  }

  return (
    <div className='container'>
      <div className='sub_container'> <div className='container_header'>
        <div className='device_title'>
            {data.device_name}
        </div>
      </div>
      <div className='container_body'>
      <div className='device_image'>
        <img className='device_photo' src={data.image_url} alt={data.device_name}/>
      </div>
      <div className='device_specs'>
      <div className='specs_details'>
        <div className='specs_line'>
          <img className='icon' src='/icons/cpu.png' alt=''/>
          <div className='margin_left_1'>{data.release_date}</div>
        </div>
        <div className='specs_line'>
        <img className='icon' src='/icons/cpu.png' alt=''/>
          <div className='margin_left_1'>{data.dimensions}</div>
        </div>
        <div className='specs_line'>
        <img className='icon' src='/icons/cpu.png' alt=''/>
          <div className='margin_left_1'>{data.os}</div>

        </div>
        <div className='specs_line'>
        <img className='icon' src='/icons/cpu.png' alt=''/>
          <div className='margin_left_1'>{data.storage}</div>
        </div>
      </div>
      <div className='camera_screen'>
      <div className='screen'>
      <img className='icon' src='/icons/cpu.png' alt=''/>
        <div>{data.screen.size}</div>
        <div>{data.screen.dimensions}</div>
      </div>
      <div className='camera'>
      <img className='icon' src='/icons/cpu.png' alt=''/>
        <div>{data.camera.nb_pixels}</div>
        <div>{data.camera.quality}</div>
      </div>
        
      </div>


      </div>
      <div className='HIts_ram'>
      <div className='ram'>
        <img className='icon' src='/icons/cpu.png' alt=''/>
        <div>{data.ram.nb_ram}</div>
        <div>{data.ram.manufacturer}</div>
        </div>
      </div>
      <div className='battery'>
      <img className='icon' src='/icons/cpu.png' alt=''/>
        <div>{data.battery.capacity}</div>
        <div>{data.battery.type}</div>
      </div>




      </div></div>
      


        
        </div>
  )
}

export default MobilePhone
