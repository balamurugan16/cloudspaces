import { Badge, Button, Dropdown, Indicator, Navbar } from "react-daisyui"

function Header() {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-100 shadow-xl rounded-box">
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" shape="circle" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="menu-compact w-52">
              <Dropdown.Item>Homepage</Dropdown.Item>
              <Dropdown.Item>Portfolio</Dropdown.Item>
              <Dropdown.Item>About</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center>
          <Button color="ghost" className="normal-case text-xl">
            Cloudspaces
          </Button>
        </Navbar.Center>
        <Navbar.End className="navbar-end">
          <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </Button>
            <Dropdown.Menu className="w-52 menu-compact">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
    </div>
  )
}

export default Header