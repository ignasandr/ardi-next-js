import Image from "next/image";
import logo from "../../public/images/logo.svg";


export default function Header() {
  return (
        <div>
            <div className="m-6 w-36">
                <a href="/">
                    <Image src={logo} alt="ardi logo" priority/>
                </a>
            </div>
            <nav className="">
            </nav>
        </div>
  )
}