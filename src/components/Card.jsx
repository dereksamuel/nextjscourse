export default function Card({ header, footer }) {
  return (
    <div className="bg-white rounded-md mx-2">
      {header}
      {footer ? <hr /> : null}
      {footer}
    </div>
  )
}
