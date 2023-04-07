export  async function GET(request: Request) {
    const uri = `https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${request.id}encrypt=false`
    const options = {
        method: 'GET'
    }
    const res = await fetch(uri, options).then(data => console.log(data))
}