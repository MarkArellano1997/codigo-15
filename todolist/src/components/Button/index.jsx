/* eslint-disable react/prop-types */
export default function Button({
    text,
    type = "button",
    className,
    variant = "primary"}
    ) {

    const colors = {
        primary:"bg-green-400 border-green-400 text-while",
        secondary: "bg-blue-400 border-blue-400 text-while",
        danger: "bg-red-400 border-red-400 text-while",
        warning: "bg-yellow-400 border-yellow-400 text-back",
        dark: "bg-back border-back text-while"
    }

    return(
        <>
            <button
            type={type}
            aria-label={text}
            className={`px-2 py-3 rounded-r border ${colors[variant]} ${className}`}
            >
                {text}
            </button>
        
        </>
    )
    
}