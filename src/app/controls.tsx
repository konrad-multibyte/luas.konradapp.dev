import stops from "./stations.json"

export default function StopPicker() {
    return (
        <>
            <form action="#" method="GET">
                <select>
                    {stops.stations.map((station, index) => (
                        <option key={index} value={station.shortName}>{station.displayName} - {station.displayIrishName}</option>
                    ))}
                </select>
                <button type="submit">GET</button>
            </form>
        </>
    )
}