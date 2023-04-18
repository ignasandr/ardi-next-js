import Image from "next/image";
import styles from './header.module.css'
import Line from './Line'
import logo from "../../public/images/logo.svg";


export default function Header() {
  return (
        <div className={styles.header}>
            <div className="m-6 w-36">
                <a href="/">
                    <Image src={logo} alt="ardi logo" priority/>
                </a>
            </div>
            <div className="line">
                <Line />
            </div>
            <nav className={styles.nav}>
                <a href="/catalogs">Catalogs</a>
            </nav>
        </div>
  )
}

{/* <script lang="ts">
  import { hover } from "$lib/stores";
  import Line from "$lib/components/common/Line.svelte";
  export let menuItems: { catalog: { title: string; slug: string } }[];
</script> */}

                // <a href="/catalogs/{item.catalog.slug}"
                //     on:mouseenter={() => hover.set(i + 1)}>{item.catalog.title}</a
                // >