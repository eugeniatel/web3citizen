"use client"
import Link from 'next/link';
import { ReactNode, useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import './styles/globals.css'; 
import styles from './styles/Layout.module.css';
import Intro from './intro/Intro';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  

  const pathname = usePathname();
   
  const learnRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };



  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/' && window.scrollY < window.innerHeight) {
        setNavDark(false);
      } else {
        setNavDark(true);
      }
    };


    window.addEventListener('scroll', handleScroll);

   

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavDark(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const observerLight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavDark(false);
          }
        });
      },
      { threshold: 0.5 }
    );
   
    if (learnRef.current) observer.observe(learnRef.current);
    if (partnerRef.current) observer.observe(partnerRef.current);
    if (communityRef.current) observer.observe(communityRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (learnRef.current) observer.unobserve(learnRef.current);
      if (partnerRef.current) observer.unobserve(partnerRef.current);
      if (communityRef.current) observer.unobserve(communityRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, [pathname, learnRef, partnerRef, communityRef, teamRef]);

  useEffect(() => {
    if (pathname === '/') {
      setNavDark(false);
    } else {
      setNavDark(true);
    }
  }, [pathname]);



  return (
    <html lang="en">
      <Head>
        <title>Web3 Citizen</title>
        <meta name="description" content="A blog built with Next.js" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto+Mono:wght@300;400;700&display=swap" />
      </Head>
      <body>
     {pathname === '/' && !introFinished && <Intro onFinish={() => setIntroFinished(true)} />}
        <div className={`${styles.container} ${introFinished ? styles.visible : styles.hidden}`}>
        <header className={`${styles.header} ${navDark ? styles.navDark : styles.navLight}`}>
            <div className={styles.logo}>
            <Link href="/">
              <img src={navDark ? "/images/iso-nav.svg" : "/icons/logo-blue.svg"} alt="Logo" />
              </Link>
            </div>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <Link href="/research" className={styles.navItem}>
                RESEARCH 
                  {/*
                <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} 
                  alt="Arrow" 
                  className={`${styles.arrow} ${submenuOpen ? styles.active : ''}`} 
                  onClick={toggleSubmenu}
                />
  */}
              </Link>
              <Link href="/resources" className={styles.navItem}> RESOURCES 
                {/*
              <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} />
  */}
              </Link>
              <a href="#" className={styles.navItem}>NEWS 

               {/*
              <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} />
*/}
              </a>

              <Link href="/about">

             <div className={styles.navItem}>ABOUT</div>
             </Link>
              <a href="#" className={styles.navItem}>
 
                <img src={navDark ? "/icons/Search.svg" : "/icons/search-blue.svg"} alt="Search" className={styles.searchIcon} />
  
              </a>
              {submenuOpen && (
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter1" />
                    <label htmlFor="filter1">FILTER 1</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter2" />
                    <label htmlFor="filter2">FILTER 2</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter3" />
                    <label htmlFor="filter3">FILTER 3</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter4" />
                    <label htmlFor="filter4">FILTER 4</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter5" />
                    <label htmlFor="filter5">FILTER 5</label>
                  </div>
                </div>
              )}
                {menuOpen && (
                <a href="#" className={styles.navItem}>
                  SEARCH
                </a>
              )}
            </nav>
            <div className={`${styles.menuToggle}`} onClick={toggleMenu}>
  {menuOpen ? (
    <img src={navDark ? "/icons/cierre.svg" : "/icons/cruz-azul.svg"} alt="Close" className={styles.closeIcon} />
  ) : (
    <img src={navDark ? "/icons/mobile-blanco.svg" : "/icons/mobile-azul.svg"} alt="Menu" className={styles.menuIcon} />
  )}
</div>
          </header>
          <main className={styles.main}>
          <div ref={learnRef}>{children}</div>
            <div ref={partnerRef}></div>
            <div ref={communityRef}></div>
            <div ref={teamRef}></div>
          </main>
        </div>
      </body>
    </html>
  );
}
