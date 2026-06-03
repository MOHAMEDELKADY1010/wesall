export default function SectionDivider({ light = false }) {
  const color = light ? 'rgba(249,246,241,0.2)' : 'rgba(201,169,110,0.3)'
  const diamond = light ? 'rgba(249,246,241,0.3)' : '#C9A96E'

  return (
    <div className="flex items-center justify-center py-8 px-8">
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${color})` }} />
      <div style={{ margin: '0 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '3px', height: '3px', background: diamond, transform: 'rotate(45deg)', opacity: 0.6 }} />
        <div style={{ width: '5px', height: '5px', background: diamond, transform: 'rotate(45deg)' }} />
        <div style={{ width: '3px', height: '3px', background: diamond, transform: 'rotate(45deg)', opacity: 0.6 }} />
      </div>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  )
}
