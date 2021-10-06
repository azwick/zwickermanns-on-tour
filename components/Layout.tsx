import React, { ReactNode } from 'react'

import Link from 'next/link'
import menu from '../content/menu.json'

type MenuItem = {
  label: string
  visible: boolean
  path: string
}

const { menu_item }: { menu_item: MenuItem[] } = menu

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <div className="responsive-margin responsive-padding">
          <Link href="/" passHref>
            <a href="#!" className="logo">
              MyFirstBlog
            </a>
          </Link>
          {menu_item
            .filter((item) => item.visible)
            .map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <a href="#!" className="button">
                  {item.label}
                </a>
              </Link>
            ))}
        </div>
      </header>
      <main>
        <div className="responsive-margin responsive-padding">{children}</div>
      </main>
      <footer>
        <div className="responsive-margin responsive-padding">
          <p>
            <span>Created by </span>
            Anne
          </p>
        </div>
      </footer>
    </>
  )
}