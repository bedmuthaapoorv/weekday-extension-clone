// fetching jobs data from weekday's API
export default async function fetchJobsData(limit: Number, offset: Number) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
        "limit": limit,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    let jobCardsResponse = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    let jobCardsJSON = JSON.parse(await jobCardsResponse.text())
    return jobCardsJSON
}