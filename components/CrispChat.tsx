'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('02205d44-ec85-4b50-9036-f8af1c72ddf4')
  }, [])

  return null
}
