import { ReactNode, memo } from "react"

export const CalculatorButton = memo(({ label, onClick }: { label: string | ReactNode, onClick: () => void }) => (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  )
)