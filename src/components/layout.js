import React from 'react'
import layoutStyle from './layout.module.css'

export default ({children}) => <div className={layoutStyle.content}>{children}</div>