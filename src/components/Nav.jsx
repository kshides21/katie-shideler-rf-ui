import { useEffect, useRef, useState } from 'react';
import top from '../assets/Top.png';

const attendeePages = ['attendees', 'attendee-types', 'packages', 'reg-codes', 'discounts'];

const Nav = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const attendeesOpen = attendeePages.includes(currentPage);
  const attendeeLinks = [
    { id: 'attendees', label: 'Attendees' },
    { id: 'attendee-types', label: 'Attendee types' },
    { id: 'packages', label: 'Packages' },
    { id: 'reg-codes', label: 'Reg codes' },
    { id: 'discounts', label: 'Discounts' },
  ];
  const mainLinks = [
    { id: 'guide', label: 'Guide' },
    { id: 'attendees', label: 'Attendees' },
    { id: 'content', label: 'Content' },
    { id: 'exhibitors', label: 'Exhibitors' },
  ];

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        className={`nav__toggle${isOpen ? ' nav__toggle--open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        ref={navRef}
        id="main-navigation"
        className={`sidebar${isOpen ? ' sidebar--open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="nav__brand-rail">
          <div className="nav__brand-rail-inner">
            <a
              className="nav__brand"
              href="#/guide"
              aria-label="RainFocus home"
              onClick={closeMenu}
            >
              <img src={top} alt="RainFocus" />
            </a>
          </div>
        </div>

        <div className="nav__panel">
          <div
            className="nav__user-avatar"
            role="img"
            aria-label="Signed in as Katie Shideler"
            data-tooltip="Signed in as Katie Shideler"
          >
            KS
          </div>
          <div className="nav__event-details">
            <strong>RainFocus Summit</strong>
            <span>Lehi, UT · December 15th</span>
          </div>
          <div className="nav__search" aria-hidden="true">
            <span className="nav__search-icon" />
            <span>Search</span>
          </div>

          <ul className={`nav__links${attendeesOpen ? ' nav__links--attendees-open' : ''}`}>
            {mainLinks.map(({ id, label }) => {
              const isAttendees = id === 'attendees';
              const isActive = isAttendees
                ? attendeesOpen
                : currentPage === id;

              return (
                <li className="nav__list" key={id}>
                  <a
                    className={`nav__link${isActive ? ' nav__link--active' : ''}`}
                    href={`#/${id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    aria-expanded={isAttendees ? attendeesOpen : undefined}
                  >
                    <span className="nav__item-icon" aria-hidden="true" />
                    {label}
                  </a>
                  {isAttendees && (
                    <ul className="nav__sub-links">
                      {attendeeLinks.map(({ id: subId, label: subLabel }) => (
                        <li className="nav__list_sub" key={subId}>
                          <a
                            className={`nav__link${currentPage === subId ? ' nav__link--sub-active' : ''}`}
                            href={`#/${subId}`}
                            onClick={closeMenu}
                            aria-current={currentPage === subId ? 'page' : undefined}
                          >
                            {subLabel}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
