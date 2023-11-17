import './Header.css'

export default function Header(){
    return(
        <>
            <header>
                <div className="headerContainer">
                    <div className="logo">
                        <img
                        src="https://static.wixstatic.com/media/900907_619c88cbc2164d95aa9122b91f37971f~mv2.png/v1/fill/w_188,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rey%20das%20Cadeiras%20-%20Marca%20Mais%20pequena_pn.png"
                        alt=""
                        />
                    </div>
                    
                    
                    <a href="https://api.whatsapp.com/send?phone=558391627839">
                        <img className='social-image' src="../src/assets/images/whatsapp-logo.png" alt="zap-logo" />
                    </a>
                </div>
            </header>
        </>
    )
}