import React from 'react'
import "../App.css"

export default function ClientSection() {
  return (
    <div>
        <section id="client-section">
       <h1 className="h-primary-center">Our Clients</h1>
       <div id="clients">
           <div className="client-item">
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/1200px-Chanel_logo_interlocking_cs.svg.png" alt="Our Client"/>
           </div>
           <div className="client-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQPwjH7u4cBLdM8wtdIF0rg7ls8Vli2nsV9odCaZ7RqgXDSaY_zaHbkPiMGuZhXGGB7o&usqp=CAU" alt="Our Client"/>
        </div>
        <div className="client-item">
            <img src="https://s3images.coroflot.com/user_files/individual_files/723615_dhooks0vasdxe8nc74sr8nz96.jpg" alt="Our Client"/>
        </div>
        <div className="client-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqewpeMgRI4hw9QEPZ52bdoMeIkWnQz1sHczPlu6dBR1_GB8PX7oZScKnWBo0YvQ4AVw&usqp=CAU" alt="Our Client"/>
        </div>
        <div className="client-item">
            <img src="https://qph.fs.quoracdn.net/main-qimg-c6b9640c9892a66f82ff7a7c824425b4-c" alt="Our Client"/>
        </div>
       </div>
   </section>
    </div>
  )
}
