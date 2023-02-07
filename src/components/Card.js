export default function Card({ header, footer }) {
  return (
    <div className="bg-white rounded-t-md max-w-xl">
      {header}
      {footer ? <hr className="border-secondary-300" /> : null}
      {footer}
    </div>
  )
}
