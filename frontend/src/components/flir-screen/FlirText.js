import React from 'react';
import Tabs from '../2/Tabs';
import {Row, Col, Tab, ListGroup} from 'react-bootstrap';
import sales from '../../images/bg-graphics/screen-flir/flir-sharp.png'
import maintanence from '../../images/bg-graphics/screen-flir/sales1.png'
import accessories from '../../images/bg-graphics/screen-flir/acessories.png'
import purchase from '../../images/bg-graphics/screen-flir/flirinventory.png'
import {LinkContainer} from "react-router-bootstrap";



const FlirText = () => {
    return (
        <>
            <Tabs

                                    // TAB 1
                tabOne={' Maintenance:'}
                tabOneInfo={'Bison Aviation provides full maintenance and support for all airborne EO/IR and FLIR systems, including legacy models such as the FLIR Series 2000, 3000, 4000, Ultra 6000, Ultra 7000, Ultra 7500, Ultra 8000, Ultra 8500 and SAFIRE series. We also support the Inframetrics Mk I, Mk II, and Mk III systems, along with all systems from Polytech, SweSystems, Agema, Wescam, and Gyrocam. Our support services are backed by the world\'s largest inventory of legacy FLIR & EO/IR system parts, comprised of OEM components, after-market accessories, and of course, complete flight-ready systems.\n' +
                '\n' +
                'By performing component level repairs, Bison Aviation is able to save customers thousands of dollars. Rental and loaner systems are available in many cases where downtime is simply not an option. Customers ranging from private operators and local municipalities to federal agencies and military forces throughout the world trust Bison Aviation to keep their FLIR / TIS / EO/IR equipment operating in top condition.\n' +
                '\n' +
                'Bison Aviation is the ONLY repair center capable of repairing and servicing the mechanical coolers found in may FLIR systems. Our cryocooler overhaul capabilities include models manufactured by Hughes Aircraft Company (including the model 7024H), Carleton Life Support, Cobham, Kaltar, Ricor and many others!\n' +
                '\n' +
                'Whether your system is in need of a simple "tune-up" or you require a complete IDDCA overhaul, Bison Aviation has the inventory and expertise to meet your needs and keep your mission on course.'}
                tabOneImg={maintanence}

                                    // TAB 2
                twoTrue={true}
                tabTwo={'System Sales:'}
                tabTwoInfo={'Bison Aviation maintains the world\'s largest inventory of legacy airborne FLIR & EO/IR camera equipment and thermography systems. On average, Bison Aviation maintains between sixty and one hundred flight-ready systems in our inventory. All of our flight-ready systems are thoroughly tested and overhauled in-house in our FLIR lab prior to being offered for sale. Complete turn-key systems are available for lease or purchase, as well as major LRUs, components, and subassemblies. Overhauled systems come backed by our one-year parts & labor warranty.\n' +
                '\n' +
                'Available systems typically include systems from major manufacturers such as FLIR Systems, Inc., including the Series 2000, Mk II, Ultra 6000, Ultra 7000, Ultra 8000 and SAFIRE series and systems from L3 Wescam, including the M12 (12DS200, 12TS200, and 12TS650), M16 and MX-15 series. We also occasionally have systems from PolyTech, SweSystems, Inframetrics, Lockheed Martin GyroCam, as well as others. Standard definition systems are always in stock; however, high definition systems typically are sold shortly after overhaul due to demand. Complete systems generally carry a one-week lead; however, same-day dispatch is available on some systems for agencies with an urgent need, or who are responding to disaster situations.\n' +
                '\n' +
                'If you\'re looking for any type of airborne EO/IR or FLIR equipment, Bison Aviation should be your first call. We also have the capability to build bespoke stabilized camera systems designed to customers specifications, so if you are looking for something that isn\'t available on the commercial market, chances are we can build it. Sensor options include radiometric infrared, optical gas imaging, daylight resolutions up to 8k, and even ultraviolet corona.'}
                tabTwoImg={sales}

                                    // TAB 3
                threeTrue={true}
                tabThree={'Airborne ISR Accessories:'}
                tabThreeInfo={'In addition to our parts and flight-ready systems, Bison Aviation maintains an inventory of airborne ISR accessory equipment such as mounting kits, monitors, ortho camera pods, mapping systems, microwave downlinks and field support kits. If you\'re looking for a hard-to-find piece of ISR equipment, please give us a call.'}
                tabThreeImg={accessories}

                                    // TAB 4
                fourTrue={true}
                tabFour={'Surplus Equipment Purchasing:'}
                tabFourInfo={'Bison Aviation is always in the market for used airborne FLIR & EO/IR systems, along with related mission support equipment. If you have equipment taking up space in the back of your hangar, or if your agency is ready to upgrade and doesn\'t know what to do with its old equipment, contact Bison Aviation. We will provide you with a firm offer to purchase your equipment and will even work directly with manufacturers to help offset the cost of your new system, rather than allowing the value of the surplus equipment to simply be dropped back into the general fund.'}
                tabFourImg={purchase}

                                    // TAB 5
                fiveTrue={false}
            />

        <Row className='mt-5'>
            <Col xs={12} >
                <h3 className='FlirScreen_Title'>If you're looking for FLIR parts, you've come to the right place!</h3>
            </Col>
            <Col xs={12} className='text-white'>
                <p>Bison Aviation is proud to stock the largest in-house inventory of legacy FLIR and EO/IR system parts in the world. Below is a small sample of our airborne EO/IR equipment inventory. If you don't see the part you need, please contact us; chances are we have it in stock.</p>
            </Col>
            <Col xs={12}>
                <h5 className='FlirScreen_Title'>Surplus Equipment Purchasing</h5>
            </Col>
            <Col xs={12} className='text-white'>
                <p>
                    Bison Aviation is always in the market for used airborne FLIR & EO/IR systems, along with related mission support equipment. If you have equipment taking up space in the back of your hangar, or if your agency is ready to upgrade and doesn't know what to do with its old equipment, contact Bison Aviation. We will provide you with a firm offer to purchase your equipment and will even work directly with manufacturers to help offset the cost of your new system, rather than allowing the value of the surplus equipment to simply be dropped back into the general fund.
                </p>
            </Col>
            <Col xs={12}>
                <LinkContainer to='/flir-terms'>
                            <span className='global_blue global_cursor Flir_hover-terms'>
                              FLIR TERMS AND CONDITIONS
                            </span>
                </LinkContainer>
            </Col>
        </Row>



        </>
    )
};

export default FlirText