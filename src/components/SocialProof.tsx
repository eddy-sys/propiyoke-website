const managers = [
  { initials: 'JM', name: 'James Mwangi', city: 'Nairobi' },
  { initials: 'AO', name: 'Amina Odhiambo', city: 'Mombasa' },
  { initials: 'PK', name: 'Peter Kamau', city: 'Kisumu' },
  { initials: 'GW', name: 'Grace Wanjiku', city: 'Nairobi' },
  { initials: 'DM', name: 'David Mutua', city: 'Eldoret' },
  { initials: 'LN', name: 'Lucy Njeri', city: 'Nakuru' },
  { initials: 'BK', name: 'Brian Kipchoge', city: 'Mombasa' },
  { initials: 'SW', name: 'Sarah Waweru', city: 'Thika' },
]

// Duplicate for seamless loop
const items = [...managers, ...managers]

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Trusted by property managers across Kenya">
      <p className="social-proof-label">
        Trusted by property managers across Kenya
      </p>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="marquee-track" role="list">
          {items.map((m, i) => (
            <div className="proof-item" key={`${m.initials}-${i}`} role="listitem">
              <div className="proof-avatar" aria-hidden="true">{m.initials}</div>
              <div>
                <div className="proof-name">{m.name}</div>
                <div className="proof-city">{m.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
