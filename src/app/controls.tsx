import stops from "./stations.json"

export default function StopPicker() {
    return (
        <>
            <form method="GET" >
                <div className="h-56">
                    <div className="">
                        <select className="inline-block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {stops.stations.map((station, index) => (
                                <option key={index} value={station.shortName}>{station.displayName} - {station.displayIrishName}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Stop
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}