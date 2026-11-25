import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'

const CHATBOT_URL = 'https://strong-benevolence-production-035814aa.up.railway.app'

export function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 h-[min(580px,calc(100dvh-100px))] w-[360px] overflow-hidden rounded-2xl shadow-2xl sm:right-6 max-sm:left-4 max-sm:w-auto">
          <iframe
            src={CHATBOT_URL}
            title="Chat con Devs Extension"
            className="h-full w-full border-0"
            allow="clipboard-write"
          />
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2a9d8f] text-white shadow-lg transition-transform hover:scale-105 sm:right-6"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </>
  )
}
