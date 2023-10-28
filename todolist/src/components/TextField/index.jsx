/* eslint-disable react/prop-types */
export default function TextField({
    value,
    onChange,
    placeholder="Escribe tu tarea",
    className,
    type,
    name
}) {

    return(
        <input
            name={name}
            type={type}
            value={value}
            aria-label={name}
            onChange={onChange}
            className={`border w-full px-2 py-3 rounded-l outline-none ${className}`}
            placeholder={placeholder}
          />
    )
}