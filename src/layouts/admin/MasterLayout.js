import React from 'react'
import '../../assets/admin/css/styles.css'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                    <div id="layoutSidenav_content">
                        <main>
                            hello
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterLayout