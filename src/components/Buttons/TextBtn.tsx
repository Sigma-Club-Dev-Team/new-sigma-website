import React, { useState } from 'react'
import {Loading3QuartersOutlined, CaretLeftOutlined} from "@ant-design/icons"
import {Spin} from "antd"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./button.scss"

export default function TextBtn(
  {text, action, loading, pry, backArrow, frontArrow, fontSize, padding, disable, btnIcon, frontIcon, fontWeight} : 
  {text: string, action?: (e: React.MouseEvent<HTMLElement>)=> void, loading?: boolean, pry?: boolean, backArrow?: boolean, frontArrow?: boolean, fontSize?: string, fontWeight?: string, padding?: string, disable?: boolean, btnIcon?: React.ReactNode, frontIcon?: React.ReactNode}) {
    // Loading Spinner
    const antIcon = (
    <Loading3QuartersOutlined style={{ fontSize: "24px", color: pry ? "white" : "#327AEF" }} spin />
    );
  return (
    <button disabled={disable} className={`textBtn`} style={{
        padding: padding ? padding : '',
        fontSize: fontSize ? fontSize : "",
        cursor: disable ? 'no-drop' : '',
      }} onClick={action}>
        {backArrow && <ChevronLeft />}
        {btnIcon && <div style={{ height: '1rem', width: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{btnIcon}</div>}
        {loading ? <Spin indicator={antIcon} /> : <p style={{fontSize: fontSize ?? "", fontWeight: fontWeight ?? ""}}>{text}</p>}
        {frontArrow && (frontIcon ?? <ChevronRight />)}
    </button>
  )
}