import './page.scss'

import Logo from './img/logo.png'
import Menu from './img/menu.png'

import SectOneCard from './sect_one_card'
import Image1_1 from './img/1-1.png'
import Image1_2 from './img/1-2.png'
import Image1_3 from './img/1-3.png'

export default function Page(){
    return(
        <>
            <header>
                <nav>
                    <img src={Logo} alt="" />
                    <img src={Menu} alt="" />
                </nav>
                <div>
                    <div>
                        <div>
                            <p>New Automation
                            Tool for Your Home</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                        </div>
                        <div>
                            <button type="button">See Our Project</button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className='sect_one'>
                    <div>
                        <div className='left'>
                            <div className='title'>
                                <p> 
                                    What we do to help
                                    our client grow in
                                    digital era,
                                </p>
                            </div>
                            <SectOneCard 
                            img={Image1_1} 
                            title={'Make Your business To Be Better Famous In Internet'}
                            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            x={'26'}
                            />
                        </div>
                        <div className='right'>
                            <SectOneCard 
                                img={Image1_2} 
                                title={'Bring Technology To Your Comfrotable Home'}
                                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                x={'30'}
                                y={'-70'}
                            />
                            <SectOneCard 
                                img={Image1_3} 
                                title={'Build Your Digital Product That Suitable For Your Need'}
                                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                x={'52'}
                            />
                        </div>
                    </div>
                </section>
                <section className='sect_two'>
                    <div className='con'>
                        <div className='top'>
                            <div className='title'>
                                <p>Our Finished
                                Project</p>
                            </div>
                            <div className='desc'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className='bot'>
                            <div className='top'>
                                <div>
                                    <p>Smart Home Installation</p>
                                    <p>In Muarakana Housing Estate</p>
                                </div>
                            </div>
                            <div className='bot'>
                                <div className='left'>
                                    <div>
                                        <p>Sparklite App</p>
                                        <p>Marketplace</p> 
                                    </div>
                                </div>
                                <div className='right'>
                                    <div>
                                        <p>Car-Rapetition App</p>
                                        <p>Board</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}