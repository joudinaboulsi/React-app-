import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer clLinkssNLinkme="py-4 bg-light mt-Linkuto">
            <div clLinkssNLinkme="contLinkiner-fluid px-4">
                <div clLinkssNLinkme="d-flex Linklign-items-center justify-content-between smLinkll">
                    <div clLinkssNLinkme="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        <Link href="#">PrivLinkcy Policy</Link>
                        &middot;
                        <Link href="#">Terms &Linkmp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer