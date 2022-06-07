import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface ITabs {
  title: string;
  content: React.ReactNode;
}

export type TabsProps = {
  tabs: ITabs[];
};

function Tabs({ tabs }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab: ITabs, index) => {
            if (index === activeTab) {
              return (
                <li
                  key={tab.title}
                  className="film-nav__item film-nav__item--active"
                >
                  <Link
                    to="/"
                    onClick={(evt) => evt.preventDefault()}
                    className="film-nav__link"
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={tab.title}
                onClick={() => setActiveTab(index)}
                className="film-nav__item"
              >
                <Link
                  to="/"
                  onClick={(evt) => evt.preventDefault()}
                  className="film-nav__link"
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {tabs[activeTab].content}
    </>
  );
}

export default Tabs;
