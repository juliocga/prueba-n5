'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectProductsState } from "app/app/redux/Features/products/productsSlice";
import SideMenu from "../SideMenu/SideMenu";

function CustomNav() {

  const productsState = useSelector(selectProductsState);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 700px)");
    const updateViewport = (mql) => {
      setIsMobile(mql.matches);
    }
    updateViewport(mql);
    mql.addEventListener("change", updateViewport);
  }, [])

  return (
    <nav className="custom_nav">
      <div>
        {isMobile &&
          <>
            <button onClick={() => handleShowMenu()}>
              {showMenu ? (
                <Image src="/icons/close-circle.svg" alt="close-circle" width="30" height="30" />
              ) : (
                <Image data-cy="menu" src="/icons/menu.svg" alt="menu" width="30" height="30" />
              )}
            </button>
          </>
        }
        {!isMobile &&
          <>
            <Link href="/">
              Productos
            </Link>
            <Link href="/addItem">
              Add Item
            </Link>
            <Link href="/logicTest">
              Test de Lógica
            </Link>
          </>
        }
      </div>
      <SideMenu showmenu={showMenu} setShowMenu={setShowMenu} />
      <Link href={"/checkout"}>
        {productsState.length > 0 &&
          <div className="num_cart">{productsState.length}</div>
        }
        <Image src="/icons/shopping-cart.svg" alt="shopping cart" width="30" height="30" />
      </Link>
    </nav>
  )
}

export default CustomNav;