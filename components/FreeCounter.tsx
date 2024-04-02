'use client'

import { MAX_FREE_COUNTS } from '@/constans'
import { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import { useProModal } from '@/hooks/use-pro-modal'

interface IFreeCounterProps {

  isPro: boolean
}

const FreeCounter = ({

  isPro = false
}: IFreeCounterProps) => {
  const proModal = useProModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (isPro) {
    return null
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
            
            </p>
            <Progress
              className="h3"
              
            />
          </div>
          <Button
            className="w-full"
            variant={'secondary'}
            onClick={proModal.onOpen}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter
