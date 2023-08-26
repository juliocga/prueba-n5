import Link from "next/link";
import { Content } from "./SideMenu.styles";

function SideMenu({showmenu = false, setShowMenu}) {
  const show = showmenu ? "show" : "noshow"

  const handleClick = () => {
    setShowMenu(false);
  }

  return (
    <Content $showmenu={show}>
      <Link href="/" onClick={handleClick}>Productos </Link>
      <Link href="/addItem" onClick={handleClick}>Add Item</Link>
      <Link href="/logicTest" onClick={handleClick}>Test de Lógica</Link>
    </Content>
  )
}

export default SideMenu;