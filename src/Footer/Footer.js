import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© {currentYear} Copyright:
                <a href="/home"> Hacktoberfest App</a>
            </div>
        </footer>
    )
}
export default Footer