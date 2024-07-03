import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

export default function Maps() {
    return <div className="flex flex-col justfy-center w-full max-w-lg bg-white p-2 gap-2 shadow rounded">
        <h3 className="text-xl font-semibold text-neutral-700">Lokasi</h3>
        <MapContainer center={[-7.437744161322421, 110.23335342085541]} zoom={13} style={{ height: '20rem', width: '100%' }}  scrollWheelZoom={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.437744161322421, 110.23335342085541]}>
            <Tooltip>Lokasi Acara 📌</Tooltip>
        </Marker>
        </MapContainer>
        <p className="text-sm">Dekat Jl. Jlodran, Rejoso, Jambewangi, Kec. Secang, Kabupaten Magelang, Jawa Tengah 56195</p>
    </div>
    
}