'use client'

import { useParams } from 'next/navigation'

export default function Detail() {
    const params = useParams()
    return <p>Churras: {params.slug}</p>
}
