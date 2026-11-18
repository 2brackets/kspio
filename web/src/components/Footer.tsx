import { LuGlobe, LuGithub, LuInstagram } from 'react-icons/lu'

function Footer() {
    return (
        <footer className="brand-surface flex flex-col items-center justify-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
        <aside className="flex items-center gap-3">
          <img src="/2brackets.png" alt="2brackets" className="h-10 w-auto" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex items-center gap-2">
            <a
                href="https://2brackets.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="btn btn-square btn-ghost brand-icon-button">
                <LuGlobe className="h-6 w-6" />
            </a>
            <a
                href="https://github.com/2brackets"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="btn btn-square btn-ghost brand-icon-button">
                <LuGithub className="h-6 w-6" />
            </a>
            <a
                href="https://instagram.com/2brackets"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="btn btn-square btn-ghost brand-icon-button">
                <LuInstagram className="h-6 w-6" />
            </a>
          </div>
        </nav>
    </footer>
);}
    export default Footer;