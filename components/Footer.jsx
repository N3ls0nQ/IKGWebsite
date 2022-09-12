import React, { Component } from 'react'

export class Footer extends Component {
    
  render() {

    return (
      <footer className=' bg-zinc-800 text-neutral-500'>
        <div className='md:flex md:justify-center items-start sm:px-12 px-4 pt-7'>
            {/* <div className='hidden md:flex flex-col justify-around items-start m-[30px]'>
                <img className='min-w-[250px] min-h-[250px]' src="../assets/images/IKG-Logo.jpg" alt="logo"/>
            </div> */}
            <div className='max-w-[400px] flex flex-col justify-around items-start m-[30px] text-top'>
                <h1 className='text-white text-2xl font-bold'>Kontakt</h1>
                <li className='text-neutral-500 list-none text-lg font-medium'>Immanuel-Kant-Gymnasium</li>
                <li className='text-neutral-500 list-none text-lg font-medium'>Anemonenstraße 15</li>
                <li className='text-neutral-500 list-none text-lg font-medium'>70771 Leinfelden-Echterdingen</li>
                <br />
                <li className='text-neutral-500 list-none text-lg font-medium'>Fon: <a className='text-neutral-400 ease-in duration-150 hover:text-sky-600' href="tel:0711 1600-500">0711 1600-500</a> oder  <a className='text-neutral-400 ease-in duration-150 hover:text-sky-600' href="tel:0711 1600-521">0711 1600-521</a> </li>
                <li className='text-neutral-500 list-none text-lg font-medium'>Fax: 0711 1600-503</li>
                <li className='text-neutral-500 list-none text-lg font-medium'>E-Mail: <a  href="mailto:sekretariat.ikg@le-mail.de" className='text-neutral-400 ease-in duration-150 hover:text-sky-600'>sekretariat.ikg@le-mail.de</a> </li>
            </div>
            <div className='max-w-[400px] flex flex-col justify-around items-start m-[30px]'>
                <h1 className='text-white text-2xl font-bold'>Sekretariat</h1>
                <li className='text-neutral-400 list-none text-lg font-medium'><strong>Montag - Donnerstag</strong> </li>
                <li className='text-neutral-500 list-none text-lg font-medium'>08:00 - 13:00 Uhr</li>
                <li className='text-neutral-500 list-none text-lg font-medium'>13:30 - 15:00 Uhr</li>
                <br/>
                <li className='text-neutral-400 list-none text-lg font-medium'><strong>Freitag</strong></li>
                <li className='text-neutral-500 list-none text-lg font-medium'>08:00 - 13:30 Uhr</li>
                <br/>
                <li className='text-neutral-500 list-none text-lg font-medium'><p>Darüber hinaus sind wir telefonisch, z.B. für <strong className='text-neutral-400'>Krankmeldungen von Schülern </strong> oder allgemeine Anfragen, auch außerhalb dieser Sprechzeiten gerne für Sie da. </p></li>
            </div>
            <div className='m-[30px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.3358526364514!2d9.133545716176972!3d48.69906131986511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dd3f7cb806e3%3A0x3ef2406cb6963bcb!2sImmanuel-Kant-Gymnasium%20Leinfelden-Echterdingen!5e0!3m2!1sde!2sde!4v1652897243687!5m2!1sde!2sde" className='hidden md:flex w-[300px] md:h-[300px] ' style={{border: "0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className='flex w-full flex-col p-12'>
          <hr className='border-none bg-neutral-600 h-0.5 rounded-full'/>
          <h1 className='self-end my-3'>© 2022 Immanuel-Kant-Gymnasium Leinfelden Echterdingen</h1>
        </div>
    </footer>
    )
  }
}

export default Footer