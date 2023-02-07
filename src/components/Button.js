export default function Button({ children, className, ...otherProps }) {
  return (
    <button className={`py-3 px-5 rounded-full ${className}`} {...otherProps}>
      <p className="text-white font-black px-5 mx-5">{children}</p>
    </button>
  )
}
