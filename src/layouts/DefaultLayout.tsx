import React from 'react'
import Wallpaper from 'components/Wallpaper';
import Header from 'components/Header';
import PropTypes from 'prop-types'
import './styles/default-layout.scss';

type DefaultLayoutProps = {
  expanded?: boolean,
  children: React.ReactNode,
}

const DefaultLayout = ({ expanded, children }: DefaultLayoutProps) => {
  return (
    <div className="default-layout">
      <Header expanded={expanded}/>
      <Wallpaper name="alight"/>
      <main>
        {children}
      </main>
    </div>
  )
}

DefaultLayout.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node,
}

export default DefaultLayout
