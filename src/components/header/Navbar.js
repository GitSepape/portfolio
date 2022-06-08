import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./HeaderStyles";

function Navbar ({ open }) {
    return (
        <NavbarWrapper open={open}>
            <section className="header__desktop">
                <nav className="">
                    <ul className="header__text">
                        <li>
                            <Link to="/" className="header__text--content">
                                <svg width="9rem" height="4.8rem" viewBox="0 0 90 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2494 21.0383C11.6762 21.9705 10.7347 22.6177 9.42684 22.9769C10.7347 23.3382 11.6762 23.9833 12.2494 24.9166C12.8226 25.8489 13.1086 27.2164 13.1086 29.0163V35.3004C13.1086 36.4458 13.403 37.3215 13.9926 37.9275C14.5822 38.5326 15.4651 38.8352 16.6432 38.8352H17.3307V45.9538H14.1397C10.7347 45.9538 8.15702 45.1276 6.40667 43.475C4.65528 41.8224 3.7806 39.4567 3.7806 36.3809V28.7703C3.7806 28.0182 3.59128 27.4624 3.21569 27.1013C2.83803 26.7411 2.32352 26.5611 1.66907 26.5611H0V19.3929H1.66907C2.32352 19.3929 2.83803 19.2138 3.21569 18.8527C3.59128 18.4935 3.7806 17.9369 3.7806 17.1835V9.57401C3.7806 6.49835 4.65528 4.13251 6.40667 2.47883C8.15702 0.826417 10.7347 0 14.1397 0H17.3307V7.1188H16.6432C15.4651 7.1188 14.5822 7.42222 13.9926 8.02735C13.403 8.63355 13.1086 9.50805 13.1086 10.6545V16.9386C13.1086 18.7384 12.8226 20.1049 12.2494 21.0383Z"/>
                                    <path d="M22.6933 33.383C20.5324 32.8756 18.7976 32.213 17.4886 31.3949L20.2866 25.0118C21.4977 25.7651 22.9382 26.3619 24.6074 26.8034C26.2765 27.246 27.9301 27.4662 29.5662 27.4662C31.0718 27.4662 32.145 27.3117 32.7829 27C33.421 26.6902 33.7389 26.2396 33.7389 25.65C33.7389 25.0612 33.354 24.6435 32.5854 24.3986C31.8167 24.1527 30.5983 23.9161 28.9283 23.6865C26.8003 23.4252 24.9921 23.0816 23.5031 22.6554C22.0133 22.2305 20.729 21.4442 19.6485 20.2991C18.5681 19.1537 18.0289 17.5494 18.0289 15.4874C18.0289 13.7863 18.5361 12.2707 19.5509 10.9453C20.5654 9.61993 22.0461 8.5733 23.994 7.80369C25.9409 7.03493 28.2738 6.65002 30.9905 6.65002C32.9208 6.65002 34.8368 6.84556 36.7354 7.23877C38.6319 7.63176 40.2206 8.1886 41.4967 8.90778L38.6987 15.2425C36.3422 13.9335 33.7883 13.278 31.0388 13.278C29.5662 13.278 28.4868 13.4499 27.7995 13.7935C27.112 14.1374 26.7684 14.5869 26.7684 15.1436C26.7684 15.7651 27.1439 16.1994 27.8972 16.4443C28.6493 16.6902 29.8934 16.9434 31.6294 17.2058C33.8202 17.533 35.6375 17.9096 37.078 18.3345C38.5187 18.7607 39.7711 19.5376 40.8349 20.6674C41.898 21.7962 42.4299 23.3758 42.4299 25.405C42.4299 27.0741 41.9226 28.5713 40.9081 29.8967C39.8934 31.2221 38.3963 32.2624 36.4154 33.0156C34.4345 33.7677 32.0544 34.1443 29.273 34.1443C27.0452 34.1443 24.8534 33.8903 22.6933 33.383Z"/>
                                    <path d="M61.1678 29.8099C62.2164 28.6811 62.7391 27.1336 62.7391 25.1701C62.7391 23.2068 62.2164 21.6602 61.1678 20.5303C60.1203 19.4016 58.7796 18.8364 57.1423 18.8364C55.5052 18.8364 54.1633 19.4016 53.1168 20.5303C52.0683 21.6602 51.5455 23.2068 51.5455 25.1701C51.5455 27.1336 52.0683 28.6811 53.1168 29.8099C54.1633 30.9389 55.5052 31.5038 57.1423 31.5038C58.7796 31.5038 60.1203 30.9389 61.1678 29.8099ZM65.7099 13.1173C67.6898 14.246 69.2611 15.8504 70.4229 17.929C71.5846 20.0076 72.1659 22.4206 72.1659 25.1701C72.1659 27.9196 71.5846 30.3337 70.4229 32.4113C69.2611 34.4909 67.6898 36.0942 65.7099 37.224C63.7292 38.3528 61.5291 38.9179 59.1069 38.9179C55.9972 38.9179 53.5254 37.9845 51.6927 36.1189V48H42.3647V11.8649H51.2502V14.5156C52.9851 12.4536 55.604 11.4236 59.1069 11.4236C61.5291 11.4236 63.7292 11.9874 65.7099 13.1173Z"/>
                                    <path d="M89.3653 19.3933V26.5615H87.7457C87.0912 26.5615 86.5746 26.7415 86.199 27.1017C85.8224 27.4617 85.6352 28.0185 85.6352 28.7707V36.3812C85.6352 39.4571 84.7585 41.8217 83.008 43.4753C81.2567 45.128 78.6789 45.9542 75.276 45.9542H72.0346V38.8356H72.7714C73.9506 38.8356 74.8337 38.533 75.4222 37.9268C76.0107 37.3208 76.3071 36.4461 76.3071 35.3007V29.0167C76.3071 27.2168 76.5931 25.8493 77.1663 24.9171C77.7374 23.9837 78.6789 23.3375 79.989 22.9773C78.6789 22.6173 77.7374 21.9711 77.1663 21.0387C76.5931 20.1054 76.3071 18.7388 76.3071 16.9381V10.6538C76.3071 9.50863 76.0107 8.63285 75.4222 8.02772C74.8337 7.42173 73.9506 7.11917 72.7714 7.11917H72.0346V0.000366211H75.276C78.6789 0.000366211 81.2567 0.826783 83.008 2.4794C84.7585 4.13181 85.6352 6.49765 85.6352 9.57437V17.184C85.6352 17.9373 85.8224 18.4928 86.199 18.8531C86.5746 19.2141 87.0912 19.3933 87.7457 19.3933H89.3653Z"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="menu--off">
                            <Link to="/proyectos" className="header__text--content">
                                <span className="header__text--span">Proyectos</span>
                            </Link>
                        </li>
                        <li className="menu--off">
                            <a href="mailto:sergiopascual96@gmail.com" className="header__text--content">
                                <span className="header__text--span">Contacto</span>
                            </a>
                        </li>
                        <li className="menu--off">
                            <Link to="/" className="header__text--content">
                                <span className="header__text--span">En/Es</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="menu--off">
                    <ul className="header__icons">
                        <li className="header__icons--svg">
                            <a href="https://github.com/GitSepape" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="header__icons--svg">
                            <a href="https://www.linkedin.com/in/sergio-pascual-2a1230144/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="header__icons--svg-last">
                            <a href="https://twitter.com/xSesale" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="">
                    <ul className="header__mobile">
                        <li className="menu--on">
                            <Link to="/proyectos" className="header__mobile--content">
                                <span className="header__mobile--span">Proyectos</span>
                            </Link>
                        </li>
                        <li className="menu--on">
                            <a href="mailto:sergiopascual96@gmail.com" className="header__mobile--content">
                                <span className="header__mobile--span">Contacto</span>
                            </a>
                        </li>
                        <li className="menu--on">
                            <Link to="/" className="header__mobile--content">
                                <span className="header__mobile--span">En/Es</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="menu--on">
                    <ul className="header__icons">
                        <li className="header__icons--svg">
                            <a href="https://github.com/GitSepape" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="header__icons--svg">
                            <a href="https://www.linkedin.com/in/sergio-pascual-2a1230144/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="header__icons--svg-last">
                            <a href="https://twitter.com/xSesale" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </NavbarWrapper>
    )
}

export default Navbar;