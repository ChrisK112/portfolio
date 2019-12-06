import React from "react";

function Footer(){
    return(
        <footer>
            <div className = "footerLeft">
                
                <div style = {{paddingBottom:1+ 'em'}}>Icons by <a style = {{ color:'white'}} href = "https://icons8.com/">icons8 </a></div>
                <div>© 2019</div>
                <div>Developed by Krzysztof Kolodynski</div>
            </div>  

            <div className = "footerRight">
                <div> +44 7473647574 </div>
                <div> <a style = {{ color:'white'}} href="#/contact" > Contact</a></div>

                <div className = "footerLinks">

                    

                    <a href="https://github.com/ChrisK112" className = "footerLinkImage"> 
                        <img className = "footerIcon" src = "./icons/ghFooter.png" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/krzysztof-kolodynski-6aba8318a/" className = "footerLinkImage"> 
                        <img className = "footerIcon" src = "./icons/liFooter.png" />
                    </a>
                    
                    <a href="https://www.facebook.com/red.box.5" className = "footerLinkImage"> 
                        <img className = "footerIcon" src = "./icons/fbFooter.png" />
                    </a>

                </div>

             </div>  

         </footer>

        
    )
    
}

export default Footer; 