import React from 'react';
import { Loading3QuartersOutlined } from "@ant-design/icons";
import {Spin} from "antd";
import "./button.scss"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PryBtn(
  {text, action, loading, pry, backArrow, frontArrow, rounded, bordered, fontSize, colored, padding, disable, bg, fullWidth, btnIcon, width, frontIcon} : 
  {text: string, action?: (e: React.MouseEvent<HTMLElement>)=> void, loading?: boolean, pry?: boolean, backArrow?: boolean, frontArrow?: boolean, rounded?: boolean, bordered?: boolean, fontSize?: string, colored?: boolean, padding?: string, disable?: boolean, bg?: string, fullWidth?: boolean, btnIcon?: React.ReactNode, width?: string, frontIcon?: React.ReactNode}) {
    // Loading Spinner
    const antIcon = (
    <Loading3QuartersOutlined style={{ fontSize: "24px", color: pry ? "white" : "#327AEF" }} spin />
    );
  return (
    <button disabled={disable} className={`btn ${pry? "primary" : "light"}`} style={{ 
        paddingLeft: backArrow? "0" : "", 
        padding: padding ? padding : '',
        borderRadius: rounded ? ".5rem" : '',
        border: bordered ? (
          colored ? "1px solid #327AEF" : (
            disable ? "1px solid #F5F5F5" : "1px solid #E4E4E4"
          )
        ) : "",
        fontSize: fontSize ? fontSize : "",
        color: colored ? "#327AEF" : (
          disable ? '#A9A9A9' : ''
        ),
        cursor: disable ? 'no-drop' : '',
        background: disable ? (pry ? (bg ? bg : '#f1f1f1') : '') : (bg ? bg : ''),
        minWidth: fullWidth ? '100%' : width ? width : '',
        justifyContent: fullWidth ? 'center' : '',
      }} onClick={action}>
        {backArrow && <ChevronLeft />}
        {btnIcon && <div style={{ height: '1rem', width: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{btnIcon}</div>}
        {loading ? <Spin indicator={antIcon} /> : <p>{text}</p>}
        {frontArrow && (frontIcon ?? <ChevronRight />)}
    </button>
  )
}