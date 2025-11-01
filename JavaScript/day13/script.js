async function getData() {

    // simulatate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)

        }, 3500);
    })
}


async function main() {


    console.log("Loading Modules")

    console.log("Do something else")

    console.log("load data")
    let data = await getData()

    console.log(data)

    console.log("process data")

}

main()

// data.then((v) => {
//     console.log(data)

//     console.log("process data")
// })
