interface ButtonProps {
  text: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ text, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded transition-all"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
