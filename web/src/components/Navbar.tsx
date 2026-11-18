import { LuMenu, LuSun, LuMoon, LuSettings, LuUser } from 'react-icons/lu'

function Navbar() {
  return (
    <div className="navbar brand-surface shadow-sm">
        <div className="flex-1 pl-4 text-left">
            <a className="inline-flex items-center gap-2 text-xl font-bold">
                <img src="/logo.png" 
                    alt="Sendhush" 
                    className="h-10 w-auto"/>
            </a>
        </div>      
        <div className="flex flex-none items-center gap-4 pr-4">
            <div className="dropdown dropdown-end">
                <button type="button" tabIndex={0} className="btn btn-square brand-icon-button" aria-label="Meny" aria-haspopup="menu">
                    <LuMenu className="h-6 w-6"/>
                </button>
                <ul tabIndex={0} className="menu dropdown-content navbar-menu z-10 mt-3 w-52 rounded-box p-2 shadow" role="menu">
                    <li role="none" className="navbar-theme-row">
                        <label className="flex cursor-pointer items-center justify-end gap-1 navbar-theme-toggle">
                            <LuMoon className="h-4 w-4" />
                            <input type="checkbox" value="light" className="toggle toggle-xs theme-controller" />
                            <LuSun className="h-4 w-4" />
                        </label>
                    </li>
                    <li role="none">
                        <button type="button" className="navbar-menu-item" role="menuitem">
                            <LuSettings className="h-5 w-5" aria-hidden="true" />
                            Settings
                        </button>
                    </li>
                    <li role="none">
                        <button type="button" className="navbar-menu-item" role="menuitem">
                            <LuUser className="h-5 w-5" aria-hidden="true"/>
                            User
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Navbar;