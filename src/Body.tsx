import React from 'react'
import "./Body.css"
// import Landing from "/assets/illustration1.png"
// import Role from "/assets/illustrations2.png"
// import infoicon from "/assets/ic1.png"
const Body = () => {
    return (
        <>
        <div className="Body" >

       {/* Part 1 with image and join family  - Body Item1*/}

            <div className="Body_Item1">
                <div className="Image_Container">
                <img src={'/assets/illustration1.png'} alt="landing" />
                </div>

                <div className="Landing_text">
                    <div className="Join">
                        <b>Join the</b> Family
                    </div>
                    <div className="ambassador">
                        STUDENT <b>AMBASSADOR</b>
                        <br/>
                        <div style={{paddingTop:"6px"}} >Lorem ipsum dolor sit.</div>
                    </div>
                    <div className="Register_Container">
                        <div className="button" id='Bflex'>REGISTER</div>
                    </div>
                </div>
            </div>

            <div className="Body_Item2">
                <div  className='Left'>
                    <b>Role</b> of a Student Ambassador 
                </div>
                <div className='Acenter'>
                <div className="Role_details">
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis at similique perferendis tempora recusandae nam, accusantium eius ducimus itaque numquam reiciendis unde inventore libero consequatur expedita doloremque voluptatem tenetur vel autem ea blanditiis minus ad! Dicta quisquam quas sint sit, nam perferendis veniam molestiae modi fuga accusamus recusandae animi. Numquam minus ratione odio magni incidunt deleniti animi eaque maiores corporis, necessitatibus aperiam sit velit, perferendis dolor veniam? Veritatis laudantium velit voluptates illum ducimus odit deleniti nisi impedit, officia autem.
                    </div>
                    <div className="Role_Image">
                        <img src={'/assets/illustration2.png'} alt="Role" />
                    </div>
                </div>
                
                </div>
            </div>
            <div className="Body_Item3">
            <div  id='Center'>
                <b>Responsibilities</b> and specific duties
            </div>
            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>

            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>

            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>

            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>

            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>

            <div className="information">
                <div className="icon">
                    <img src={'/assets/ic1.png'} alt="icon" />
                </div>
                <div className="info_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet incidunt obcaecati minus, neque tempora nulla eum sequi quia sint.</div>
            </div>
            </div>
            <br /> <br /> <br />
        </div>

</>
    )
}

export default Body
