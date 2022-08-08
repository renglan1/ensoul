import React from 'react'
import Wallpaper from '../components/Wallpaper';
import Header from '../components/Header';
import PropTypes from 'prop-types'

type DefaultLayoutProps = {
  expanded: boolean,
  children: React.ReactNode,
}

const DefaultLayout = ({ expanded, children }: DefaultLayoutProps) => {
  return (
    <>
      <Header expanded={expanded}/>
      <Wallpaper />
      <main>
        {children}
      </main>
    </>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
