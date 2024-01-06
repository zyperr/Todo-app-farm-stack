import React from 'react'
import "../styles/components/snackbar.css"
export function SnackBar({text,type}) {
  return (
    <div className={`snackbar ${type}`}>
        {text}
    </div>
  )
}

