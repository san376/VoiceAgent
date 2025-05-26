import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'


function AlertConfirmation({children,stopInterview}) {
  return (
    <Alert>
  <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription onClick={()=>stopInterview()}>
        {children}
      </AlertDescription>
</Alert>


  )
}

export default AlertConfirmation
